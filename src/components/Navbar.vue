<template>
  <div>
    <img src="../assets/idea.png" alt="logo" style="width: 120px; margin-left: -10px" >
    <div class="row" style="margin-top: 30px">
        <div class="col-8">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li class="d-flex">
                    <router-link :to="{}" class="nav-link">Recent</router-link>
                    <router-link :to="{}" class="nav-link" style="margin-left: 15px;">Popular</router-link>
                    <router-link :to="{}" class="nav-link" style="margin-left: 15px;">Problems</router-link>

                </li>
            </ul>
        </div>
        <div class="col-4">
            <form class="d-flex">
                <a-input placeholder="Search..." class="me-2" />
                <i class="fa fa-search" style="margin-top: 7px; cursor: pointer;"></i>
            </form>
        </div>
    </div>
  </div>
  <a-collapse v-model:activeKey="activeKey" :bordered="false">
    <template #expandIcon="{ isActive }">
      <caret-right-outlined :rotate="isActive ? 90 : 0" />
    </template>
    <a-collapse-panel key="1" header="Post your idea" :style="customStyle">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" v-model="formData.title">
                    <span v-for="error in v$.title.$errors" :key="error.$uid" class="error">{{ error.$property }} is required</span>
                    <label for="image" class="my-10">Image</label>
                    <input type="file" class="form-control">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <label for="description">Description</label>
                    <textarea id="description" cols="30" rows="5" class="form-control" v-model="formData.description"></textarea>
                    <span v-for="error in v$.description.$errors" :key="error.$uid" class="error">{{ error.$property }} is required</span>
                </div>
            </div>
            <a-button type="primary submit" class="float-end my-2" @click="postIdea">Post</a-button>
        </div>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import axios from "axios";
import { ref } from '@vue/reactivity';
import { CaretRightOutlined } from '@ant-design/icons-vue';
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
    components: {
        CaretRightOutlined
    },
    setup() {
        const activeKey = ref(['0']);
        const customStyle = 'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden';

        const formData = ref({
            title: "",
            description: ""
        });

        const rules = {
            title: { required },
            description: { required }
        };

        const v$ = useVuelidate(rules, formData);

        const postIdea = async () => {
            const result = await v$.value.$validate();
            if(result) {
                axios.post("http://localhost:3000/ideas", {
                    title: formData.value.title,
                    body: formData.value.description
                })
                .then((response) => {
                    activeKey.value = 0;
                })
            }
        };

        return {
            activeKey,
            customStyle,
            formData,
            rules,
            v$,
            postIdea,
        }
    },
}
</script>

<style scoped>
    .error {
        font-size: 11px;
        color: red;
    }
</style>
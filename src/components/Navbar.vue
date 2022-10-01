<template>
  <div>
    <router-link :to="{ name: 'Home' }">
        <img src="../assets/idea.png" alt="logo" style="width: 120px; margin-left: -10px" >
    </router-link>
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
                    <div>
                        <input type="text" placeholder="Title" v-model="formData.title" class="input-field">
                        <span v-for="error in v$.title.$errors" :key="error.$uid" class="error">{{ error.$property }} is required</span>
                    </div>
                    <div style="margin: 20px 0">
                        <input type="file" @change="onFileSelected" ref="uploadImage" style="display: none;">
                        <div @click="$refs.uploadImage.click()" class="upload-img">
                            <img src="../assets/imageIcon.png" alt="Image" style="width: 10%;">
                            <label style="cursor: pointer;">Upload Image</label>
                        </div> 
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <textarea cols="30" rows="5" placeholder="Description" v-model="formData.description" class="input-field"></textarea>
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
            description: "",
            selectedFile: null
        });

        const rules = {
            title: { required },
            description: { required },
          
        };

        const v$ = useVuelidate(rules, formData);

        const postIdea = async () => {
            var fd = new FormData();
            fd.append("title", formData.value.title);
            fd.append("body", formData.value.description);
            fd.append("image", formData.value.selectedFile);
            const result = await v$.value.$validate();
                
            if(result) {
                console.log(result);
                axios.post("http://localhost:3000/ideas", {
                    "title": formData.value.title,
                    "body": formData.value.description
                })
                // axios.post("http://localhost:3000/ideas", fd, {
                //     'Content-Type': 'multipart/form-data'
                // })
                .then((response) => {
                    activeKey.value = 0;
                    console.log(response);
                })
            }
        };

        const onFileSelected = (event) => {
            formData.value.selectedFile = event.target.files[0];
            console.log(formData)
        }

        return {
            activeKey,
            customStyle,
            formData,
            rules,
            v$,
            postIdea,
            onFileSelected
        }
    },
}
</script>

<style scoped>
    .error {
        font-size: 11px;
        color: red;
    }

    .input-field {
        width: 100%;
        border: 1px solid #D3D3D3;
        padding: 2px 7px;
    }

    .input-field:hover {
        border: 1px solid #40a9ff;
    }

    .input-field:focus {
        outline: none;
        -webkit-box-shadow: 0px 0px 4px #40a9ff;
       -moz-box-shadow: 0px 0px 4px #40a9ff;
            box-shadow: 0px 0px 4px #40a9ff;
    }

    .upload-img {
        cursor: pointer;
        padding: 2px;
    }

    .upload-img:hover {
        background-color: #d5d5d5d6;
        border-radius: 2px;
    }
</style>
<template>
    <div class="row">
        <div class="col" v-for="idea in ideas" :key="idea.id">
            <div class="card" style="width: 22rem; margin-top: 15px;">
                <div class="card-body">
                    <h5 class="card-title">{{ idea.title }}</h5>
                    <p class="card-text">{{ idea.body }}</p>
                    <i class="fa-regular fa-thumbs-up" style="cursor: pointer; margin: 10px 0 0 10px"></i>    
                </div>
            </div>
        </div>
    </div>
</template>
learn row col in bootstrap
cards -> make responsive
post idea feature
<script>
import axios from "axios";

export default {
    data() {
        return {
           ideas: [] 
        }
    },
    mounted() {
        this.getIdeas();
    },
    methods: {
        getIdeas() {
            axios
                .get("http://localhost:3000/ideas")
                .then((response) => {
                    this.ideas = response.data;
                }).catch(err=> console.log(err))
        }
    }
}
</script>

<style>

</style>
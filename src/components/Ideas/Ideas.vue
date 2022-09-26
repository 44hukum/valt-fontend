<template>
  <div class="container d-flex" style="justify-content: center;">
    <template v-for="idea in ideas" :key="idea.id">
        <a-card :title="idea.title" style="width: 300px; margin: 0 10px;">
            <p>{{ idea.body }}</p>
        </a-card>
    </template>
  </div>
</template>

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
                })
        }
    }
}
</script>

<style>

</style>
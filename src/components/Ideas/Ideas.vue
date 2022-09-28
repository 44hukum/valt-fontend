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

<script>
import getIdeas from "../composables/getIdeas";

export default {
    setup() {
        const { ideas, loadIdeas } = getIdeas();

        loadIdeas();
        
        return {
            ideas,
        }
    }
}
</script>

<style>

</style>
import axios from "axios";
import { ref } from '@vue/reactivity';

const getIdeas = () => {
    const ideas = ref([]);

        const loadIdeas = async () => {
            await axios
                .get("http://localhost:3000/ideas")
                .then((response) => {
                    ideas.value = response.data
                })
        };

    return {
        ideas,
        loadIdeas
    }
}

export default getIdeas;
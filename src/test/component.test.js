import {getByText, render} from '@testing-library/vue'
import Ideas from "../components/Ideas/Ideas.vue";

test('it should work',()=>{
    const {getByText} = render(Ideas,{
        props:{

        }
    })

    getByText()
})
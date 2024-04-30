import { ref } from 'vue'
import axios from 'axios';
import ts from 'typescript';
//传出 defineExpose
//导入 defineProps

export default function () {
    let imgList = ref([''])
    async function addImg() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            imgList.value.push(result.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        imgList,
        addImg
    }
}
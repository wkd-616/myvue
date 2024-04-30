<template>
    <div class="person">
        <hr>
        <img v-for="(item, index) in imgList" :key="index" :src="item" alt=""><br>
        <button @click="addImg">来一张</button>
    </div>
</template>

<script setup lang="ts" name="person">
    import { ref, computed, watchEffect } from 'vue'
    //传出 defineExpose
    //导入 defineProps

    import useDog from '@/hooks/useGetImg'
    const { imgList, addImg } = useDog()


    watchEffect(() => {
        
    })
</script>


<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin-right: 10px;
        border-radius: 10px;
    }
    li {
        font-size: 20px;
    }
    img {
        height: 100px;
        margin-right: 5px;
    }
</style>
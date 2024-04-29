<template>
    <div class="person">
        <ul>
            <li v-for="(item, index) in list" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="person">
    import { ref, computed, watchEffect } from 'vue'
    //传出 defineExpose
    //导入 defineProps

    import { type Persons } from '../types'
    
    watchEffect(() => {
        
    })

    defineProps<{list?: Persons}>()

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
</style>
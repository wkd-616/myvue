<template>
    <Preson :list="person"/>
    <!-- <Login /> -->
</template>

<script setup lang="ts" name="App">
    import { ref, computed, watch } from 'vue';
    import Preson from './components/Preson.vue';
    import { type Persons } from './types';
    import  Login  from './components/Login.vue';

    let person = ref<Persons>([
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'John', age: 25 },
        { id: 3, name: 'John', age: 25 },
    ])


    
</script>


<style scoped>
</style>
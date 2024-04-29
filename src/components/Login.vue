<template>
    <div class="Login">
        <form @submit.prevent="handleSubmit">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>


<script setup lang="ts" name="Login">
    //导入 ref(响应式), computed(组合响应式), watchEffect(动态监听), withDefaults(设置传入默认值)
    import { ref, computed, watchEffect } from 'vue';
    //传出 defineExpose
    //传入 defineProps

    //定义 props
    const props = withDefaults(defineProps<{
        username: string,
        password: string,
    }>(), {
        username: '',
        password: '',
    });

    //定义数据
    const username = ref(props.username);
    const password = ref(props.password);

    //定义方法
    function handleSubmit() {
        console.log(username.value, password.value);
    }

    watchEffect(() => {

    })
</script>


<style scoped>
</style>
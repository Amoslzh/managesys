<template>
    <div>
        <h1>我是home</h1>
    </div>
</template>

<script setup lang="ts">
import userStore from '@/store/modules/user'
const userstore = userStore()

userstore.userInfo()


</script>

<style scoped>

</style>
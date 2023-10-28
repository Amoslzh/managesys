<template>
    <div class="logo_main">
        <img :src="setting.logo" class="logo">
        <p>{{ setting.title }}</p>
    </div>
</template>

<script setup lang="ts">
import setting from '@/setting';


</script>

<style scoped lang="scss">
.logo_main{
    display:flex;
    align-items: center;
    .logo{
        width: 40px;
        height: 40px;
    }
    p{
        color: #ffffff;
        text-indent: 8px;
    }
}
</style>
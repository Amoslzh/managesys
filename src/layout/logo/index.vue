<template>
    <div class="logo_main">
        <img :src="setting.logo" class="logo">
        <div v-if="!setstore.zhedie" class="title">{{ setting.title }}</div>
    </div>
</template>

<script setup lang="ts">
import setting from '@/setting';
import settingStore from '@/store/modules/setting';

const setstore = settingStore()

</script>

<style scoped lang="scss">
.logo_main{
    padding: 8px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    .logo{
        // width: 40px;
        height: 40px;
    }
    .title{
        display: inline-block;
        white-space: nowrap;
        color: #ffffff;
        text-indent: 8px;
    }
}
</style>
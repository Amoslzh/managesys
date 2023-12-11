<template>
    <div class="tabbar">
        <Bread></Bread>
        <Setting></Setting>
    </div>
</template>

<script setup lang="ts">
import Bread from './Breadcrumbs/index.vue'
import Setting from './setting/index.vue'
</script>

<style scoped lang="scss">
.tabbar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 16px;
}
</style>
<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="slider">
      <logo></logo>
    </div>
    <!-- 顶部选项 -->
    <div class="tabbar">456</div>
    <!-- 内容区域 -->
    <div class="layout_main">789</div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: red;
  display: flex;
  .slider {
    width: 200px;
    height: 100vh;
    background: $slider-bcolor;
    padding: 8px;

  }

  .tabbar {
    position: fixed;
    left: 200px;
    top: 0px;
    width: calc(100% - 200px);
    height: 70px;
    background-color: $tabbar-bcolor;
  }

  .layout_main {
    width: calc(100% - 200px);
    height: calc(100vh - 70px);
    background-color: $main-bcolor;
    margin-top: 70px;
    padding: 20px;
    overflow: auto;
  }
}

::-webkit-scrollbar {
  width: 15px;
  height: 100%;
  background-color: $main-bcolor;
}

::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 2.5px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #c1c1c1;
  border-radius: 2.5px;
}
</style>

<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="slider">
      <el-menu
        background-color="#252526"
        text-color="#ffffff"
        router
        :default-active="route.path"
        :collapse="setstore.zhedie"
      >
        <Logo></Logo>
        <Manu :routemanu="store.routemanu"></Manu>
      </el-menu>
    </div>
    <!-- 顶部选项 -->
    <div class="layout_righet">
      <div class="tabbar">
        <Tabbar></Tabbar>
      </div>
      <!-- 内容区域 -->
      <div class="layout_main">
        <Main></Main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "./logo/index.vue";
import Manu from "./manu/Manu.vue";
import userStore from "@/store/modules/user";
import Main from "./main/index.vue";
import Tabbar from "./tabbar/index.vue";
import settingStore from "@/store/modules/setting";
const setstore = settingStore()
const store = userStore();

import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped lang="scss">


.layout_container {
  width: 100%;
  height: 100vh;
  // background-color: red;
  display: flex;

  .slider {
    // width: 200px;
    height: 100vh;
    background: $slider-bcolor;
    padding: 3px;
    .logo{
        // width: 40px;
        height: 40px;
    }
    .el-menu {
      border-right: none;
    }
  }
  .layout_righet {
    // background-color: aqua;
    height: 100%;
    flex: 1;

    .tabbar {
      // position: fixed;
      // left: 200px;
      // top: 0px;
      // width: calc(100% - 200px);
      height: 70px;
      background-color: $tabbar-bcolor;
    }

    .layout_main {
      // width: calc(100% - 200px);
      height: calc(100vh - 70px);
      background-color: $main-bcolor;
      // margin-top: 70px;
      padding: 20px;
      overflow: auto;
    }
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

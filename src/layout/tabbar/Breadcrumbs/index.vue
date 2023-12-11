<template>
  <div class="breadnode">
    <i class="iconfont zheicon" :class="zheiconc" @click="setstore.zhedie = !setstore.zhedie"></i>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item v-for="item in route.matched" :key="item.path" v-show="item.meta.title" :to="item.path">
        <span>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import settingStore from '@/store/modules/setting';
import { computed } from "vue"
import { useRoute } from 'vue-router';

let zheiconc = computed(()=>{
  return !setstore.zhedie? "icon-zhedie1" : "icon-zhedie2"
})
const setstore = settingStore()

const route = useRoute()


</script>



<style scoped lang="scss">
.breadnode {
  display: flex;
  column-gap: 16px;

  .zheicon{
    cursor: pointer;
    color: aliceblue;
  }

  :deep(.el-breadcrumb__inner){
    color: #B2B2B2;
    &.is-link:hover{
      color: white;
    }
  }
}
</style>

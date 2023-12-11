<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"  v-if="refresh"/>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import settingStore from "@/store/modules/setting";
import {  nextTick, ref, watch } from "vue";


const setstore = settingStore();

let refresh = ref(true)
watch(
  () => setstore.refresh,
  () => {
    refresh.value = false
    nextTick(()=>{
      refresh.value = true
    })
    
  }
);
</script>

<style scoped lang="scss">
.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 1;
}
</style>

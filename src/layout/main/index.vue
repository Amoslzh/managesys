<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.fade-enter-active{
  transition: all 0.5s ease;
}

.fade-enter-from{
    opacity: 0;
}
.fade-leave-to {
    opacity: 1;
}
</style>

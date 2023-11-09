<template>
  <template v-for="item in props.routemanu" :key="item.path">
    <template v-if="item?.meta && !item?.meta?.hide">
      <el-menu-item :index="item.path" v-if="!item.children">
        <i :class="item.meta?.icon" v-if="item.meta?.icon"></i>
        <template #title>{{ item.meta?.title}}</template>
      </el-menu-item>
      <el-menu-item
        v-if="item.children && item.children.length == 1"
        :index="item.children[0].path"
      >
      <i :class="item.children[0].meta?.icon" v-if="item.children[0].meta?.icon"></i>
        <template #title>
          <span>
            {{ item.children[0].meta?.title }}
          </span></template>
      </el-menu-item>
      <el-sub-menu
        v-if="item.children && item.children.length > 1"
        :index="item.path"
      >
        <template #title>
          <i :class="item.meta?.icon" v-if="item.meta?.icon"></i>
          <span>{{ item.meta?.title }}</span>
        </template>
        <Manu :routemanu="item.children"></Manu>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
const props = defineProps(["routemanu"]);




</script>

<style scoped lang="scss">
i {
  padding-right: 8px;
}
</style>

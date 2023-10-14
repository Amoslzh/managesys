<template>
  <div>红字</div>
<div class="c">蓝字</div>
<div id="id" class="c">黄字</div>
<div id="id" class="c">黄字</div>
<div id="id" class="c">黄字</div>
<div id="id" class="c">黄字</div>
</template>

<script setup lang="ts">
import { reqLogin } from './api/user'

reqLogin({
  username: 'admin',
  password:'123'
})

</script>

<style scoped lang="scss">
div:nth-of-type(2n){
  color: red;
}
</style>

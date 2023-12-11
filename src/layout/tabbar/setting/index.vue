<template>
  <div class="settingnode">
    <el-button circle size="small" @click="handleRefresh">
      <template #icon>
        <i class="iconfont icon-jiazai_shuaxin"></i>
      </template>
    </el-button>
    <el-button circle size="small" @click="handleFullscreen">
      <template #icon>
        <i class="iconfont icon-quanping"></i>
      </template>
    </el-button>
    <el-button circle size="small">
      <template #icon>
        <i class="iconfont icon-quanjushezhi_o"></i>
      </template>
    </el-button>
    <img :src="userstore.usericon" alt="加载失败" class="touxiang" />


    <el-dropdown>
      <span class="drownspan"> 
        {{ userstore.username }}
        <i class="iconfont icon-xiala"></i>
     </span>
      
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import settingStore from '@/store/modules/setting';
import userStore from '@/store/modules/user';
import { useRouter } from 'vue-router';
const setstore = settingStore()
const userstore = userStore()
const router = useRouter()
function handleRefresh(){
  setstore.refresh = !setstore.refresh
}

function handleFullscreen(){
  let full = document.fullscreenElement;
  //判断此时是否全屏
  if (!full) {
    document.documentElement.requestFullscreen();
  }else{
    document.exitFullscreen()
  }
}

function handleLogout() {
  userstore.userLogout()
  router.push('/login')
}

</script>

<style scoped lang="scss">
.settingnode {
  display: flex;
  align-items: center;

    .drownspan{
        color: white;
        cursor: pointer;
    }

}
.touxiang {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit:fill;
  margin: 0px 16px;
}
</style>

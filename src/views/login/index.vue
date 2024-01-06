<template>
  <div class="login_container">
    <el-row>
      <el-col :xs="0" :span="12">
        <el-button>Go1</el-button>
      </el-col>
      <el-col :span="12">
        <!-- // -->
        <el-form
          :model="loginform"
          class="login_form"
          :rules="rule"
          ref="formRef"
        >
          <p class="title">Hello</p>
          <p class="hytl">欢迎使用后台系统</p>
          <el-form-item class="msgitem" prop="username">
            <el-input v-model="loginform.username">
              <template #prefix>
                <i class="iconfont icon-yonghuming"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item class="msgitem" prop="password">
            <el-input v-model="loginform.password" :show-password="true">
              <template #prefix>
                <i class="iconfont icon-mima"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item class="msgitem">
            <el-button
              type="primary"
              class="logbt"
              @click="handle_login(formRef)"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
        <!-- /// -->
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import userStore from "@/store/modules/user";
import { ElNotification } from "element-plus";
import { useRouter } from "vue-router";
import { getcntime } from "@/utils/time";
import type { FormInstance } from "element-plus";
const $router = useRouter();

const store = userStore();

let loginform = reactive({
  username: "",
  password: "",
});

async function handle_login(formEl: FormInstance | undefined) {
  if (!formEl) return;

  //查看校验结果
  let res = await formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });

  if (!res) {
    return;
  }

  let msg = getcntime();
  store
    .userLogin(loginform)
    .then(() => {
      ElNotification({
        title: "登录成功",
        message: `${msg}`,
        type: "success",
      });
      $router.push("/");
    })
    .catch((res: Error) => {
      ElNotification({
        title: "登录失败",
        message: res.message,
        type: "error",
      });
      throw res;
    });
}

//表单校验
const rule = {
  username: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
  ],
};

const formRef = ref<FormInstance>();
</script>

<style scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;

  .title {
    font-size: 30px;
    margin-bottom: 8px;
  }
  .hytl {
    font-size: 17px;
    margin-bottom: 18px;
  }
  .login_form {
    width: 60%;
    min-width: 360px;
    background: url("@/assets/images/login_form.png");
    backdrop-filter: blur(10px);
    position: relative;
    top: 30vh;
    left: 10vh;
    padding: 35px 25px;
    color: aliceblue;

    .msgitem {
      padding: 0 16px;

      .logbt {
        width: 100%;
      }
    }
  }
}
</style>

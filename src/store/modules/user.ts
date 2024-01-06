import { defineStore } from "pinia";
// import type { loginform } from '@/api/user/type'
import { reqLogin, reqUserInfo, reqLogout } from "@/api/user";
import routes from "@/router/routes";
import { reactive } from "vue";
const userStore = defineStore("User", {
  state: () => {
    return {
      token: "",
      routemanu: routes,
      username: "",
      usericon: "",
    };
  },
  actions: {
    async userLogin(data: any) {
      let res = await reqLogin(data);
      console.log(res);

      if (res.code == 200) {
        this.token = <string>res.data;
        return Promise.resolve();
      } else {
        return Promise.reject(new Error(res.data));
      }
    },
    async userInfo() {
      let res = await reqUserInfo();
      if (res.code == 200) {
        let { name, avatar } = res.data;
        this.username = name;
        this.usericon = avatar;
      } else {
        return Promise.reject(new Error(res.data.message));
      }
    },
    async userLogout() {
      //向服务器发起请求删除用户的唯一标识
      try {
        await reqLogout();
      } catch (error:any) {
        return  Promise.reject(new Error(error))
      }
      this.token = "";
      this.usericon = "";
      this.username = "";
    },
  },
  persist: {
    afterRestore(ctx) {
      ctx.store.$state.routemanu = routes;
    },
  },
});

export default userStore;

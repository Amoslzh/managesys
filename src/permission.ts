import router from "./router";
import nprogress from "nprogress";
import userStore from "./store/modules/user";
import { reqUserInfo } from "@/api/user"
nprogress.configure({ showSpinner: false });

router.beforeEach(async (to) => {
  
  const userstore = userStore();
  
  const reqres = await reqUserInfo()
  
  if (reqres.code !=200 && to.name != "login") {
    console.log('hh');
    await userstore.userLogout()  // 当token过期 这里需要清除用户token 然后在回跳 不然会触发下面的return false;
    return { name: 'login', query: { redirect: <string>to.name } }
  }
  
  if (!userstore.token && to.name != "login") {
    return { name: 'login', query: { redirect: <string>to.name } }
  } else if (to.name == "login" && userstore.token) {
    return false;
  }
  nprogress.start();
  return;
});

router.afterEach((to, from) => {
  nprogress.done();
});

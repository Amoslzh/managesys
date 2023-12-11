import router from "./router";
import nprogress from "nprogress"

router.beforeEach(() => {
  console.log(123);
  nprogress.start(); 
  return;
});

router.afterEach((to, from) => {
    nprogress.done();
});

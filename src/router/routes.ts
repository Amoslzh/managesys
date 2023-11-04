import type { RouteRecordRaw } from "vue-router";


const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta:{
      title:'layout',
    },
    children:[
      {
        path: "home",
        component: () => import("@/views/home/index.vue"),
        name: "home",
        meta:{
          title:'首页',
          icon:'iconfont icon-shouye'
        }
      },
    ]
  },
  {
    path:"/acl",
    name:"acl",
    component: () => import("@/layout/index.vue"),
    meta:{
      title:'权限控制',
      icon:"iconfont icon-yuechi"
    },
    children:[
      {
        path:"/acl/user",
        component:()=>import("@/views/acl/user/index.vue"),
        name:"User",
        meta:{
          title:'用户管理',
          icon:"iconfont icon-yonghu"
        }
      },
      {
        path:"/acl/role",
        component:()=>import("@/views/acl/role/index.vue"),
        name:"role",
        meta:{
          title:'角色管理',
          icon:"iconfont icon-duanxiu"
        }
      },
      {
        path:"/acl/permission",
        component:()=>import("@/views/acl/permission/index.vue"),
        name:"permission",
        meta:{
          title:'菜单管理',
          icon:"iconfont icon-xiangmu"
        }
      } 
    ]
  },
  {
    path:"/product",
    name:"Product",
    component: () => import("@/layout/index.vue"),
    meta:{
      title:'商品管理',
      icon:"iconfont icon-qianbao"
    },
    redirect: '/product/trademark',
    children:[
      {
        path:"/product/trademark",
        component:()=>import("@/views/product/trademark/index.vue"),
        name:"Trademark",
        meta:{
          title:'品牌管理',
          icon:"iconfont icon-shangdian"
        }
      },
      {
        path:"/product/attr",
        component:()=>import("@/views/product/attr/index.vue"),
        name:"Attr",
        meta:{
          title:'属性管理',
          icon:"iconfont icon-zixun"
        }
      },
      {
        path:"/product/spu",
        component:()=>import("@/views/product/spu/index.vue"),
        name:"Spu",
        meta:{
          title:'SPU管理',
          icon:"iconfont icon-shaixuan"
        }
      },
      {
        path:"/product/sku",
        component:()=>import("@/views/product/sku/index.vue"),
        name:"Sku",
        meta:{
          title:'SKU管理',
          icon:"iconfont icon-biji"
        }
      } 
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta:{
      title:'login',
      hide:true,
    }
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta:{
      title:'login',
      hide:true,
    }
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta:{
      title:'404',
      hide:true,
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
  },
 

];

export default routes;
  // {
  //   path:'/test',
  //   component:()=>import("@/views/home/index.vue"),
  //   name:"test",
  //   meta:{
  //     title:'测试'
  //   },
  //   children:[
  //     {
  //       path: "/login",
  //       component: () => import("@/views/login/index.vue"),
  //       name: "login",
  //       meta:{
  //         title:'测试1'
  //       },
  //       children:[
  //         {
  //           path: "/login",
  //           component: () => import("@/views/login/index.vue"),
  //           name: "login",
  //           meta:{
  //             title:'测试5'
  //           }
  //         },
  //         {
  //           path: "/login",
  //           component: () => import("@/views/login/index.vue"),
  //           name: "login",
  //           meta:{
  //             title:'测试6'
  //           }
  //         },
  //       ]
  //     },
  //     {
  //       path: "/login",
  //       component: () => import("@/views/login/index.vue"),
  //       name: "login",
  //       meta:{
  //         title:'测试2'
  //       }
  //     },
  //   ]
  // },
  // {
  //   path:'/test2',
  //   component:()=>import("@/views/home/index.vue"),
  //   name:"test",
  //   meta:{
  //     title:'单子菜单'
  //   },
  //   children:[
  //     {
  //       path: "dan",
  //       component: () => import("@/views/login/index.vue"),
  //       name: "login",
  //       meta:{
  //         title:'单菜单测试'
  //       }
  //     },
  //   ]
  // },
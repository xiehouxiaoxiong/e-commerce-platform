//1.index.js里引入router模块
import { createRouter, createWebHashHistory } from "vue-router";

//引入这两个组件  写的两个.vue组件  

//这里最容易出错，报错结果看一下报错的路径和你的项目对不对得上，还有是否有home。vue这个vue后缀。
const register = import("../view/register.vue")
const login = import("../view/login.vue")
const home = import("../view/home.vue")
// 这种写法是一样的
// import home from "../components/home.vue";


//2.定义路由  定义的时候，要在src的components下建两个vue组件，像上边一样
const routes = [{
	path:"/",
	component:home},
  { path: "/register", component: register },//3000接口直接进入home.所有组件都可以这么写，不用写name
  {
    path: "/login",
    name: "login",
    component: login
  }
]
//3.创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})
//4.导出路由----去main.js导入
export default router

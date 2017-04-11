/**
 * 路由入口文件
 * User: luozhong
 * Date: 2017/4/10
 * Time: 17:05
 * email:luozhong0521@163.com
 */
import Vue from 'vue';
import App from './App.vue';//引入入口页面
import router from './router';   //这里引入的是router目录，会默认识别里面的index.js文件（不能是其他名字）
import VueResource from 'vue-resource';// 引入并使用vue-resource网络请求模块
Vue.use(VueResource);

//初始化页面，将入口页面App.vue 显示到index.html的 id为app的元素上
new Vue({
    el: '#app',    //这里绑定的是index.html中的id为app的div元素
    router,
    render: h => h(App)
});

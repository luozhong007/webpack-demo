/**
 * 路由管理js 统一管理路由页面
 * User: luozhong
 * Date: 2017/4/10
 * Time: 17:32
 * email:luozhong0521@163.com
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/**
 * 创建路由实例并配置路由映射 重定向到path是/home的映射
 * @path 路由页面路径
 * @component 页面组件位置引入
 */
const router = new VueRouter({
    routes: [
        {
            path: '/index',
            component: require('../views/index/index.vue')
        },
        {
            path: '/language',
            component: require('../views/languagePage/language.vue')
        },
        {
            path: '*',
            redirect: '/index'
        }
    ]
});
export default router;


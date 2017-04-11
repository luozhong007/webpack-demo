### 目录结构
<pre>
.
├── README.md
├── _config                  // 项目build配置目录
├── mobile                   // 项目build目录
├── build                    // 项目的配置文件目录
│   ├── dev-server.js        // 开发的服务配置
│   ├── webpack.base.conf.js // 基本的Webpack 配置文件
│   ├── webpack.dev.conf.js  // 开发的Webpack 配置文件
│   ├── webpack.prod.conf.js // 生产的Webpack 配置文件
├── index.js                 // 项目发布后的启动文件
├── package.json             // 项目配置文件
├── src                      // 生产目录
│   ├── assets               // css js 和图片资源
│   ├── data                 // 数据文件
│   ├── components           // 各种组件
│   ├── views                // 各种页面
│   ├── directives           // 各种指令
│   ├── filters.js           // 各种过滤器
│   ├── router.js            // 路由配置
│   ├── App.vue              // 根组件
│   ├── main.js              // Webpack 预编译入口
│   └── index.html           // 项目入口文件
.
</pre>
import { defineConfig } from 'umi';

function defineApp(app: { name: string; entry: string }) {
  if (process.env.NODE_ENV === 'production') {
    return {
      ...app,
      entry: `http://localhost:9000/${app.name}`,
    };
  } else {
    return app;
  }
}

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/main',
  publicPath: '/main/',
  runtimePublicPath: true,
  qiankun: {
    master: {
      sandbox: true,
      /**
       * 注册子应用信息
       *
       * name 唯一 推荐使用目录名
       */
      apps: [
        defineApp({
          name: 'dashboard',
          entry: 'http://localhost:9002',
        }),
        defineApp({
          name: 'login',
          entry: 'http://localhost:9003',
        }),
        defineApp({
          name: 'account',
          entry: 'http://localhost:9001',
        }),
        defineApp({
          name: 'libraries',
          entry: 'http://localhost:9005',
        }),
      ],
    },
  },
  antd: {},
  layout: {
    name: '微前端开发模板',
    locale: true,
    siderWidth: 240
  },
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/login',
      microApp: 'login',
      layout: false
    },
    {
      path: '/dashboard',
      microApp: 'dashboard',
      menu: {
        name: '首页',
        icon: 'dashboard',
      },
    },
    {
      path: '/libraries',
      menu: {
        name: '精选组件',
        icon: 'rocket',
      },
      routes: [
        {
          path: '/libraries',
          redirect: '/libraries/amap',
        },
        {
          path: '/libraries/amap',
          menu: {
            name: '高德地图',
            icon: 'rocket',
          },
          microApp: 'libraries',
        }
      ]
    },
    {
      path: '/account',
      microApp: 'account',
    }
  ],
});

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/libraries/',
  routes: [
    { path: '/', component: '@/pages/amap/markers' },
    {
      path: '/amap',
      routes: [
        { path: '/', redirect: '/amap/markers' },
        {
          path: '/amap/markers',
          component: '@/pages/amap/markers'
        }
      ]
    },
    {
      path: '/charts',
      routes: [
        { path: '/', redirect: '/amap/markers' },
        {
          path: '/amap/markers',
          component: '@/pages/amap/markers'
        }
      ]
    },
  ],
  qiankun: {
    slave: {}
  },
  dynamicImport: {},
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  scripts: [
    'https://gw.alipayobjects.com/os/lib/react/17.0.1/umd/react.development.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/17.0.1/umd/react-dom.development.js'
  ]
});

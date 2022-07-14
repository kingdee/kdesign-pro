const menus: IMenuItem[] = [
  {
    path: '/typical',
    name: '典型页面',
    level: 'app',
    routes: [
      {
        path: '/typical/workbench',
        name: '工作台',
        icon: 'workbench',
      },
      {
        path: '/typical/detail',
        name: '详情页',
        icon: 'my-receipt',
        level: 'category',
        routes: [
          { path: '/typical/detail/basic', name: '基础详情' },
          { path: '/typical/detail/columns', name: '分栏式详情' },
          { path: '/typical/detail/cross', name: '横向页签详情' },
          { path: '/typical/detail/vertical', name: '纵向导航详情' },
          { path: '/typical/detail/flow', name: '流程式详情' },
        ],
      },
      {
        path: '/typical/list',
        name: '列表页',
        icon: 'business-type',
        level: 'category',
        routes: [
          { path: '/typical/list/basic', name: '基础列表' },
          { path: '/typical/list/tree', name: '左树右表' },
          { path: '/typical/list/form', name: '内嵌表单列表' },
          { path: '/typical/list/banner', name: '通栏卡片列表' },
          { path: '/typical/list/card', name: '卡片列表' },
        ],
      },
      {
        path: '/typical/report',
        name: '报表页',
        icon: 'report-form',
        level: 'category',
        routes: [
          { path: '/typical/report/list', name: '列表报表' },
          { path: '/typical/report/statistics', name: '统计分析类报表' },
        ],
      },
      {
        path: '/typical/form',
        name: '表单页',
        icon: 'order-facet',
        level: 'category',
        routes: [
          { path: '/typical/form/basic', name: '基础表单页' },
          { path: '/typical/form/guide', name: '向导式表单页' },
          { path: '/typical/form/anchor', name: '锚点式表单页' },
          { path: '/typical/form/vertical', name: '纵向页签表单页' },
          { path: '/typical/form/preview', name: '模板预览式表单页' },
        ],
      },
      {
        path: '/typical/exception',
        name: '异常页',
        icon: 'warning-solid',
        level: 'category',
        routes: [
          { path: '/typical/exception/403', name: '403', component: '/exception/403' },
          { path: '/typical/exception/404', name: '404', component: '/exception/404' },
          { path: '/typical/exception/500', name: '500', component: '/exception/500' },
        ],
      },
    ],
  },
]

export default menus

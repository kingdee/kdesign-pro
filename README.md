# KDesign Pro

KDesign Pro 是基于 KDesign 和 UmiJS 而构建的开箱即用的中后台前端解决方案。使用 UmiJS 封装脚手架，致力于在 KDesign 设计系统的基础上，提炼典型页面模板、提供页面配置栏，为产品开发提效赋能。


## 特性
- 开箱即用的中后台前端解决方案。
- 使用 TypeScript 开发，提供完整的类型定义文件。
- 命令行快速启动项目
- 内置典型页面官方模板，高效开发
- 基于KDesign设计系统精心设计
— 可快速配置多种页面风格

## **特别说明**

1. **由于 KDesign Pro 是构建在 KDesign 组件库基础上的，所以有关组件使用请移步[KDesign 组件库](https://react.kingdee.design/components/overview)，布局 Layouts 相关的配置请移步[页面配置](/docs/setting.md)**

2. **KDesign 基于 Umi，支持 Umi 内置的`路由`、`构建`、`部署`、`测试`、`代理`、`Mock`、`权限`等全部能力。即除了自己提供的配置项以外，还支持[所有 Umi 的配置项](https://v3.umijs.org/zh-CN/config)，并且也支持 [Umi 生态的插件](https://v3.umijs.org/zh-CN/plugins/preset-react)，所以如果需要更多的功能，可以先看一下 Umi 的配置项和插件生态能否满足。**

## 安装命令行

开始开发之前，请您先确保已经在本地安装好了 `node`，然后运行以下命令安装命令行工具：

```shell
$ npm i -g @kdcloudjs/create-kdesign-app
```

## 初始化脚手架

我们使用刚才安装的 create-kdesign-app 来快速初始化脚手架，并提供3种模板
- umi3：使用umi3为基础框架，兼容ie11
- umi4：使用umi4为基础框架，不兼容ie11
- simple：使用umi4为基础框架，并简化典型页面及功能

```shell
$ create-kdesign-app                     
$ #? Please input the project name： my-app   # 输入项目名称
$ #? What template do you need? umi3...       # 选择模板
$ Initializing the KDesign App                # 开始初始化项目
$ Receiving objects stage 100% complete       # 等待接收完成
  # ...
$ Initializing Done                           # 完成
```

- 当然，也可以访问 [kdesign-pro](https://github.com/kingdee/kdesign-pro) 的`github`主页，直接克隆项目到本地，不同模板位于不同分支

安装依赖：

umi3默认使用npm, umi4默认使用pnpm, 可在`config/config.ts`或`.umirc.ts`中修改

```shell
$ cd my-app && npm install
```


## 开发

安装好脚手架后就可以开始开发

```shell
// 运行
$ npm run start
// 构建
$ npm run build
```

## FAQ
1. [node.js v17 以上版本程序启动失败问题](https://github.com/kingdee/kdesign-pro/issues/9)

## 浏览器兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## License
KDesign Pro 使用了 Apache License, Version 2.0. 详细license 请查看 [LICENSE](./LICENSE)

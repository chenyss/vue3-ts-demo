# vue3-ts-demo

功能实现思路：
登录：通过 localStorage 来保存用户信息，watch 记住用户信息按钮来保存/清除数据，点击登录发送网络请求，获取用户信息并跳转。配置单独的路由文件，封装方法收集文件转换成路由数组，根据用户的菜单权限，将可访问的路由添加到 router 里面。在登录成功和 pinia 配置完成时（解决用户登录后刷新页面的问题）调用该方法。

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

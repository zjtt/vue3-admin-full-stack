/// <reference types="vite/client" /> 
// 配置 ts 识别vue文件
declare module "*.vue" {
    import { Component } from 'vue';
    const component: Component;
    export default component;
}
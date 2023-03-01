// ts中使用sass变量 需要类型声明
// 参考文档 https://mattferderer.com/use-sass-variables-in-typescript-and-javascript

export interface ScssVariables {
    menuText: string;
    menuActiveText: string;
    subMenuActiveText: string;
    menuBg: string;
    menuHover: string;
    subMenuBg: string;
    subMenuHover: string;
    sideBarWidth: string;
}

export const variables: ScssVariables

export default variables

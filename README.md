# navigation-bar

## 使用方法

1. 把navigation-bar引入到小程序项目中。

2. 在App.json中对window进行配置

**App.json参数说明**

   |属性名                        |类型      |默认值    |说明
   |------------------------------|----------|---------|---
   |navigationBarBackgroundColor  |HexColor  |#000000  |导航栏背景颜色
   |navigationBarTextStyle        |String    |white    |导航栏标题、图标颜色，仅支持 black/white
   |navigationBarTitleText        |String    |WeChat   |导航栏标题文字内容

   ``` javascript
   {
     "navigationBarBackgroundColor": "#ffffff",
     "navigationBarTextStyle": "black",
     "navigationBarTitleText": "微信"
   } 
   ```

3. 在需要使用navigation-bar的页面page.json中添加navigation-bar自定义组件配置

```json
{
  "usingComponents": {
    "navigation-bar": "weapp-navigation-bar"
  }
}
```
4. WXML文件中引用navigation-bar

``` xml
<navigation-bar bindnavback="onnavback" enable="{{enable}}" show-loading="{{loading}}" title="{{title}}" " ></navigation-bar> 
```
**navigation-bar的属性介绍如下：**

|属性名            |类型        |默认值   |是否必须  |说明                                       |
|-------------------|-------------|------------|--------------|-----------------------------|
|title                 |String     |WeChat  |否             |导航栏标题文字内容
|enable            |Boolean |true        |否             |是否可以返回上一页面
|delta               |Number |1             |否             |返回的页面数，如果delta大于现有页面数，则返回到首页
|show-loading|Boolean |false       |否             |是否展示加载动画
|bg-style          |String     |                |否             |可设定导航栏样式，如'background-color: green'
|title-style        |String     |                |否             |可设定导航栏标题样式，如'color: black'
|bg-class          |String     |                |否             |可设置导航栏样式表
|title-class        |String     |                |否             |设置导航栏标题样式表

**Tip: ** navigation-bar中包含slot节点，位置固定于navigation-bar的最右侧，用于承载使用者提供的wxml结构

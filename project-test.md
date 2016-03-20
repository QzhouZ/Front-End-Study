# 项目实践

### 开发目录结构说明

```
│ static 静态资源文件目录
        ├─admin<—————后台管理相关资源文件
        ├─app<—————前台页面相关资源文件
               |—css
               |—img
               |—js 放网站业务模块，比如首页相关的index.js
        ├─fonts<—————字体文件
        ├─less<—————less文件
        ├─mod<—————模块组件目录，比如jquery、组件、插件等
        ├─seajs<—————模块加载器
        └─test<—————放测试文件，比如临时的json数据、图片
│ view 页面文件目录
```

### 页面重构

###### 模仿练习
在根目录下的test/demo文件夹里，有个项目的源码，根据上述的开发目录结构自己模仿重新写一下

###### 加强练习
网盘里有一些psd文件，用于重构页面练习。   
[psd练习文件](http://pan.baidu.com/s/1qX2OxGS) 提取密码：dtey

### Javascript偏

### 项目练习
练习项目在根目录下的test/js,

### 实践说明
使用Jquery写，Jquery请在底部引入


### 使用LESS快速编写CSS
使用less可以将所有的css文件都编译到一个文件里面，页面引入时只需要引入一个文件便可，
less独特的语法允许我们进行嵌套、变量的方式进行编码，大大提升了我们的效率。
备注：[戳我查看less相关说明](http://gitlab.zlzkj.org/Qzhou/Front-End/tree/master/LESS.md)

### 使用Seajs加载JS模块
Seajs是模块加载器，外部js文件我们可以通过它来加载，也可以在config.js里统一管理这些第三方插件，尤其是在多人协作开发的时候，大家的命名很容易冲突，通过模块加载就可以保证各自的模块相互独立，从此再也不需要当心冲突的问题了。
备注：[戳我去seajs官网学习一下](http://seajs.org/docs/)
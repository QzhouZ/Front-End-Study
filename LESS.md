#LESS介绍
使用less语法我用的最多的场景就是，定义基础变量，和嵌套编写，比如

```css
less:
.box {
    .hd {
        width: 100px;
    }
    .bd {
        width: 100px;
    }
}
```

编译成css:

```
.box .hd {
    width: 100px;
}
.box .bd {
    width: 100px;
}
```

这样的嵌套规则可以大大节约我们的时间，不推荐官方的编译方法，官方我们稍微看下语言特性和函数手册就可以了，这里我们使用[koala](http://koala-app.com/index-zh.html)软件编译
[戳我去LESS官方了解一下](http://less.bootcss.com/)

### 当前项目LESS文件夹下的less文件说明
目录位于``static/less/``

```
│ less 文件目录
        ├─variables.less<—————项目全局参数变量配置，比如配置网站的宽度、字体、颜色等
        ├─reset.less<—————重置样式，清除浏览器默认样式
        ├─grid-row.less<—————布局模块
        ├─quick.less<—————一些颗粒度小的class类，比如.fl代表float: left;主要用于快速布局
        ├─table.less<—————表格模块
        ├─theme.less<—————bootstrap风格的表单元素模块
        └─btn-1.less,btn-2.less,btn-3.less<—————三种不同风格的按钮模块
```
以后自己写的一些less模块，或网上找的一些模块，都可以放在这个目录下。
### 使用说明

在``static/app/css/app.less``头部引入

```less
// Base
@import "../../less/variables";
@import "../../less/reset";

// Module
@import "../../less/quick";
@import "../../less/grid-row";
```
以上base下的2个less文件是必须引入的

##### grid-row.less布局模块简要说明
将整个页面看成12栏的网格.
左边3栏，右边9栏

```
<div class="container">
    <div class="row-fluid">
        <div class="span3">
            left
        </div>
        <div class="span9">
            right
        </div>
    </div>
</div>
```

左边7栏，右边5栏

```
<div class="container">
    <div class="row-fluid">
        <div class="span7">
            left
        </div>
        <div class="span5">
            right
        </div>
    </div>
</div>
```

左边3栏，中间5栏,右边3栏

```
<div class="container">
    <div class="row-fluid">
        <div class="span3">
            left
        </div>
        <div class="span6">
            center
        </div>
        <div class="span3">
            right
        </div>
    </div>
</div>
```

##### 网格配置说明(grid-row.less)
如果页面主体宽度为1060，配置如下：

```
1060 = 11 * 70 + 11 * 20; // 具体算法请看variables.less里的说明
```

再观察整体的布局情况，比如实践项目里的主体部分就是一个左右两栏的布局,
左边是790的宽度,算法如下

```
n * (70+20) = 790 + 20;
```

``n = 9``,所以是span9

右边是250的宽度,算法如下

```
n * (70+20) = 250 + 20;
```

``n = 3``,所以是span3

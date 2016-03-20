# CSS规范

### 命名规则
##### 使用类选择器，放弃ID选择器
ID在一个页面中的唯一性导致了如果以ID为选择器来写CSS，就无法重用。

##### 后代选择器命名
不允许单个字母的类选择器出现，比如``.item {}``,原因如下。
通过使用后代选择器的方法，你不需要考虑他的命名是否已被使用，因为他只在当前模块中生效，同样的样式名可以在不同的模块或元件中重复使用，互不干扰；在多人协作或者分模块协作的时候效果尤为明显！。
后代选择器不需要完整表现结构树层级，尽量能短则短。

注：后代选择器不要在页面布局中使用，因为污染的可能性较大；

```
/* 这里的.itm和.cnt只在.m-list中有效 */
.m-list{margin:0;padding:0;}
.m-list .itm{margin:1px;padding:1px;}
.m-list .cnt{margin-left:100px;}
/* 这里的.cnt和.num只在.m-page中有效 */
.m-page{height:20px;}
.m-page .cnt{text-align:center;}
.m-page .num{border:1px solid #ddd;}
```

##### 命名应简约而不失语义

```
/* 反对：表现化的或没有语义的命名 */
.m-abc .green2{}
.g-left2{}
/* 推荐：使用有语义的简短的命名 */
.m-list .wrap2{}
.g-side2{}
```

##### 相同语义的不同类命名
方法：直接加数字或字母区分即可（如：.m-list、.m-list2、.m-list3等，都是列表模块，但是是完全不一样的模块）。

### 代码格式
##### 省略url引用中的引号，其他需要引号的地方使用单引号。

```
.m-box{background:url(bg.png);}
.m-box:after{content:'.';}
```

##### 属性编写顺序

- 显示属性：display/list-style/position/float/clear …
- 自身属性（盒模型）：width/height/margin/padding/border
- 背景：background
- 行高：line-height
- 文本属性：color/font/text-decoration/text-align/text-indent/vertical-align/white-space/content…
- 其他：cursor/z-index/zoom/overflow
- CSS3属性：transform/transition/animation/box-shadow/border-radius
- 如果使用CSS3的属性，如果有必要加入浏览器前缀，则按照 -webkit- / -moz- / -ms- / -o- / std的顺序进行添加，标准属性写在最后。
- 链接的样式请严格按照如下顺序添加： a:link -> a:visited -> a:hover -> a:active

##### 选择器等级
- a = 行内样式style。
- b = ID选择器的数量。
- c = 类、伪类和属性选择器的数量。
- d = 类型选择器和伪元素选择器的数量。

<table> 
<tr><th>选择器</th><th>等级(a,b,c,d)</th></tr> 
<tr><td>style="" </td><td>1,0,0,0</td></tr> 
<tr><td>#wrapper #content {}</td><td>0,2,0,0</td></tr> 
<tr><td>#content .dateposted {}</td><td>0,1,1,0</td></tr> 
<tr><td>div#content {}</td><td>0,1,0,1</td></tr> 
<tr><td>#content p {}</td><td>0,1,0,1</td></tr> 
<tr><td>#content {}</td><td>0,1,0,0</td></tr> 
<tr><td>p.comment .dateposted {}</td><td>0,0,2,1</td></tr> 
<tr><td>div.comment p {}</td><td>0,0,1,2</td></tr> 
<tr><td>.comment p {}</td><td>0,0,1,1</td></tr> 
<tr><td>p.comment {}</td><td>0,0,1,1</td></tr> 
<tr><td>.comment {}</td><td>0,0,1,0</td></tr> 
<tr><td>div p {}</td><td>0,0,0,2</td></tr> 
<tr><td>p {}</td><td>0,0,0,1</td></tr> 
</table>

### 优化方案
##### 值缩写
缩写值可以减少CSS文件大小，并增加可读性和可维护性。
但并非所有的值都必须缩写，因为当一个属性的值缩写时，总是会将所有项都设置一遍，而有时候我们不希望设置值里的某些项。

```
/* 比如我们用下面这个样式来让某个定宽的容器水平居中，我们要的只是left和right，
 * 而top和bottom不是这个样式要关心的（如果设置了反倒会影响其他样式在这个容器上的使用），
 * 所以这时我们就不需要缩写
 */
.f-mgha{margin-left:auto;margin-right:auto;}
/* 比如下面这个模块的样式设置，我们确实需要设置padding的所有项，于是我们就可以采用缩写 */
.m-link{padding:6px 12px;}
```


##### 使用16进制表示颜色值
比如颜色值#ffffff，尽量缩写。

```
.m-box{color:#fff;}
```

##### 省略值为0时的单位
为节省不必要的字节同时也使阅读方便，我们将0px、0em、0%等值缩写为0。

### 统一语义理解和命名
<table> 
<tr><th>语义</th><th>命名</th><th>简写</th></tr> 
<tr><td>文档</td><td>doc</td><td>doc</td></tr> 
<tr><td>头部</td><td>head</td><td>hd</td></tr> 
<tr><td>主体</td><td>body</td><td>bd</td></tr> 
<tr><td>尾部</td><td>foot</td><td>ft</td></tr> 
<tr><td>主栏</td><td>main</td><td>mn</td></tr> 
<tr><td>主栏子容器</td><td>mainc</td><td>mnc</td></tr> 
<tr><td>侧栏</td><td>side</td><td>sd</td></tr> 
<tr><td>侧栏子容器</td><td>sidec</td><td>sdc</td></tr> 
<tr><td>盒容器</td><td>wrap/box</td><td>wrap/box</td></tr> 
</table>
<table> 
<tr><th>语义</th><th>命名</th><th>简写</th></tr> 
<tr><td>导航</td><td>nav</td><td>nav</td></tr> 
<tr><td>子导航</td><td>subnav</td><td>snav</td></tr> 
<tr><td>面包屑</td><td>crumb</td><td>crm</td></tr> 
<tr><td>菜单</td><td>menu</td><td>menu</td></tr> 
<tr><td>选项卡</td><td>tab</td><td>tab</td></tr> 
<tr><td>标题区</td><td>head/title</td><td>hd/tt</td></tr> 
<tr><td>内容区</td><td>body/content</td><td>bd/ct</td></tr> 
<tr><td>列表</td><td>list</td><td>lst</td></tr> 
<tr><td>表格</td><td>table</td><td>tb</td></tr> 
<tr><td>表单</td><td>form</td><td>fm</td></tr> 
<tr><td>热点</td><td>hot</td><td>hot</td></tr> 
<tr><td>排行</td><td>top</td><td>top</td></tr> 
<tr><td>登录</td><td>login</td><td>log</td></tr> 
<tr><td>标志</td><td>logo</td><td>logo</td></tr> 
<tr><td>广告</td><td>advertise</td><td>ad</td></tr> 
<tr><td>搜索</td><td>search</td><td>sch</td></tr> 
<tr><td>幻灯</td><td>slide</td><td>sld</td></tr> 
<tr><td>提示</td><td>tips</td><td>tips</td></tr> 
<tr><td>帮助</td><td>help</td><td>help</td></tr> 
<tr><td>新闻</td><td>news</td><td>news</td></tr> 
<tr><td>下载</td><td>download</td><td>dld</td></tr> 
<tr><td>注册</td><td>regist</td><td>reg</td></tr> 
<tr><td>投票</td><td>vote</td><td>vote</td></tr> 
<tr><td>版权</td><td>copyright</td><td>cprt</td></tr> 
<tr><td>结果</td><td>result</td><td>rst</td></tr> 
<tr><td>标题</td><td>title</td><td>tt</td></tr> 
<tr><td>按钮</td><td>button</td><td>btn</td></tr> 
<tr><td>输入</td><td>input</td><td>ipt</td></tr> 
</table>

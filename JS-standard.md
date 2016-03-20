# Javascript编码规范
### 变量命名
变量名包括全局变量，局部变量，类变量，函数参数等等，他们都属于这一类。
变量命名都以类型前缀+有意义的单词组成，用驼峰式命名法增加变量和函式的可读性。例如：``sUserName，nCount``

### 前缀规范
    每个局部变量都需要有一个类型前缀，按照类型可以分为：
    s：表示字符串。例如：sName，sHtml；
    n：表示数字。例如：nPage，nTotal；
    b：表示逻辑。例如：bChecked，bHasLogin；
    a：表示数组。例如：aList，aGroup；
    r：表示正则表达式。例如：rDomain，rEmail；
    f：表示函数。例如：fGetHtml，fInit；
    o：表示以上未涉及到的其他对象，例如：oButton，oDate；
    g：表示全局变量，例如：gUserName，gLoginTime；
    当然，也可以根据团队及项目需要增加前缀规范，例如我们团队会用到：

    $：表示Jquery对象。例如：$Content，$Module；

    一种比较广泛的Jquery对象变量命名规范。

    j：表示Jquery对象。例如：jContent， jModule；

    另一种Jquery对象变量命名方式。

    fn：表示函数。例如：fnGetName，fnSetAge；

    和上面函数的前缀略有不同，改用fn来代替，个人认为fn能够更好的区分普通变量和函数变量。

    dom：表示Dom对象，例如：domForm，domInput；

    项目中很多地方会用到原生的Dom方法及属性，可以根据团队需要适当修改。

    这里可以根据项目及团队需要，设计出针对项目需要的前缀规范，从而达到团队开发协作便利的目的。

##### 例外情况

- 作用域不大临时变量可以简写，比如：str，num，bol，obj，fun，arr。
- 循环变量可以简写，比如：i，j，k等。
- 某些作为不允许修改值的变量认为是常量，全部字母都大写。例如：COPYRIGHT，PI。常量可以存在于函数中，也可以存在于全局。

为什么需要这样强制定义变量前缀？正式因为javascript是弱语言造成的。在定义大量变量的时候，我们需要很明确的知道当前变量是什么属性，如果只通过普通单词，是很难区分的。

### 函数命名
    统一使用动词或者动词+名词形式，例如：getVersion(),submitForm();涉及返回逻辑值的函数可以使用is，has，contains等表示逻辑的词语代替动词，例如：isObject()，hasClass()，containsElment()。
    如果有内部函数，使用_+动词+名词形式，内部函数必需在函数最后定义。例如：
    function getNumber(nTotal) {
        if (nTotal < 100) {
            nTotal = 100;
        }
        return _add(nTotal);
     
        function _add(nNumber) {
            nNumber++;
            return nNumber;
        }
    }
    alert(getNumber(10)); //alert 101

### 一些函数方法常用的动词  
    get 获取/set 设置,              add 增加/remove 删除
    create 创建/destory 移除        start 启动/stop 停止
    open 打开/close 关闭,           read 读取/write 写入
    load 载入/save 保存,            create 创建/destroy 销毁
    begin 开始/end 结束,            backup 备份/restore 恢复
    import 导入/export 导出,        split 分割/merge 合并
    inject 注入/extract 提取,       attach 附着/detach 脱离
    bind 绑定/separate 分离,        view 查看/browse 浏览
    edit 编辑/modify 修改,          select 选取/mark 标记
    copy 复制/paste 粘贴,           undo 撤销/redo 重做
    insert 插入/delete 移除,        add 加入/append 添加
    clean 清理/clear 清除,          index 索引/sort 排序
    find 查找/search 搜索,          increase 增加/decrease 减少
    play 播放/pause 暂停,           launch 启动/run 运行
    compile 编译/execute 执行,      debug 调试/trace 跟踪
    observe 观察/listen 监听,       build 构建/publish 发布
    input 输入/output 输出,         encode 编码/decode 解码
    encrypt 加密/decrypt 解密,      compress 压缩/decompress 解压缩
    pack 打包/unpack 解包,          parse 解析/emit 生成
    connect 连接/disconnect 断开,   send 发送/receive 接收
    download 下载/upload 上传,      refresh 刷新/synchronize 同步
    update 更新/revert 复原,        lock 锁定/unlock 解锁
    check out 签出/check in 签入,   submit 提交/commit 交付
    push 推/pull 拉,               expand 展开/collapse 折叠
    begin 起始/end 结束,            start 开始/finish 完成
    enter 进入/exit 退出,           abort 放弃/quit 离开
    obsolete 废弃/depreciate 废旧,  collect 收集/aggregate 聚集

### 相关文章
[JavaScript 风格指南/编码规范](http://blog.jobbole.com/79484/)
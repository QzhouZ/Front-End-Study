/**
 * 首页模块
 * author: Qzhou zqz@zlzkj.com
 * date: 2014-11-04 - 2014-11-05
 */
define(function (require, exports, module) {
    var test = function() {
        alert("首页模块加载成功!!")
    };
/*
====================================================================
                ####暴露接口####
====================================================================
*/
    module.exports = {
        test: test
    }
});
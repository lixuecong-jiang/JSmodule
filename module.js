/**
 * Created by 钟爱 on 2017/11/17.
 */
//原始写法
function m1(){
    console.log("原始m1");
}
function m2(){
    console.log("原始m2");
}

//对象写法
var module1 =  new Object({
    _count : 0,
    m1 : function (){
        console.log("对象m1");
    },
    m2 : function (){
        console.log("对象m2");
    }
});
module1.m1();
module1.m2();
module1._count = 5;

//立即执行函数
var module2 = (function(){
    var _count = 0;
    var m1 = function(){
        console.log("IIFE m1");
    };
    var m2 = function(){
        console.log("IIFE m2");
    };
    return {
        m1 : m1,
        m2 : m2
    };
})();
console.log(module2._count);//undefined

//放大模式
var module3 =  (function (mod) {
    mod.m3 = function(){
        console.log("为了module2模块添加一个新方法m3");
    };
    return mod;
})(module2);

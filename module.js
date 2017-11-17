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
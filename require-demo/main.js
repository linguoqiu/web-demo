requirejs.config({
    baseUrl: 'js',
    paths: {
        test1: 'test1', // amd模块
        test2: 'test2'  // 非amd模块
    },
    shim: {
        'test2':{
            // 加载的模块赋值给这个变量，必须和模块中的全局变量名一致
　　　　　　  exports: 'myCustomMod'
　　　　　　}
    }
});

require(['test1'],function(){
    console.log('is require')
})
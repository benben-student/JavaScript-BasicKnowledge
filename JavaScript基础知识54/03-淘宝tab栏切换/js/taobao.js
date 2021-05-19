// 第一步：建立一个js的文件夹，把jquery包和taobao.js都进来
$(function(){
    $(".notice-hd li").hover(function(){
        //核心思想：经过谁谁就添加类，他的取余的兄弟移除类
        $(this).addClass("current").siblings().removeClass("current");
        // 老师教你来测试---获取当前的索引值 $(this).index()
        // alert($(this).index()); 测试代码
        $(".notice-bd ul").eq($(this).index()).show().siblings().hide();

    })
})
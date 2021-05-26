$(function(){
    // 我们需要一个全局的变量,来控制图片的播放张数
    var $key = 0;
    // 先做右侧
    $(".right").click(function(){
        // 右侧直接调用定时器
        autoplay();
    });

    // 左侧跟右侧一样，只需要把++ 改成 --
    $(".left").click(function(){
        // 先第一张淡出，然后再加加
        $(".box ul li").eq($key).fadeOut(600);//第一张图 淡出
        $key--;
        // 我们判断
        // if($key > 4){
        //     $key = 0;//此时是第一张
        // }
        // 上大招----可以加薪
        $key = $key % $(".box ul li").length;
        // console.log($key); // 学会老师教你的测试
        // 开始第二张图淡入
        $(".box ul li").eq($key).fadeIn(600);
        // 下面数字跟着跑、切换
        $(".box ol li").eq($key).addClass('current').siblings().removeClass('current');
    });

    // 定时器开始，定时器实际上就是点击右侧按钮
    var timer = setInterval(autoplay,2000);
    function autoplay(){
        // 先第一张淡出，然后再加加
        $(".box ul li").eq($key).fadeOut(600);//第一张图 淡出
        $key++;
        // 我们判断
        // if($key > 4){
        //     $key = 0;//此时是第一张
        // }
        // 上大招----可以加薪
        $key = $key % $(".box ul li").length;
        console.log($key); // 学会老师教你的测试
        // 开始第二张图淡入
        $(".box ul li").eq($key).fadeIn(600);
        // 下面数字跟着跑、切换
        $(".box ol li").eq($key).addClass('current').siblings().removeClass('current');
    }

    // 鼠标经过大盒子关闭定时器效果
    $(".box").hover(function(){
        $(".left,.right").show();
        clearInterval(timer);
        timer = null;//节省内存
    },function(){
        $(".left,.right").hide();
        // 一般开启定时器之前，先清除定时器
        clearInterval(timer);
        timer = setInterval(autoplay,2000);
    });
    // 下面做点击效果
    $(".box ol li").click(function(){
        $(".box ul li").eq($key).fadeOut(600);//第一张图 淡出
        // 获取当前的索引值
        $key = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".box ul li").eq($key).fadeIn(600);
    })
})
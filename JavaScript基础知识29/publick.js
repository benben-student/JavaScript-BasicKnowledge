function my$(id) {
    return document.getElementById(id);
}

 // 封装好的animate
 function animate(element,target){//element---元素，target--目标
    // console.log(my$("dv").offsetLeft);
    // 先清理定时器，--设表先关的由来（先清理定时器，点击的时候是先清理定时器，然后在设置）
    clearInterval(element.timeId);//设表先关
    // 设置定时器
    // 为了保证只有一个定时器，节省内存不用每次开辟一个空间
    element.timeId = setInterval(function(){
        // 获取div的当前位置
    var current = element.offsetLeft;
    // div每次移动多少像素--多少步假设10步
    var step = 10;//假设每次走10步
    // 判断走正数还是负数
    step = current < target ? step : -step;
    // 每次移动后的距离
    current += step;//current = current + 10
    // 判断当前的移动后的位置是否达到目标位置
    if(Math.abs(target - current) > Math.abs(step)){//如果目标减去我们的当前>步数就走
        element.style.left = current + "px";
    }else{
        // 清除定时器
        clearInterval(element.timeId);
        element.style.left = target + "px";//当步数小于我们的step的时候直接到目标 
    }
    },5);
}
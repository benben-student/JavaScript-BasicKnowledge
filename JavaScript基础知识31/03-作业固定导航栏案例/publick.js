function my$(id) {
    return document.getElementById(id);
}

function getScroll(){
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,//写了这么多就是一句封装好了，给任何人用也不会有兼容问题了
         top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0//写了这么多就是一句封装好了，给任何人用也不会有兼容问题了
    };
}
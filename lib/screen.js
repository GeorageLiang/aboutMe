!function(){
    var a,b=document.documentElement;
    (a=function(){b.style.fontSize=(b.clientWidth>640?640:b.clientWidth)/320*625+"%"})();
    window.addEventListener("resize",a,false)
    setTimeout(function() {
        window.scrollTo(0, 1)
    }, 0);
}();
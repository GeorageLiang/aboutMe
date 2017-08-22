var $ = require('../lib/jquery-1.10.1.min');
require('../lib/swiper-3.4.2.min');
var swiperAnimateCache = require('../lib/swiper.animate1.0.2.min').swiperAnimateCache;
var swiperAnimate = require('../lib/swiper.animate1.0.2.min').swiperAnimate;

require('../lib/raphael');
require('../lib/particle');
var painting  = require('../lib/paint');
var util = require('../lib/util');



//window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", () => {
//    if (window.orientation === 180 || window.orientation === 0) {
//        $('body,html').animate({ scrollTop: 665 }, 5500);
//    }
//    if (window.orientation === 90 || window.orientation === -90 ){
//        alert('竖屏体验最佳');
//    }
//}, false);
//
//var ua = navigator.userAgent.toLowerCase();
//if (/iphone|ipad|ipod/.test(ua)) {
//
//} else if (/android/.test(ua)) {
//
//}
//

// replace www.test.com with your domain
if (!util.IsPc()) {
    $(window).load(()=>{

        var mySwiper = new Swiper ('.swiper-container', {
            // 如果需要分页器
            direction:'vertical',
            speed:800,
            onInit: function(swiper){
                $('.loading').hide();
                $('#s1 .lineUp').addClass('lineUp-on');
                $('#s1 .lineDown').addClass('lineDown-on');
                particlesJS.load('s4', 'assets/particle.json', function() {});
                particlesJS.load('s5', 'assets/particle.json', function() {});
                particlesJS.load('s6', 'assets/particle.json', function() {});

                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function(swiper){
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                switch(mySwiper.realIndex){
                    case 0:
                        painting.clean();
                        $('#s1 .lineUp').addClass('lineUp-on');
                        $('#s1 .lineDown').addClass('lineDown-on');
                        $('#s2 .lineUp').removeClass('lineUp-on');
                        $('#s2 .lineDown').removeClass('lineDown-on');
                        $('.man').addClass('showUpIn');
                        break;
                    case 1:
                        $('.man').removeClass('showUpIn');
                        $('#s1 .lineUp').removeClass('lineUp-on');
                        $('#s1 .lineDown').removeClass('lineDown-on');
                        $('#s2 .lineUp').addClass('lineUp-on');
                        $('#s2 .lineDown').addClass('lineDown-on');
                        painting.clean();
                        break;
                    case 2:
                        painting.clean();
                        $('#s2 .lineUp').removeClass('lineUp-on');
                        $('#s2 .lineDown').removeClass('lineDown-on');
                        break;
                    case 3:
                        painting.clean();
                        painting.paintMap(function(){
                        });
                        break;
                    case 4:
                        painting.clean();
                        break;
                    case 5:
                        painting.clean();
                        break;
                }
            },
        });
    });

} else {
    location.href = 'http://me.geoliang.top/web/';
}

//
//$('.add').on('click',() =>{
//    $('.pop1').removeClass('hide');
//})
//$('.pop__close').on('click',()=>{
//   $('.pop').addClass('hide');
//})
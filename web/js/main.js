define(function(require, exports, module){
    require('jquery');
    require('skroll');
    require('particle');


    $("document").ready(function(){
        var s = skrollr.init({
            forceHeight:false
        });
        particlesJS.load('bg1', 'asset/particle.json', function() {});
        particlesJS.load('bg2', 'asset/particle2.json', function() {});
        var paint = require('js/paint');
        paint.paintMap(function(){});

    });
});


define(function(require, exports, module){
    require('jquery');

    $("document").ready(function(){
        require('skroll');
        require('particle');
        var s = skrollr.init({
            forceHeight:false
        });
        particlesJS.load('bg1', 'asset/particle.json', function() {});
        particlesJS.load('bg2', 'asset/particle2.json', function() {});
        var paint = require('js/paint');
        paint.paintMap(function(){});

    });
});


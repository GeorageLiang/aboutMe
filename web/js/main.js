define(function(require, exports, module){
    require('jquery');
    require('skroll');
    require('particle');
    var paint = require('js/paint');

    $("document").ready(function(){
        var s = skrollr.init({
            forceHeight:false
        });
        particlesJS.load('bg1', 'asset/particle.json', function() {});
        particlesJS.load('bg2', 'asset/particle2.json', function() {});

        paint.paintMap(function(){});

    });
});


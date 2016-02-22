/**
 * Created by Geo on 16/2/16.
 */



var $ = require("jquery");
require("fullpage.js");
var painting = require('./d3.js');

$(document).ready(function() {
    setTimeout(function(){
        $("#fullpage").css("opacity",1);
        $(".loading").hide();
            $('#fullpage').fullpage({
                afterLoad: function (anchorLink, index) {
                    var loadedSection = $(this);
                    //using index
                    if (index == 1) {
                        $(".bg").fadeIn(200);
                        $(".bg").addClass("animated fadeInUp");
                        $(".title1").removeClass("hide").addClass("animated fadeInUp");
                        $(".sub-title1").removeClass("hide").addClass("animated fadeInUp");
                        painting.painting(d3.select("#section1"));
                    }
                    if (index == 2) {
                        painting.painting(d3.select("#section2"));
                    }

                    if (index == 3) {
                        painting.painting(d3.select("#section3"));
                    }

                    if (index == 4) {
                        painting.painting(d3.select("#section4"));
                    }

                },
                onLeave: function(index,nextIndex,direction){
                    switch(index){
                        case 1:
                            $(".bg").removeClass("animated fadeInUp");
                            $(".title1").removeClass("animated fadeInUp");
                            $(".sub-title1").removeClass("animated fadeInUp");
                            $(".bg").fadeOut(200);
                            $(".title1").addClass("hide");
                            $(".sub-title1").addClass("hide");
                            painting.clean();
                            break;
                        case 2:
                            painting.clean();
                            break;
                        case 3:
                            painting.clean();
                            break;
                        case 4:
                            painting.clean();
                            break;
                    }
                }
            });

    },3000)

});
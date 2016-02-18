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
                        $(".bg").removeClass("hide");
                        $(".bg").addClass("animated fadeInUp");
                        $(".title1").removeClass("hide").addClass("animated fadeInUp");
                        $(".sub-title1").removeClass("hide").addClass("animated fadeInUp");
                        painting.clean();
                        painting.painting(d3.select("#section1"));
                    }
                    if (index == 2) {

                        $(".bg").removeClass("animated fadeInUp");
                        $(".title1").removeClass("animated fadeInUp");
                        $(".sub-title1").removeClass("animated fadeInUp");
                        $(".bg").addClass("hide");
                        $(".title1").addClass("hide");
                        $(".sub-title1").addClass("hide");
                        painting.clean();
                        painting.painting(d3.select("#section2"));
                    }

                    if (index == 3) {

                        painting.clean();
                        painting.painting(d3.select("#section3"));
                    }

                    if (index == 4) {

                        painting.clean();
                        painting.painting(d3.select("#section4"));
                    }

                }
            });


    },3000)

});
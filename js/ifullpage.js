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
                        painting.paintingline1("section1");
                        painting.paintingTr("section1");


                    }
                    if (index == 2) {
                        painting.paintingline2("section2");
                        $("#backimg2").fadeIn(800,function(){
                            $(".intro-title").animate({"opacity":1},1000,"linear",function(){
                                $(".intro-body").addClass("animated fadeInUp");
                            })

                        })

                    }

                    if (index == 3) {
                        //painting.paintingline1("section3");
                        //$(".flex-item").addClass("animated fadeInUp");

                        //painting.paintingTr(d3.select("#section3"));
                        //painting.paintingline3("section3");
                        $(".flex-item").eq(0).animate({"opacity":1,"top":"-2em"},500,"linear",function(){
                            $(".flex-item").eq(1).animate({"opacity":1,"top":"-2em"},500,"linear",function(){
                                $(".flex-item").eq(2).animate({"opacity":1,"top":"-2em"},500,"linear",function(){
                                    $(".flex-item").eq(3).animate({"opacity":1,"top":"-2em"},500,"linear",function(){

                                    }).delay(300);
                                }).delay(300);
                            }).delay(300);
                        })
                    }

                    if (index == 4) {
                        //painting.paintingline1("section4");
                        //painting.paintingTr("section4");
                        painting.paintMap();
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
                            $(".intro-body").removeClass("animated fadeInUp");
                            $("#backimg2").fadeOut(200);
                            $(".intro-title").css("opacity",0);
                            painting.clean();
                            break;
                        case 3:
                            $(".flex-item").css({"opacity":0,"top":0});
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
/**
 * Created by Geo on 16/2/16.
 */
var $ = require('../lib/jquery-1.10.1.min');
var paperSet = [];


var paintingTr = function(obj){
    var width = "1.5rem";  //画布的宽度
    var height = "4.5rem";   //画布的高度
    var svg3 =  document.createElement("div");
    svg3.style.position = "absolute";
    svg3.style.top = 0;
    svg3.style.left = 0;

    document.getElementById(obj).appendChild(svg3);
    var svg = Raphael(svg3, width, height);
    svg.setViewBox(0,0,300,900,true);
    var tr1 = svg.path(" M 60 205 L 130 165 L 140 275 L 60 205").attr({"stroke":"#3981cb","stroke-width":"2","fill":"#3981cb","opacity":0});
    var tr2 = svg.path(" M 90 365 L 100 315 L 130 335 L 90 365").attr({"stroke":"#3981cb","stroke-width":"2","fill":"#3981cb","opacity":0});
    var tr3 = svg.path(" M 70 475 L 130 555 L 200 440").attr({"stroke":"#3981cb","stroke-width":"2","fill":"#3981cb","opacity":0});
    var tr4 = svg.path(" M 40 625 L 60 655 L 70 625").attr({"stroke":"#3981cb","stroke-width":"2","fill":"#3981cb","opacity":0});

    var animation1 = Raphael.animation({"opacity":1},1000,"<").delay(500);
    var animation2 = Raphael.animation({"opacity":0.7},1000,"<").delay(900);
    var animation3 = Raphael.animation({"opacity":1},1000,"<").delay(1300);
    var animation4 = Raphael.animation({"opacity":0.8},1000,"<").delay(1800);
    tr1.animate(animation1);
    tr2.animate(animation2);
    tr3.animate(animation3);
    tr4.animate(animation4);
    paperSet.push(svg);
}


var clean = function(){
    for(var i in paperSet){
        paperSet[i].remove();
    }
}
var paintMap = function(final){
    var r1 = Raphael("techs", "1.5rem", "1.5rem");
    var r = Raphael("holder", "2.7rem", "2.7rem"),
        R = 250, param = {stroke: "red", "stroke-width": 30};
    r.setViewBox(0,0,600,600,true);
    r1.setViewBox(0,0,600,400,true);


    var tech1 = [{
        name:"Es5 / Jquery",
        num:80
    },{
        name:"Css3 / LESS / Sass / Compass",
        num:70
    },{
        name:"Html5 / Jade",
        num:60
    },{
        name:"Bootstrap",
        num:60
    },{
        name:"Coffeescript / ES6",
        num:40
    }];

    var tech2 = [{
        name:"Backbone",
        num:70
    },{
        name:"Angular",
        num:65
    },{
        name:"NodeJs / Express",
        num:40
    },{
        name:"Jekyll",
        num:38
    },{
        name:"RaphaelJs",
        num:55
    }
    ];

    var tech3 = [{
        name:"Gulp / Bower / Npm script",
        num:65
    },{
        name:"WebPack",
        num:40
    },{
        name:"Mock / underscore",
        num:60
    },{
        name:"RequireJs",
        num:30
    },{
        name:"seaJs",
        num:20
    },{
        name:"MarkDown",
        num:70
    }];

    var tech4 = [{
        name:"Webstorm",
        num:65
    },{
        name:"sublime",
        num:30
    },{
        name:"SmartGit",
        num:45
    },{
        name:"chrome",
        num:60
    },{
        name:"Github",
        num:69
    }];

    r.customAttributes.arc = function (value, total, R,center,color) {
        var alpha = 360 / total * value,
            a = (90 - alpha) * Math.PI / 180,
            x = 300 + R * Math.cos(a),
            y = 300 - R * Math.sin(a),
            path;
        if (total == value) {
            path = [["M", 300, 300 - R], ["A", R, R, 0, 1, 1, 299.99, 300 - R]];
        } else {
            path = [["M", 300, 300 - R], ["A", R, R, 0, +(alpha>180), 1, x, y]];
        }
        if (center == true){
            return {path: path, stroke: "hsb(0.58,0.72,0.48)", fill: "hsb(0.58,0.72,0.48)"};
        }
        return {path: path, stroke: color};
    };



    var eventTrigger = function(obj,view,datas,color){
        cleanAnmit();
        obj.animate({"stroke-width":"80","opacity":"0.75"},500,"elastic");
        drawTechs(view,datas,color);
    }

    var sec1 = r.path().attr(param).attr({arc: [30, 100, R-105,false,"hsb(0.21,1,0.81)"]}).click(function(){
        eventTrigger(this,r1,tech4,"#97d000");
        centerTxt.attr({"text":"Tools \n 30%"});
    });
    var sec2 = r.path().attr(param).attr({arc: [45, 100, R-70,false,"hsb(0.82,0.28,1)"]}).click(function(){
        eventTrigger(this,r1,tech3,"#fab5ff");
        centerTxt.attr({"text":"Common \n 45%"});
    });
    var sec3 = r.path().attr(param).attr({arc: [65, 100, R-35,false,"hsb(0.63,0.65,0.84)"]}).click(function(){
        eventTrigger(this,r1,tech2,"#4866d9");
        centerTxt.attr({"text":"Advanced \n 65%"});
    });
    var sec4 = r.path().attr(param).attr({arc: [85, 100, R,false,"hsb(0.54,0.86,0.8)"]}).click(function(){
        eventTrigger(this,r1,tech1,"#4fa4d9");
        centerTxt.attr({"text":"FE-Basic \n 85%"});
    });
    var sec5 = r.path().attr(param).attr({arc: [100, 100, R-140,true]}).click(function(){
        cleanAnmit();
        r1.clear();
        centerTxt.attr({"text":"Skills"});
    });
    var centerTxt = r.text("300","300","Skills").attr({"font-size":"40px","fill":"white","stroke":"white" ,"text-anchor":"center"});

    centerTxt.click(function(){
        centerTxt.attr({"text":"Skills"});
        cleanAnmit();
        r1.clear();
    });


    $(".btn").eq(3).unbind().on("click",function(){
        eventTrigger(sec1,r1,tech4,"#97d000");
        centerTxt.attr({"text":"Tools \n 30%"});
    });
    $(".btn").eq(2).unbind().on("click",function(){
        eventTrigger(sec2,r1,tech3,"#fab5ff");
        centerTxt.attr({"text":"Common \n 45%"});
    });
    $(".btn").eq(1).unbind().on("click",function(){
        eventTrigger(sec3,r1,tech2,"#4866d9");
        centerTxt.attr({"text":"Advanced \n 65%"});
    });
    $(".btn").eq(0).unbind().on("click",function(){
        eventTrigger(sec4,r1,tech1,"#4fa4d9");
        centerTxt.attr({"text":"FE-Basic \n 85%"});
    });

    var cleanAnmit = function(){
        sec1.animate({"stroke-width":"30","stroke-opacity":"1"},500,"bounce");
        sec2.animate({"stroke-width":"30","stroke-opacity":"1"},500,"bounce");
        sec3.animate({"stroke-width":"30","stroke-opacity":"1"},500,"bounce");
        sec4.animate({"stroke-width":"30","stroke-opacity":"1"},500,"bounce");
    };
    /*--techs---*/

    var drawTechs = function(r1,data,color){
        r1.clear();
        var l = data.length;

        for(var i in data){
            var lastNum = (data[i].num)/100*600+80;
            var add = 60+60*i
            console.log(lastNum);
            r1.path("M80,"+add).attr({"stroke-width":"40","stroke-opacity":"0.8","stroke":color}).animate({"path":"M80,"+add+"L"+lastNum+","+add},Math.random()*2500,"bounce");
            r1.text("100",add,data[i].name).attr({"font-size":"25px","fill":"white","stroke":"white" ,"text-anchor":"start"});
        }
    }
    paperSet.push(r);
    paperSet.push(r1);
    final();
}



module.exports = {

    "clean":clean,
    "paintingTr":paintingTr,
    "paintMap":paintMap

}




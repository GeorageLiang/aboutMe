/**
 * Created by Geo on 16/2/16.
 */
var paperSet = [];

var paintingline1 = function(obj){
    //d3.select(".section").selectAll("h3").text("www11com");
    var width = 300;  //画布的宽度
    var height = 300;   //画布的高度
    paintinglineUp(obj,width,height,{top:"8%",right:0},"steelblue");
    paintinglineDown(obj,width,height,{bottom:"20%",left:0},"steelblue");
}

var paintingline2 = function(obj){
    //d3.select(".section").selectAll("h3").text("www11com");
    var width = 300;  //画布的宽度
    var height = 300;   //画布的高度
    var datasety = [300 , 250]; //y11,y21
    paintinglineUp(obj,width,height,{top:"8%",right:0},"#f8ccfc");
    paintinglineDown(obj,width,height,{bottom:"50%",left:0},"#f8ccfc");
}

var paintinglineUp = function(obj,width,height,stylle,color){

    var svg1 = document.createElement("div");
    svg1.style.position = "absolute";
    svg1.style.top = stylle.top;
    svg1.style.right = stylle.right;

    document.getElementById(obj).appendChild(svg1);

    var svgA = Raphael(svg1, width, height);
    var cA1 = svgA.path("M300 0").attr({"stroke":color,"stroke-width":4});
    var cA2 = svgA.path("M300 50").attr({"stroke":color,"stroke-width":4});
    var animationA1 = Raphael.animation({"path":"M300 0 L0 300"},1500,"cubic-bezier(0.77, 0, 0.175, 1)").delay(500);
    var animationA2 = Raphael.animation({"path":"M300 50 L150 200"},1500,"cubic-bezier(0.77, 0, 0.175, 1)").delay(500);
    cA1.animate(animationA1);
    cA2.animate(animationA2);
    paperSet.push(svgA);

}

var paintinglineDown = function(obj,width,height,stylle,color){

    var svg2 =  document.createElement("div");
    svg2.style.position = "absolute";
    svg2.style.bottom = stylle.bottom;
    svg2.style.left = stylle.left;

    document.getElementById(obj).appendChild(svg2);

    var svgB = Raphael(svg2, width, height);
    var cB1 = svgB.path("M0 300").attr({"stroke":color,"stroke-width":4});
    var cB2 = svgB.path("M0 250").attr({"stroke":color,"stroke-width":4});
    var animationB1 = Raphael.animation({"path":"M0 300 L300 0"},1500,"cubic-bezier(0.77, 0, 0.175, 1)").delay(500);
    var animationB2 = Raphael.animation({"path":"M0 250 L150 100"},1500,"cubic-bezier(0.77, 0, 0.175, 1)").delay(500);
    cB1.animate(animationB1);
    cB2.animate(animationB2);
    paperSet.push(svgB);
}


var paintingTr = function(obj){
    var width = 300;  //画布的宽度
    var height = 900;   //画布的高度
    var svg3 =  document.createElement("div");
    svg3.style.position = "absolute";
    svg3.style.top = 0;
    svg3.style.left = 0;

    document.getElementById(obj).appendChild(svg3);
    var svg = Raphael(svg3, width, height);
    var tr1 = svg.path(" M 60 205 L 130 165 L 140 275 L 60 205").attr({"stroke":"#3981cb","stroke-width":"2","fill":"#3981cb","opacity":0});
    var tr2 = svg.path(" M 90 365 L 100 315 L 130 335 L 90 365").attr({"stroke":"#3981cb","stroke-width":"2","fill":"#3981cb","opacity":0});
    var tr3 = svg.path(" M 70 475 L 130 555 L 200 440").attr({"stroke":"#3981cb","stroke-width":"2","fill":"#3981cb","opacity":0});
    var tr4 = svg.path(" M 40 625 L 60 655 L 70 625").attr({"stroke":"#3981cb","stroke-width":"2","fill":"#3981cb","opacity":0});

    var animation1 = Raphael.animation({"opacity":1},1000,"<").delay(500);
    var animation2 = Raphael.animation({"opacity":0.7},1000,"<").delay(1000);
    var animation3 = Raphael.animation({"opacity":1},1000,"<").delay(1500);
    var animation4 = Raphael.animation({"opacity":0.8},1000,"<").delay(2000);
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
//var paintMap = function(){
//    var r = Raphael("holder", 850, 600),
//        R = 200, param = {stroke: "red", "stroke-width": 30};
//    r.customAttributes.arc = function (value, total, R) {
//        var alpha = 360 / total * value,
//            a = (90 - alpha) * Math.PI / 180,
//            x = 300 + R * Math.cos(a),
//            y = 300 - R * Math.sin(a),
//            color = "red",
//            path;
//        if (total == value) {
//            path = [["M", 300, 300 - R], ["A", R, R, 0, 1, 1, 299.99, 300 - R]];
//        } else {
//            path = [["M", 300, 300 - R], ["A", R, R, 0, 0, 1, x, y]];
//        }
//        return {path: path, stroke: color};
//    };
//
//    var sec = r.path().attr(param).attr({arc: [10, 60, R]});
//    var sec = r.path().attr(param).attr({arc: [20, 60, R-40]});
//
//
//}


module.exports = {
    "paintingline1":paintingline1,
    "paintingline2":paintingline2,
    "clean":clean,
    "paintingTr":paintingTr

}




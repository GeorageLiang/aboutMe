/**
 * Created by Geo on 16/2/16.
 */

var paintingline1 = function(obj){
    //d3.select(".section").selectAll("h3").text("www11com");
    var width = 300;  //画布的宽度
    var height = 300;   //画布的高度
    var datasety = [300 , 250]; //y11,y21
    paintinglineUp(obj,width,height,datasety,{"position":"absolute","top":"8%","right":0},"steelblue");
    paintinglineDown(obj,width,height,datasety,{"position":"absolute","bottom":"20%","left":0},"steelblue");
}

var paintingline2 = function(obj){
    //d3.select(".section").selectAll("h3").text("www11com");
    var width = 300;  //画布的宽度
    var height = 300;   //画布的高度
    var datasety = [300 , 250]; //y11,y21
    paintinglineUp(obj,width,height,datasety,{"position":"absolute","top":"8%","right":0},"#f8ccfc");
    paintinglineDown(obj,width,height,datasety,{"position":"absolute","bottom":"50%","left":0},"#f8ccfc");
}

var paintinglineDown = function(obj,width,height,datasety,stylle,color){

    var svg1 = obj     //选择文档中的body元素
        .append("svg")          //添加一个svg元素
        .attr("width", width)       //设定宽度
        .attr("height", height)
        .style(stylle);
    svg1.append("line");
    svg1.append("line");

    svg1.selectAll("line").data(datasety).attr("x1",0)
        .attr("y1",function(d,i){
            return d;
        }).attr("x2",0).attr("y2",function(d,i){
            return d;
        })

        .attr("stroke",color).attr("stroke-width","5").transition().duration(1500).delay(500).attr("x2",function(d,i){
            if(i == 0){
                return 300;
            }else {
                return 150;
            }
        })
        .attr("y2",function(d,i){
            if(i == 0){
                return 0;
            }else {
                return 100;
            }
        });
}

var paintinglineUp = function(obj,width,height,datasety,stylle,color){
    var svg2 = obj     //选择文档中的body元素
        .append("svg")          //添加一个svg元素
        .attr("width", width)       //设定宽度
        .attr("height", height)//设定高度
        .style(stylle);

    svg2.append("line");
    svg2.append("line");

    svg2.selectAll("line").data(datasety).attr("x1",300)
        .attr("y1",function(d,i){
            if(i == 0){
                return 0;
            }else {
                return 50;
            }
        })
        .attr("x2",300)
        .attr("y2",function(d,i){
            if(i == 0){
                return 0;
            }else {
                return 50;
            }
        })
        .attr("stroke",color).attr("stroke-width","5").transition().duration(1500).delay(500).attr("x2",function(d,i){
            if(i==0){
                return 0
            }else{
                return 150
            }
        })
        .attr("y2",function(d,i){
            if(i==0){
                return 300
            }else{
                return 200
            }
        });

}


var paintingTr = function(obj){
    var width = 300;  //画布的宽度
    var height = 300;   //画布的高度
    var svg3 = obj     //选择文档中的body元素
        .append("svg")          //添加一个svg元素
        .attr("width", width)       //设定宽度
        .attr("height", 900)
        .style({"position":"absolute","top":0,"left":0});

    svg3.append("path").attr("d"," M 60 205 L 130 165 L 140 275 L 60 205").attr("stroke","#3981cb").attr("stroke-width","2").attr("fill","#3981cb")
        .style("opacity",0).transition().duration(1000).delay(500).style("opacity",1);
    svg3.append("path").attr("d"," M 90 365 L 100 315 L 130 335 L 90 365").attr("stroke","#3981cb").attr("stroke-width","2").attr("fill","#3981cb")
        .style("opacity",0).transition().duration(1000).delay(1000).style("opacity",0.7);
    svg3.append("path").attr("d"," M 70 475 L 130 555 L 200 440").attr("stroke","#3981cb").attr("stroke-width","2").attr("fill","#3981cb")
        .style({"opacity":0,}).transition().duration(1000).delay(1500).style("opacity",1);
    svg3.append("path").attr("d"," M 40 625 L 60 655 L 70 625").attr("stroke","#3981cb").attr("stroke-width","2").attr("fill","#3981cb")
        .style("opacity",0).transition().duration(1000).delay(2000).style("opacity",0.8);
}


var clean = function(){
    d3.selectAll("svg").remove();
}

module.exports = {
    "paintingline1":paintingline1,
    "paintingline2":paintingline2,
    "clean":clean,
    "paintingTr":paintingTr
}



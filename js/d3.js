/**
 * Created by Geo on 16/2/16.
 */

var painting = function(){
    d3.select(".section").selectAll("h3").text("www11com");
    var width = 300;  //画布的宽度
    var height = 300;   //画布的高度

    var datasety = [300 , 250]; //y11,y21
    svg1 = d3.select(".section")     //选择文档中的body元素
        .append("svg")          //添加一个svg元素
        .attr("width", width)       //设定宽度
        .attr("height", height)
        .style({"position":"absolute","bottom":0,"left":0});
    svg1.append("line");
    svg1.append("line");

    svg1.selectAll("line").data(datasety).attr("x1",0)
        .attr("y1",function(d,i){
            return d;
        }).attr("x2",0).attr("y2",function(d,i){
            return d;
        })

        .attr("stroke","steelblue").attr("stroke-width","5").transition().duration(1500).delay(500).attr("x2",function(d,i){
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

    svg2 = d3.select(".section")     //选择文档中的body元素
        .append("svg")          //添加一个svg元素
        .attr("width", width)       //设定宽度
        .attr("height", height)//设定高度
        .style({"position":"absolute","top":0,"right":0});

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
        .attr("stroke","steelblue").attr("stroke-width","5").transition().duration(1500).delay(500).attr("x2",function(d,i){
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

    svg3 = d3.select(".section")     //选择文档中的body元素
        .append("svg")          //添加一个svg元素
        .attr("width", width)       //设定宽度
        .attr("height", 400)
        .style({"position":"absolute","top":0,"left":0});

    svg3.append("path").attr("d"," M 10 25 L 10 75 L 60 75 L 10 25").attr("stroke","blue").attr("stroke-width","2").attr("fill","blue")
        .style("opacity",0).transition().duration(1000).delay(500).style("opacity",1);
    svg3.append("path").attr("d"," M 60 125 L 70 75 L 110 105 L 60 125").attr("stroke","blue").attr("stroke-width","2").attr("fill","blue")
        .style("opacity",0).transition().duration(1000).delay(1000).style("opacity",1);
    svg3.append("path").attr("d"," M 60 205 L 90 165 L 150 155 L 60 205").attr("stroke","blue").attr("stroke-width","2").attr("fill","blue")
        .style("opacity",0).transition().duration(1000).delay(1500).style("opacity",1);


}

var clean = function(){
    svg1.remove();
    svg2.remove();
    svg3.remove();
}

module.exports = {
    "painting":painting,
    "clean":clean
}



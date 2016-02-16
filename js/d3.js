/**
 * Created by Geo on 16/2/16.
 */
d3.select(".section").selectAll("h3").text("www11com");
var width = 300;  //画布的宽度
var height = 300;   //画布的高度

var datasety = [230 , 180]; //y11,y21
var svg = d3.select(".section")     //选择文档中的body元素
    .append("svg")          //添加一个svg元素
    .attr("width", width)       //设定宽度
    .attr("height", height); //设定高度
    svg.append("line");
    svg.append("line");

svg.selectAll("line").data(datasety).attr("x1",0)
    .attr("y1",function(d,i){
        return d;
    })
    .attr("x2",0)
    .attr("y2",function(d,i){
        return d;
    })
    .attr("stroke","steelblue").attr("stroke-width","5").transition().duration(1500).delay(500).attr("x2",function(d,i){
        return d;
    })
    .attr("y2",function(d,i){
        return -0.5*d;
    });

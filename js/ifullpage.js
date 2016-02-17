/**
 * Created by Geo on 16/2/16.
 */

var painting = require('./d3.js');
    $('#fullpage').fullpage({
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            //using index
            if(index == 1){
                $(".bg").removeClass("hide");
                $(".bg").addClass("animated fadeInUp");
                painting.painting();
            }
            if(index == 2){

                $(".bg").removeClass("animated fadeInUp");
                $(".bg").addClass("hide");
                painting.clean();
            }

        }
    });

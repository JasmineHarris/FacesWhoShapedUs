"use strict";

$(document).ready(function() {
    $('.nav .dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });
});

$(document).ready(function(){ 
   
    const min = 183, max=230;
    let i=min;
    $(".jasmine").css("background-image",'url("/static/walking_right/ comp2_00' + i + '.png")');

    function changeDir(dir){
        //range of 183-230
        //how to get the function to iterate (%) through photos to go between 183 and 230
        //each keydown change the photo background-image to the next one
        //if i is greater than or equal to 183 and less than or equal to 230, then use code below    
        i += (Math.abs(dir)+3);

        if (i<183){
            i=230;
        }
        else if (i>230){
            i=183;
        }
        if(dir>0){
            $(".jasmine").css("background-image",'url("/static/walking_right/ comp2_00' + i + '.png")').css({'left': '+=20px',})
            //Here, we make Jasmine move to the right of the screen
        }
        else{
            $(".jasmine").css("background-image",'url("/static/walking_left/ comp1_00' + i + '.png")') .css({'left' : '-=20px',})
            //Here, we make Jasmine move to the left of the screen
        }
    }
    $(document).keydown (function(e) {
        // e.preventDefault();
        e = e || window.event;
        if (e.keyCode == '37') {
            changeDir(-1) //left <- show Prev image 
            // if ($(e.target).hasClass('image')){
            //     return;
            // }
            // $('.image').trigger('keydown',e);
           } 
        else if (e.keyCode == '39') {
            // right -> show next image
            changeDir(+1) 
        }
    });
});

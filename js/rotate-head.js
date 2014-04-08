/*
Filename: HeadImage.js
Project: rotating heads
Type: javascript
Author: Jan Dellsperger
Initial Version: 14. October 2013

This is the class for the head-image object. Per rotating head one headImage
object has to be instanciated.

Changelog:
23.10.2013 - 1px where everyones front picture was shown removed
*/
var className;
var imageTop;
var imageLeft;
var imageBottom;
var imageRight;
var mouseX;
var mouseY;

function HeadImage(className){
    
    /* Setting the global instance of classname to the given parameter*/
    this.className = className;
    var thisClass = '#' + className;
    
    /* Calculating the borders of the image */
    var imageLeft = $(thisClass).offset().left;
    var imageRight = imageLeft + $(thisClass).width();
    var imageTop = $(thisClass).offset().top;
    var imageBottom = imageTop + $(thisClass).height();
    
    /* This function determines where the mouse pointer is relative to the image
     * and displays the correct image accordingly. */

    this.setImageDirection = function(){
      $(document).mousemove(function( event ) { 
        var mouseX = event.pageX;
        var mouseY = event.pageY;
        
        if(mouseX >= imageLeft && mouseX <= imageRight && mouseY <= imageTop){
            $(thisClass).removeClass();
            $(thisClass).addClass('up');
        } else if(mouseX < imageLeft && mouseY < imageTop){
            $(thisClass).removeClass();
            $(thisClass).addClass('up-left');
        } else if(mouseX <= imageLeft && mouseY >= imageTop && mouseY <= imageBottom){
            $(thisClass).removeClass();
            $(thisClass).addClass('left');
        } else if(mouseX < imageLeft && mouseY > imageBottom){
            $(thisClass).removeClass();
            $(thisClass).addClass('down-left');
        } else if(mouseX >= imageLeft && mouseX <= imageRight && mouseY >= imageBottom){
            $(thisClass).removeClass();
            $(thisClass).addClass('down');
        } else if(mouseX > imageRight && mouseY > imageBottom){
            $(thisClass).removeClass();
            $(thisClass).addClass('down-right');
        } else if(mouseX >= imageRight && mouseY >= imageTop && mouseY <= imageBottom){
            $(thisClass).removeClass();
            $(thisClass).addClass('right');
        } else if(mouseX > imageRight && mouseY < imageTop){
            $(thisClass).removeClass();
            $(thisClass).addClass('up-right');
        } else{
            $(thisClass).removeClass();
            $(thisClass).addClass('front');
        }
      });
    };
}


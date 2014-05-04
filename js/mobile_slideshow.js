var model = $("#model");
model.data('slide-index',0);  // store initial slide position
var classArr = ['front','up','up-left','left','down-left','down','down-right','right','up-right'];
var className = model.attr("class");

function nextClass(){

  var index = model.data('slide-index');
  var currentClass = classArr[index];
  model.removeClass(currentClass);
  index += 1;
  if(index == classArr.length){ index = 0; } // loop back to first
  model.addClass(classArr[index]);
  model.data('slide-index',index); // store the new value
    
}

function prevClass(){

  var index = model.data('slide-index');
  var currentClass = classArr[index];
  model.removeClass(currentClass);
  index -= 1;
  if(index < 0){ index = classArr.length-1; } // loop back to last
  model.addClass(classArr[index]);
  model.data('slide-index', index); // store the new value
  
}

$('.slideshow-nav-next').click(function(){
    nextClass();
});
$('.slideshow-nav-prev').click(function(){
    prevClass();

});
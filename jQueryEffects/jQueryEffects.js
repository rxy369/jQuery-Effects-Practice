
// Fade out
$("#fadeOut").on("click",function(){
  $('div').fadeOut(1000, function(){
    //$(this).remove();
    //console.log("removed");
  });
});

// Fade In
$("#fadeIn").on("click",function(){
  $('div').fadeIn(1000, function(){
  });
});

// Fade Toggle
$("#fadeToggle").on("click",function(){
  $('div').fadeToggle(1000, function(){
  });
});

// Slide Down
$("#slideDown").on("click",function(){
  $('div').slideDown(1000, function(){
  });
});

// Slide Up
$("#slideUp").on("click",function(){
  $('div').slideUp(1000, function(){
  });
});

// Slide toggle
$("#slideToggle").on("click",function(){
  $('div').slideToggle(1000, function(){
    console.log("Slide is done");
  });
});

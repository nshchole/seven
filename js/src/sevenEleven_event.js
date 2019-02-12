// sevenEleven_event.js

(function($) {

var eventBox = $('.eventBox');
var body = $('html') || $('body');
var eventBoxChild = eventBox.children('div').eq(0).outerWidth();
var wheelresult = 0;
var myscroll = true;

eventBox.on('mousewheel', function(e){
  var E = e.originalEvent;
  var delta = E.wheelDelta;
  if(myscroll){
    myscroll = false;
      if(delta < 0){ // 휠을 아래로 내렸을경우에
        if(wheelresult < eventBox.outerWidth()){
          wheelresult += eventBoxChild; 
        }
      }else{  // 휠을 위로 올렸을경우에
        if(wheelresult > 0){
          wheelresult -= eventBoxChild;
        }
       }

        // 스크롤 최대값이 3000이라고 하더라더도, wheelresult는 계속 값을 추가하고 있기때문에 
        // 반대로 돌아오는 처리가 어려울 수 있다.

      body.stop().animate({scrollLeft:wheelresult},function(){
        console.log($(this));
        myscroll = true;
      });
    // console.log(wheelresult);

  }
});

})(jQuery);
(function($){

  var url = "./";
  $('#wrap').prepend('<header class="headBox">');
  $('.headBox').load(url+'header.html');

  $('#wrap').append('<footer class="footBox">');
  $('.footBox').load(url+'footer.html');

})(jQuery);
// sevenEleven_main.js

(function($) {

var indi = $('.view_indicator').find('li');
var adver = $('.adver_outer');
var adverUl = adver.children('ul');
var adverLi = adver.find('li');
var index = 0;

indi.on('click', function(e) {
  e.preventDefault();
  index = $(this).index();
console.log(index);
var mv = index * -100;

adverUl.animate({marginLeft:mv + '%'});
});

})(jQuery);
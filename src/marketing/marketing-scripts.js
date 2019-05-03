(function(){
  'use strict';

$(document).ready(function(){
  var carousel = $('#carousel').slick({
    dots: true,
    autoplay:true,
    autoplaySpeed:5000
  });
  $('.carousel-next-element').on('click', function(){
    $('#carousel').slick('slickNext');
  });

  $('.testimonial-label').on('click', function(){
  	$('.testimonial-label').removeClass('selected');
  	$(this).addClass('selected');
  });

});


}());
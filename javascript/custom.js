
$(function(){
  'use strict';



  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay : 500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


$( ".owl-prev").html('<i class="fa fa-chevron-left  arrow"></i>');
 $( ".owl-next").html('<i class="fa fa-chevron-right arrow"></i>');
 $('.dropdown-toggle').click(function () {
    window.location = $(this).attr('href');


   
});








});

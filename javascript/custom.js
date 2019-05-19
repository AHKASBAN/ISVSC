
$(function(){
  'use strict';



  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay : 100,
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



$( "footer .row2 p").text("The International Specialized Verification Services Company (ISVSC) is licensed by the competent authorities in the Kingdom of Saudi Arabia and the Gulf States in order to provide verification and electronic services. Its headquarters is at the Diplomatic District, Riyadh, Saudi Arabia");

$( ".arabic footer .row2 p").text("شركة خدمات التحقق المتخصصة الدولية مرخصة من قبل الجهات المختصة في المملكة العربية السعودية ودول الخليج لتقديم خدمات التحقق والخدمات الإلكترونية ، ويقع مقرها الرئيسي في الحي الدبلوماسي - الرياض- المملكة العربية السعودية.")


});

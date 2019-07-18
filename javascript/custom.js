
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

$('.paerentbox #bar2').click(function(){
          
    if ($('#nextstepform2').is(':visible'))  {
    
     $('#nextstepform2').hide();

}
else   {
    $('#nextstepform2').show();
    $('#nextstepform3').hide();
    $('#nextstepform1').hide();
}

});

$('.paerentbox #bar3').click(function(){
  
  if ($('#nextstepform3').is(':visible'))  {
  
   $('#nextstepform3').hide();

}
else   {
  $('#nextstepform3').show();
  $('#nextstepform1').hide();
  $('#nextstepform2').hide();
}

});

$('.paerentbox #bar1').click(function(){
  
  if ($('#nextstepform1').is(':visible'))  {
  
   $('#nextstepform1').hide();

}
else   {
  $('#nextstepform1').show();
  $('#nextstepform2').hide();
  $('#nextstepform3').hide();
}

});
$('.paerentbox #butt1').click(function(){ 
$('#nextstepform1').hide();

});
$('.paerentbox #butt2').click(function(){ 
$('#nextstepform2').hide();

});
$('.paerentbox #butt3').click(function(){ 
$('#nextstepform3').hide();
});


/*************************************go-to*****************************************/
$('#go-to').click(function(){ 
  var radioValue = $("input[name='group1']:checked").val();
  if (radioValue==1){
    window.location.href="datacheck.html";
  }
  else if (radioValue==2){
    window.location.href="secuirtycheck.html";
  }
  else if (radioValue==3){
    window.location.href="marketcheck.html";
  }
  else if (radioValue==4){
    window.location.href="evalutioncheck.html";
  }
  
  });
 

   
  /*************************************go-to-arabic*****************************************/
$('#go-to-arabic').click(function(){ 
  var radioValue = $("input[name='group2']:checked").val();
  if (radioValue==1){
    window.location.href="datacheck_ar.html";
  }
  else if (radioValue==2){
    window.location.href="secuirtycheck_ar.html";
  }
  else if (radioValue==3){
    window.location.href="marketcheck_ar.html";
  }
  else if (radioValue==4){
    window.location.href="evalutioncheck_ar.html";
  }
  
  });

    /*************************************if other is choose*****************************************/
   
    $('#service-type').change(function() {
       var service_type = $("#service-type option:selected").val();
    if (service_type=="other" ||service_type=="اخرى" ){
      $('#other-selected').css("display", "flex ");
    }
    else {
      $('#other-selected').css("display", "none ");
    }
  });


/************************make footer at end */
var win = $(window).innerHeight();
var body = $('body').innerHeight();
if (win> body) {
    $('footer').addClass('checkcopyright');
}

});

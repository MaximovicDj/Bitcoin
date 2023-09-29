$(document).ready(function(){
   
   $(".owl-carousel").owlCarousel({
       items: 1, 
       goToFirst : true,
       pagination : true,
       autoPlay: true,
       responsive: true
   });

   $(".owl-carousel2").owlCarousel({
        items: 4, 
        goToFirst : true,
        pagination : false,
        autoPlay: 2000,
        responsive: true
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
        
    });
 
});
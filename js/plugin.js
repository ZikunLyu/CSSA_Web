$(window).on("load", function(){
  $(".loader-wrapper").fadeOut("slow");
  $("body").removeClass("preload");
});

$(document).ready(function () {
      window.sr = ScrollReveal();
      sr.reveal('.navbar', {
        duration: 2000,
        origin: 'bottom'
       });

     $('#search').click(function() {
       $('.nav-link').addClass('hide-item')
       $('.search-form').addClass('active')
       $('.close').addClass('active')
       $('#login').addClass('deactive')
       $('#search').hide()
       $('#login').hide()
     })
     $('.close').click(function() {
       $('.nav-link').removeClass('hide-item')
       $('.search-form').removeClass('active')
       $('.close').removeClass('active')
       $('#login').removeClass('deactive')
       $('#search').show()
       $('#login').show()
     })
    
   })


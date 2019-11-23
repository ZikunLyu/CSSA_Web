

$(document).ready(function () {
  $(window).on("load", function () {
    //$(".loader-wrapper").fadeOut("slow"); 
    //sleep(1000000);
    $(".se-pre-con").fadeOut("slow");;
  });


  window.sr = ScrollReveal();
  sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
  });

  $('#search').click(function () {
    $('.nav-link').addClass('hide-item')
    $('.search-form').addClass('active')
    $('.close').addClass('active')
    $('#login').addClass('deactive')
    $('#search').hide()
    $('#login').hide()
  })
  $('.close').click(function () {
    $('.nav-link').removeClass('hide-item')
    $('.search-form').removeClass('active')
    $('.close').removeClass('active')
    $('#login').removeClass('deactive')
    $('#search').show()
    $('#login').show()
  })

})
/*
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
*/

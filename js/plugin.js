$(document).ready(function () {
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
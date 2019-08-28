$(document).ready(function () {
       window.sr = ScrollReveal();
       sr.reveal('.navbar', {
         duration: 2000,
         origin: 'bottom'
       });

       sr.reveal('#work', {
         duration: 2000,
         origin: 'bottom',
         viewFactor: 0.2
       });

       sr.reveal('#left_1, #left_2, #left_3',{
         duration: 1800,
         origin: 'left',
         distance: '150px',
         viewFactor: 0.2
       });

       sr.reveal('#right_1, #right_2, #right_3',{
         duration: 1800,
         origin: 'right',
         distance: '150px',
         viewFactor: 0.2
       });

       sr.reveal('#about_part' ,{
         duration: 2000,
         origin: 'bottom',
         viewFactor: 0.2
       });

       var $about = $('#about_part');
       $about.waypoint(function () {
         $('.skillbar').each(function(){
         $(this).find('.skillbar-bar').animate({
           width:jQuery(this).attr('data-percent')
         },6000);
       })
       },{offset:'90%'})

      })
$(document).ready(function () {
       
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

       /*
       sr.reveal('#about_part' ,{
         duration: 2000,
         origin: 'bottom',
         viewFactor: 0.2
       });
       */

       var $about = $('#about_part');
       $about.waypoint(function () {
         $('.skillbar').each(function(){
         $(this).find('.skillbar-bar').animate({
           width:jQuery(this).attr('data-percent')
         },6000);
       })
       },{offset:'90%'})

      $(".num_1").counterUp({
        delay: 100,
        time:5000
      });

      $(".num_2").counterUp({
        delay: 100,
        time:3000
      });

      $(".num_3").counterUp({
        delay: 100,
        time:1000
      });

      $(".num_4").counterUp({
        delay: 100,
        time:2000
      });



      })
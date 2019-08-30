
$(document).ready (function () {
    // external js: isotope.pkgd.js

// init Isotope
var $grid2 = $('.row').isotope({
    itemSelector: '.portfolio-post',
    layoutMode: 'fitRows'
  });
  
  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    //filterValue = filterFns[ filterValue ] || filterValue;
    filterValue =  filterValue;
    $grid2.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});		



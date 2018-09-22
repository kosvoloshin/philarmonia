const $ = require('jquery');

$(document).ready(function() {
    if($('.calendar__btn-event').length){
      $("document").ready(function($){
               
            $('.calendar__btn-event').on('click', function(event) {
                event.preventDefault();
                $('.calendar__btn-event').toggleClass('active');
                $('.calendar__row--hiden').toggleClass('active');
                $('.tooltip').removeClass('scale');
            });
        if(document.documentElement.clientWidth < 1200) {

            $('.calendar__date.active').on('click', function(){
                var $this = $(this);
                event.preventDefault();
                $('.tooltip.scale').removeClass('scale');

                window.setTimeout(function() {
                    $($this).next().toggleClass('scale');
                }, 300);
            });
        };

      });
    }
});
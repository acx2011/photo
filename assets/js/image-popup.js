$(document).ready(function($) {
    $('a.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled:true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            titleSrc: function(item) {
                return item.el.attr('title') + '&nbsp;' + item.el.attr('data-caption');
            }
        }
    });
});
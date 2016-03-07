/**
 * Created by Wei-Jen on 2/28/16.
 */

$(function() {
    $('#fullpage').fullpage({
        anchors: ['about', 'works', 'contacts'],
        menu: '#myMenu',
        slidesNavigation: true
    });

    /*
    $('.Collage').collagePlus({
        'direction': 'horizontal'
    }); */

    $('#hello').fadeIn(1500, function() {
        $('#hello').fadeOut(1500, function() {
            $('#bio').fadeIn(1500);
        });

    });
});
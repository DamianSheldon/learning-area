$(function(){
    $(window).scroll(function(){
        var $header = $('header');
        if ($(document).scrollTop() > 100) {
            if (!$header.hasClass('small-header')) {
                $('header').addClass('small-header');
            }
        }
        else {
            if ($header.hasClass('small-header')) {
                $('header').removeClass('small-header');
            }
        }
    });
});
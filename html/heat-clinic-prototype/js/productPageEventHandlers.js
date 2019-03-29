(function ($) {
    // Make the main product image zoom-able
    $('.product-card img').each(function(i, el) {
        $(el).parent().zoom({magnify:2, on: 'grab'});
    });

    // $('#main-product-img').zoom({magnify:2, on: 'grab'});
})(jQuery);

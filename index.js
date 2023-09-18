var Start = (function($) {
    var init = function() {
        if(typeof Navigation !== 'Navigation') 
			Navigation.init();
    }

    return {
        init: init
    };
}(jQuery));

$(function() {
    Start.init();
});
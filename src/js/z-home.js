(function($) {

    $(document).ready(function(){

        //WOW
        wow = new WOW(
            {
                animateClass: 'animated',
                offset: 0,
                callback: function(box) {
                    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
                }
            }
        );
        wow.init();

        //SWIPER
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            effect: 'fade',
            speed: 2500,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            }
        });

    });

})(jQuery);

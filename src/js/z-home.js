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
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

        $('.thumbnail').click(function(){
            console.log('https://www.youtube.com/embed/'+$(this).attr('data-yt'));
            $('.videos .primario iframe').attr('src','https://www.youtube.com/embed/'+$(this).data('yt'));
        });

    });

})(jQuery);

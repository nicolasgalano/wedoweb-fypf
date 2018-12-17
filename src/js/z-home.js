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
                delay: 4500,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

        //VIDEOS
        $('.thumbnail').click(function(){
            $('.videos .primario iframe').attr('src','https://www.youtube.com/embed/'+$(this).data('yt'));
        });

        //ALIANZAS
        $('.row-alianzas ul.botones li').click(function(){
            $('.row-alianzas .alianzas-tabs .tab').removeClass('active');
            $('.row-alianzas .alianzas-tabs .tab.tab-'+$(this).data('tab')).addClass('active');
        });
        $('.row-alianzas .selectioner select').change(function() {
            $('.row-alianzas .alianzas-tabs .tab').removeClass('active');
            $('.row-alianzas .alianzas-tabs .tab.'+$(this).val()).addClass('active');
        });

        //MENU
        $('nav a.btn-menu').click(function(){
            $('nav ul.menu').toggleClass('active');
        });

        //DAMERO
        $('.row-damero ul.categorias li').click(function(){
            $('.row-damero .links a').addClass('hidden');
            var array = $(this).data('array');
            for(i=0 ; i<array.length ; i++){
                $('.row-damero .links a#link-'+array[i]).removeClass('hidden');
            }
        });
        $('.row-damero .selectioner select').change(function() {
            $('.row-damero .links a').addClass('hidden');
            var array = $(this).val();
            array = array.replace('[', '');
            array = array.replace(']', '');
            array = array.split(',');
            for(i=0 ; i<array.length ; i++){
                $('.row-damero .links a#link-'+array[i]).removeClass('hidden');
            }
        });

    });

})(jQuery);

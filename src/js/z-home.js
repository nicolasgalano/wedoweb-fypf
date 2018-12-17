(function($) {

    $(document).ready(function(){

        $('html').smoothScroll(1000);

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
        var swiper = new Swiper('.row-premios .swiper-container', {
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: true,
            },
            preventClicks:false,
            preventClicksPropagation:false,
            navigation: {
                nextEl: '.row-premios .swiper-button-next',
                prevEl: '.row-premios .swiper-button-prev',
            }
        });

        //SWIPER 2
        var swiper2 = new Swiper('.videos .swiper-container', {
            slidesPerView: 6,
            spaceBetween: 0,
            preventClicks:false,
            preventClicksPropagation:false,
            navigation: {
                nextEl: '.videos .swiper-button-next',
                prevEl: '.videos .swiper-button-prev',
            }
        });

        //VIDEOS
        $('.thumbnail').click(function(){
            $('.videos .primario iframe').attr('src','https://www.youtube.com/embed/'+$(this).data('yt'));
        });

        //ALIANZAS
        $('.row-alianzas ul.botones li').click(function() {
            $('.row-alianzas ul.botones li').removeClass('active');
            $(this).addClass('active');
            $('.row-alianzas .alianzas-tabs .tab').removeClass('active');
            $('.row-alianzas .alianzas-tabs .tab.tab-'+$(this).data('tab')).addClass('active');
        });
        $('.row-alianzas .selectioner select').change(function() {
            $('.row-alianzas .alianzas-tabs .tab').removeClass('active');
            $('.row-alianzas .alianzas-tabs .tab.'+$(this).val()).addClass('active');
        });

        //MENU
        $('nav a.btn-menu').click(function(){
            $('nav').toggleClass('mobile-open');
        });
        $('nav.mobile-open ul.menu a').click(function(){
            $('nav').removeClass('mobile-open');
        });

        //DAMERO
        $('.row-damero .links > div').click(function(){
            $(this).toggleClass('clicked');
        });

        $('.row-damero ul.categorias li').click(function(){
            $('.row-damero ul.categorias li').removeClass('active');
            $('.row-damero .links > div').removeClass('hidden');
            $(this).addClass('active');
            $('.row-damero .links > div').removeClass('seleccionado');
            var array = $(this).data('array');
            for(i=0 ; i<array.length ; i++){
                $('.row-damero .links div#link-'+array[i]).addClass('seleccionado');
            }
        });
        $('.row-damero .selectioner select').change(function() {
            $('.row-damero .links > div').removeClass('seleccionado');
            $('.row-damero .links > div').addClass('hidden');
            var array = $(this).val();
            array = array.replace('[', '');
            array = array.replace(']', '');
            array = array.split(',');
            for(i=0 ; i<array.length ; i++){
                if(array[i] == 0){
                    console.log('asdasdasdasd');
                    $('.row-damero .links > div').removeClass('seleccionado');
                    $('.row-damero .links > div').removeClass('hidden');
                }else{
                    $('.row-damero .links div#link-'+array[i]).addClass('seleccionado');
                    $('.row-damero .links div#link-'+array[i]).removeClass('hidden');
                }
            }
        });

    });

})(jQuery);

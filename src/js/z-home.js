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
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $('.row-alianzas .alianzas-tabs .tab').removeClass('active');
                $('.row-alianzas .alianzas-tabs .tab.tab-1').addClass('active');
            }else{
                $('.row-alianzas ul.botones li').removeClass('active');
                $(this).addClass('active');
                $('.row-alianzas .alianzas-tabs .tab').removeClass('active');
                $('.row-alianzas .alianzas-tabs .tab.tab-'+$(this).data('tab')).addClass('active');
            }
        });
        $('.row-alianzas .selectioner select').change(function() {
            $('.row-alianzas .alianzas-tabs .tab').removeClass('active');
            $('.row-alianzas .alianzas-tabs .tab.'+$(this).val()).addClass('active');
        });

        //MENU
        $('nav a.btn-menu').click(function(){
            $('nav').toggleClass('mobile-open');
        });
        $('nav ul.menu li').click(function(){
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

        //FORMULARIO
        $('.row-formulario .pulldown .value').click(function(){
            if(!$(this).parent().hasClass('opened')){
                $('.row-formulario .pulldown').removeClass('opened');
                $(this).parent().addClass('opened');
            }else{
                $('.row-formulario .pulldown').removeClass('opened');
            }
        });
        $('.row-formulario .pulldown .input-list label').click(function(){
            var $inputList = $(this).parent();
            $inputList.parent().find('.value').text( $inputList.find('input:checked').val() );
            $inputList.parent().removeClass('opened');
        });






        /*
        * Replace all SVG images with inline SVG
        */
        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });




    });

})(jQuery);

$(document).ready(function () {
    // Swiper: Slider
    new Swiper('.banner.swiper-container', {
        loop: true,
        speed: 1000,
        direction: 'horizontal',
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 20,
        breakpoints: {
            1920: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // 1028: {
            //     slidesPerView: 2,
            //     spaceBetween: 30
            // },
            // 480: {
            //     slidesPerView: 1,
            //     spaceBetween: 10
            // }
        }
    });


    // AOS JS
    AOS.init();


    var swiper = new Swiper(".newSwiper.swiper-container", {
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        speed: 600,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: true
        },

        navigation: {
            nextEl: '.gallery_wrp .swiper-button-next',
            prevEl: '.gallery_wrp .swiper-button-prev',
        },
        breakpoints: {
            1920: {
                slidesPerView: 3
            },
            480: {
                slidesPerView: 1
            }
        }
    });

    // Gallery
    $(document).ready(function () {

        $(".filter-button").click(function () {
            $(this).removeClass("active");
            var value = $(this).attr('data-filter');

            if (value == "all") {
                $('.filter').show('1000');
            }
            else {
                $(".filter").not('.' + value).hide('3000');
                $('.filter').filter('.' + value).show('3000');
            }

            if ($(".filter-button").removeClass("active")) {
                $(this).addClass("active");

            } else {
                $(this).removeClass("active");
            }

        });




    });


    // Vertical tabs


    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

        /*$(".tabs").css("margin-top", function(){ 
           return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
        });*/
    });
    $(".tab_container").css("min-height", function () {
        return $(".tabs").outerHeight() + 50;
    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });


    /* Extra class "tab_last"
       to add border to bottom side
       of last tab 
    $('ul.tabs li').last().addClass("tab_last");*/

});


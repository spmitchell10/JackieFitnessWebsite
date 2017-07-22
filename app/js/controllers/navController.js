(function() {
    'use strict';

    angular
        .module('portfolio')
        .controller('navController', function() {


            // Functions for Hamburger Menu and navBarHidden jQuery
            const vm = this;

            // $("header").headroom({
            //     "offset": 205,
            //     "tolerance": 5,
            //     "classes": {
            //         "initial": "animated",
            //         "pinned": "slideDown",
            //         "unpinned": "slideUp"
            //     }
            // });

            // // to destroy
            // $("#header").headroom("destroy");


            (() => {
                $('.hamburgerMenu').on('click', function() {
                    $('.hiddenMenu').toggleClass('navMenuHidden');
                })
            })();



            (() => {
                $('.hamburgerMenu').on('click', function() {
                    $('.bar').toggleClass('animate');
                })
            })();


            $(document).scroll(function() {
                const cutoff = $(window).scrollTop()
                let $navSection = $('.nav-section')

                $navSection.each(function() {
                    let $this = $(this)

                    if ($this.offset().top + $this.height() > cutoff) {
                        $navSection.removeClass('current')
                        $this.addClass('current')

                        let $currentID = $('.current').attr('id')

                        $('.navMenu.active').removeClass('active')
                        console.log($currentID)
                        switch ($currentID) {
                            case "home":
                                $('.navMenu.portfolio').addClass('active')
                                break
                            case "about":
                                $('.navMenu.about').addClass('active')
                                break
                            case "portfolio":
                                $('.navMenu.contact').addClass('active')
                                break
                            case "contact":
                                $('.navMenu.resume').addClass('active')
                                break
                            default:
                                break
                        }

                        return false
                    }
                })
            });


        })
})();
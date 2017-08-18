(function() {
    'use strict';

    angular
        .module('portfolio')
        .controller('TableController', function($scope, $location) {

            const vm = this;

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

            $('.jamSite').mouseover(function() {
                  $('.jamPop').removeClass("jamPopHidden");
                });

            $('.jamSite').mouseout(function() {
                  $('.jamPop').addClass("jamPopHidden");
                });

            $scope.isActive = function(route) {
                return route === $location.path();
            }

           

            // $(document).ready(function() {
            //     var $win = $(window);

            //     $('div.background, div.aboutMebackground, div.onlineCoachbackground').each(function() {
            //         var scroll_speed = 3;
            //         var $this = $(this);
            //         $(window).scroll(function() {
            //             var bgScroll = -(($win.scrollTop() - $this.offset().top) / scroll_speed);
            //             var bgPosition = 'center ' + bgScroll + 'px';
            //             $this.css({ backgroundPosition: bgPosition });
            //         });
            //     });
            // })


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
                            case "onlinecoaching":
                                $('.navMenu.onlinecoaching').addClass('active')
                                break
                            case "contact":
                                $('.navMenu.contact').addClass('active')
                                break
                            default:
                                break
                        }

                        return false
                    }})});
        })
    })();

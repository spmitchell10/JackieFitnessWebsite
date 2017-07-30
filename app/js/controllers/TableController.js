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

            $scope.isActive = function(route) {
                return route === $location.path();
            }

           

            $(document).ready(function() {
                var $win = $(window);

                $('div.background').each(function() {
                    var scroll_speed = 3;
                    var $this = $(this);
                    $(window).scroll(function() {
                        var bgScroll = -(($win.scrollTop() - $this.offset().top) / scroll_speed);
                        var bgPosition = 'center ' + bgScroll + 'px';
                        $this.css({ backgroundPosition: bgPosition });
                    });
                });
            })
        })
    })();

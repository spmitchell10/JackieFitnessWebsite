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

            //Marvel Hover

            $('.marvelSite').mouseover(function() {
                  $('.marvelPop').removeClass("marvelPopHidden");
                });

            $('.marvelSite').mouseout(function() {
                  $('.marvelPop').addClass("marvelPopHidden");
                });


            //JamSesh Hover

            $('.jamSite').mouseover(function() {
                  $('.jamPop').removeClass("jamPopHidden");
                });

            $('.jamSite').mouseout(function() {
                  $('.jamPop').addClass("jamPopHidden");
                });

            //todo Hover

            $('.todoSite').mouseover(function() {
                  $('.todoPop').removeClass("todoPopHidden");
                });

            $('.todoSite').mouseout(function() {
                  $('.todoPop').addClass("todoPopHidden");
                });

            //Shopular Hover

            $('.shopularSite').mouseover(function() {
                  $('.shopularPop').removeClass("shopularPopHidden");
                });

            $('.shopularSite').mouseout(function() {
                  $('.shopularPop').addClass("shopularPopHidden");
                });

            //Insta Hover

            $('.instagramSite').mouseover(function() {
                  $('.instagramPop').removeClass("instagramPopHidden");
                });

            $('.instagramSite').mouseout(function() {
                  $('.instagramPop').addClass("instagramPopHidden");
                });

            //Blog Hover

            $('.blogSite').mouseover(function() {
                  $('.blogPop').removeClass("blogPopHidden");
                });

            $('.blogSite').mouseout(function() {
                  $('.blogPop').addClass("blogPopHidden");
                });


            






        })

})();

(function() {
    'use strict';

    angular
        .module('portfolio', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider,$locationProvider) {


            $locationProvider.html5Mode(true);


            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        'content': {
                            templateUrl: '../partials/home.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },
                        'nav': {
                            templateUrl: '../partials/nav.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },
                        'footer': {
                            templateUrl: '../partials/footer.html',
                            controller: 'navController',
                            controllerAs: 'vm',
                        }

                    }
                }),

            $stateProvider
                .state('about', {
                    url: '/about',
                    views: {
                        'content': {
                            templateUrl: '../partials/about.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },
                        'nav': {
                            templateUrl: '../partials/nav.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },
                        'footer': {
                            templateUrl: '../partials/footer.html',
                            controller: 'navController',
                            controllerAs: 'vm',
                        }

                    }
                }),

            $stateProvider
                .state('onlinecoaching', {
                    url: '/onlinecoaching',
                    views: {
                        'content': {
                            templateUrl: '../partials/onlinecoaching.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },
                        'nav': {
                            templateUrl: '../partials/nav.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },
                        'footer': {
                            templateUrl: '../partials/footer.html',
                            controller: 'navController',
                            controllerAs: 'vm',
                        }

                    }
                }),

            $stateProvider
                .state('contact', {
                    url: '/contact',
                    views: {
                        'content': {
                            templateUrl: '../partials/contact.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },
                        'nav': {
                            templateUrl: '../partials/nav.html',
                            controller: 'TableController',
                            controllerAs: 'vm',
                        },
                        'footer': {
                            templateUrl: '../partials/footer.html',
                            controller: 'navController',
                            controllerAs: 'vm',
                        }

                    }
                })

        })

})();

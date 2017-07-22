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
                }),

            $stateProvider
                .state('resume', {
                    url: '/resume',
                    views: {
                        'content': {
                            templateUrl: '../partials/resume.html',
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
                .state('jamsesh', {
                    url: '/jamsesh',
                    views: {
                        'content': {
                            templateUrl: '../partials/jamsesh.html',
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
                .state('todo', {
                    url: '/todo',
                    views: {
                        'content': {
                            templateUrl: '../partials/todo.html',
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
                .state('shopular', {
                    url: '/shopular',
                    views: {
                        'content': {
                            templateUrl: '../partials/shopular.html',
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
                .state('instagram', {
                    url: '/instagram',
                    views: {
                        'content': {
                            templateUrl: '../partials/instagram.html',
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
                .state('blog', {
                    url: '/blog',
                    views: {
                        'content': {
                            templateUrl: '../partials/blog.html',
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
                .state('marvel', {
                    url: '/marvelsite',
                    views: {
                        'content': {
                            templateUrl: '../partials/marvel.html',
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

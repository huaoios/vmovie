/**
 * Created by chris on 16/9/6.
 */

angular.module('starter', ['ionic', 'starter.controller', 'starter.services', 'starter.config', 'ngResource'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:

            .state('tab.homepage', {
                url: '/homepage',
                views: {
                    'tab-homepage': {
                        templateUrl: 'templates/home/homepage.html',
                        controller: 'HomepageCtrl'
                    }
                }
            })

            .state('tab.hots', {
                url: '/hots',
                views: {
                    'tab-hots': {
                        templateUrl: 'templates/hots/hots.html',
                        controller: 'HotsCtrl'
                    }
                }
            })
            .state('tab.hotDetail', {
                url: '/hotDetail/:aid',
                views: {
                    'tab-hots': {
                        templateUrl: 'templates/hots/hotDetail.html',
                        controller: 'HotDetailCtrl'
                    }
                }
            })
            .state('tab.article', {
                url: '/article',
                views: {
                    'tab-article': {
                        templateUrl: 'templates/article/article.html',
                        controller: 'ArticleCtrl'
                    }
                }
            })

            .state('tab.mine', {
                url: '/mine',
                views: {
                    'tab-mine': {
                        templateUrl: 'templates/mine/mine.html',
                        controller: 'MineCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/homepage');

    });
'use strict';
angular.module('evlApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ct.ui.router.extras',
    'ui.bootstrap',
    'app.components',
    'app.utils',
    'app.web'
])
    .config(function ($provide, $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, appConfig) {
        $stateProvider
            .state('gameHall', {
                url: '/gameHall',
                templateUrl: 'partials/gameHall.html',
                controller: 'GameHallCtrl'
            });

        $urlRouterProvider.otherwise(function () {
            return '/gameHall';
        });

        // Initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        // 禁用缓存
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

        $locationProvider.html5Mode(appConfig.html5Mode);
    });
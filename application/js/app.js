(function () {
    angular.module('app', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngResource', 'jkAngularCarousel'])
        .config(function ($routeProvider) {

            $routeProvider
                .when('/page1', {
                    templateUrl: 'js/feature1/template/page1.html',
                    controller: 'Feature1Page1Controller'
                })
                .when('/page2', {
                    templateUrl: 'js/feature1/template/page2.html',
                    controller: 'Feature1Page2Controller'
                })
                .otherwise({redirectTo: '/'});

        })
        .run(function () {

        });

}());
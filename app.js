var app = angular.module('website', ['ngRoute']);
app.config(function($routeProvider) {
        $routeProvider.
            when('/about', {
                templateUrl:'partials/about.html'
            }).
            when('/blog', {
                templateUrl:'partials/blog.html'
            }).
            otherwise({
                redirectTo: '/home',
                templateUrl:'partials/home.html'
            });

    });
app.controller('MainCtrl', function($scope) {

});

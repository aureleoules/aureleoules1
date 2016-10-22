var app = angular.module('website', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.
    when('/about', {
        templateUrl: 'partials/about.html'
    }).
    when('/blog', {
        templateUrl: 'partials/blog.html'
    }).
    when('/', {
        redirectTo: '/home',
        templateUrl: 'partials/home.html'
    }).
    when('/home', {
        redirectTo: '/home',
        templateUrl: 'partials/home.html'
    }).
    otherwise({
        redirectTo: '/404',
        templateUrl: 'partials/404.html'
    });

});
app.controller('MainCtrl', function($scope) {

    $scope.tooltipText = "That's a joke, click to fix.";
    $scope.texte = "<b>test</b>"
});

var app = angular.module('website', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.
    when('/about', {
        title: "About",
        templateUrl: 'partials/about.html'
    }).
    when('/blog', {
        templateUrl: 'partials/blog.html'
    }).
    when('/', {
        title: "Home",
        redirectTo: '/home',
        templateUrl: 'partials/home.html'
    }).
    when('/home', {
        title: "Home",
        redirectTo: '/home',
        templateUrl: 'partials/home.html',
    }).
    when('/404', {
        title: "Not Found",
        templateUrl: 'partials/404.html'
    }).
    otherwise({
        redirectTo: '/404',
    });

});
app.controller('MainCtrl', function($scope) {
    $scope.tooltipText = "That's a joke, click to fix.";
});

app.controller('NavBarCtrl', function($scope, $location) {
    $scope.isActive = function(viewLocation) { //This function is for the NavBar: Set 'active' class if navbar item is selected.
        return viewLocation === $location.path();
    };
});

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.title = current.$$route.title;
        
    });
}]);

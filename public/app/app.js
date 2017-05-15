var app = angular.module('AirplaneApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'PlanesCtrl'
        })
        .state('newPlane', {
            url: '/new',
            templateUrl: 'app/views/new.html',
            controller: 'NewPlaneCtrl'
        })
        .state('plane', {
            url: '/plane/:id',
            templateUrl: 'app/views/details.html',
            controller: 'DetailsCtrl'
        })
        .state('update', {
            url: '/plane/update/:id',
            templateUrl: 'app/views/update.html',
            controller: 'UpdateCtrl'
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/views/404.html'
        });

    $locationProvider.html5Mode(true);
}]);

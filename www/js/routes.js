'use strict';

/**
 * @ngdoc function
 * @name Blue Cross of India:Routes
 * @author Raghav
 * @description
 * # Routes
 * Contains the URL and states routes for the Blue Cross of India app
 */

angular

.module('bluecross')

.config(function($stateProvider, $urlRouterProvider) {
	
        $stateProvider
            .state('index', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'views/register.html',
                controller: 'caseController'
            })

            .state('ambulance_assigned', {
                url: '/ambulance_assigned',
                templateUrl: 'views/ambulance_assigned.html',
                controller : 'ambulanceController'
            })

            .state('ambulance_not_assigned', {
                url: '/ambulance_not_assigned',
                templateUrl: 'views/ambulance_not_assigned.html',
                controller: 'ambulanceController'
            })

            .state('donate',{
                url: '/donate',
                templateUrl: 'views/donate.html'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
          
        $urlRouterProvider.otherwise("/home");

})



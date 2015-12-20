'use strict';

/**
 * @ngdoc function
 * @name Blue Cross of India:Home Controller
 * @author Raghav
 * @description
 * # Home Controller
 * Contains the controller for home view of the app
 */

angular

.module('bluecross.controllers')

.controller('homeController', function($scope, $state, $ionicPopup, $http, $cordovaLocalStorage, ComplaintService) {
	
	$scope.URL = config.URL;

	// Get the complaints registered

	ComplaintService.getComplaints(function(res){
		$scope.complaints = res.data.data;
	});

	$scope.getName = function() {

			$ionicPopup.show({
		      template: '<input type="text" ng-model="user.name">',
		      title: 'Hi. Whats your name?',
		      subTitle: '',
		      scope: $scope,
		      buttons: [
		        {
		          text: 'Save',
		          type: 'button-positive',
		          onTap: function(e) {
		            if (!$scope.user.name) {
		              //don't allow the user to close unless he enters name
		              e.preventDefault();
		            } else {
		            	console.log("SET :"+$scope.user.name)
		              return $cordovaLocalStorage.setItem('username',$scope.user.name);
		            }
		          }
		        }
		      ]
		    });		   
	}

})

/// <reference path="angular.js" />
var AuthorApp = angular.module('AuthorApp', []);
AuthorApp.controller('MyController', function ($scope) {
	$scope.authors= 
	[
		{'name': 'me'},
		{'name': 'you'},
		{'name': 'us'},
		{'name': 'them'}
	];
});
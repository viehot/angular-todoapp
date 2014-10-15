'use strict';

/**
 * @ngdoc function
 * @name mytodoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoAppApp
 */
angular.module('mytodoAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

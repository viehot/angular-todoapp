'use strict';

/**
 * @ngdoc function
 * @name mytodoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoAppApp
 */
angular.module('mytodoAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

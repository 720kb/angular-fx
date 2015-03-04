/*global angular*/

(function withAngular(angular) {
  'use strict';

  angular.module('720kb', [
    'ngRoute',
    '720kb.fx'
  ])
  .controller('Ctrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $timeout(function () {
      $scope.x = 5;
    }, 2000);
    $timeout(function () {
      $scope.x = 1.5;
    }, 6000);
    $timeout(function () {
      $scope.x = 7;
    }, 12000);
  }]);
}(angular));

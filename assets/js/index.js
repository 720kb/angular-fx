/*global angular*/

(function withAngular(angular) {
  'use strict';

  angular.module('720kb', [
    'ngRoute',
    '720kb.fx',
    'hljs'
  ])
  .config(['hljsServiceProvider', function configurationFunction(hljsServiceProvider) {

    hljsServiceProvider.setOptions({
      // replace tab with 4 spaces
      'tabReplace':''
    });
  }])
  .controller('myCtrl',['$scope', '$interval',
  function ($scope, $interval) {
    $scope.fullList = [
      'ng-bounce-in',
      'ng-bounce-in-down',
      'ng-bounce-in-left',
      'ng-bounce-in-right',
      'ng-bounce-in-up',
      'ng-bounce-out',
      'ng-bounce-out-down',
      'ng-bounce-out-left',
      'ng-bounce-out-right',
      'ng-bounce-out-up',
      'ng-fade-in',
      'ng-fade-in-down',
      'ng-fade-in-down-big',
      'ng-fade-in-left',
      'ng-fade-in-left-big',
      'ng-fade-in-right',
      'ng-fade-in-right-big',
      'ng-fade-in-up',
      'ng-fade-in-up-big',
      'ng-fade-out',
      'ng-fade-out-down',
      'ng-fade-out-down-big',
      'ng-fade-out-left',
      'ng-fade-out-left-big',
      'ng-fade-out-right',
      'ng-fade-out-right-big',
      'ng-fade-out-up',
      'ng-fade-out-up-big',
      'ng-flash',
      'ng-flip',
      'ng-flip-in-x',
      'ng-flip-in-y',
      'ng-flip-out-x',
      'ng-flip-out-y',
      'ng-hinge',
      'ng-light-speed-in',
      'ng-light-speed-out',
      'ng-pulse',
      'ng-roll-in',
      'ng-roll-out',
      'ng-rotate-in',
      'ng-rotate-in-down-left',
      'ng-rotate-in-down-right',
      'ng-rotate-in-up-left',
      'ng-rotate-in-up-right',
      'ng-rotate-out',
      'ng-rotate-out-down-left',
      'ng-rotate-out-down-right',
      'ng-rotate-out-up-left',
      'ng-rotate-out-up-right',
      'ng-rubber-band',
      'ng-shake',
      'ng-swing',
      'ng-tada',
      'ng-wobble',
      'ng-zoom-in',
      'ng-zoom-in-down',
      'ng-zoom-in-left',
      'ng-zoom-in-right',
      'ng-zoom-in-up',
      'ng-zoom-out',
      'ng-zoom-out-down',
      'ng-zoom-out-left',
      'ng-zoom-out-right',
      'ng-zoom-out-up'
    ];
    $interval(function () {

      $scope.x = 3;
    }, 4500);

    $interval(function () {

      $scope.x = 0;
    }, 8000);
  }]);
}(angular));

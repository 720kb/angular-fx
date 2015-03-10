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
      'tabReplace': ''
    });
  }])
  .controller('myCtrl', ['$scope', '$interval',
  function ($scope, $interval) {
    $scope.fullList = [
      'ngfx-bounce-in',
      'ngfx-bounce-in-down',
      'ngfx-bounce-in-left',
      'ngfx-bounce-in-right',
      'ngfx-bounce-in-up',
      'ngfx-bounce-out',
      'ngfx-bounce-out-down',
      'ngfx-bounce-out-left',
      'ngfx-bounce-out-right',
      'ngfx-bounce-out-up',
      'ngfx-fade-in',
      'ngfx-fade-in-down',
      'ngfx-fade-in-down-big',
      'ngfx-fade-in-left',
      'ngfx-fade-in-left-big',
      'ngfx-fade-in-right',
      'ngfx-fade-in-right-big',
      'ngfx-fade-in-up',
      'ngfx-fade-in-up-big',
      'ngfx-fade-out',
      'ngfx-fade-out-down',
      'ngfx-fade-out-down-big',
      'ngfx-fade-out-left',
      'ngfx-fade-out-left-big',
      'ngfx-fade-out-right',
      'ngfx-fade-out-right-big',
      'ngfx-fade-out-up',
      'ngfx-fade-out-up-big',
      'ngfx-flash',
      'ngfx-flip',
      'ngfx-flip-in-x',
      'ngfx-flip-in-y',
      'ngfx-flip-out-x',
      'ngfx-flip-out-y',
      'ngfx-hinge',
      'ngfx-light-speed-in',
      'ngfx-light-speed-out',
      'ngfx-pulse',
      'ngfx-roll-in',
      'ngfx-roll-out',
      'ngfx-rotate-in',
      'ngfx-rotate-in-down-left',
      'ngfx-rotate-in-down-right',
      'ngfx-rotate-in-up-left',
      'ngfx-rotate-in-up-right',
      'ngfx-rotate-out',
      'ngfx-rotate-out-down-left',
      'ngfx-rotate-out-down-right',
      'ngfx-rotate-out-up-left',
      'ngfx-rotate-out-up-right',
      'ngfx-rubber-band',
      'ngfx-shake',
      'ngfx-swing',
      'ngfx-tada',
      'ngfx-wobble',
      'ngfx-zoom-in',
      'ngfx-zoom-in-down',
      'ngfx-zoom-in-left',
      'ngfx-zoom-in-right',
      'ngfx-zoom-in-up',
      'ngfx-zoom-out',
      'ngfx-zoom-out-down',
      'ngfx-zoom-out-left',
      'ngfx-zoom-out-right',
      'ngfx-zoom-out-up'
    ];
    $interval(function () {

      $scope.x = 3;
    }, 4500);

    $interval(function () {

      $scope.x = 0;
    }, 8000);
  }]);
}(angular));

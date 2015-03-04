/*global angular*/

(function withAngular(angular) {
  'use strict';

  angular.module('720kb.fx', [])
  .directive('ngBounce', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngBounce': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-bounce-start animated bounce'
          , goFx = function () {

            if ($scope.ngBounce) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounce', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFlash', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFlash': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-flash-start animated flash'
          , goFx = function () {
            if ($scope.ngFlash) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFlash', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngPulse', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngPulse': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-pulse-start animated pulse'
          , goFx = function () {
            if ($scope.ngPulse) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngPulse', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRubberband', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRubberband': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rubberband-start animated rubberBand'
          , goFx = function () {
            if ($scope.ngRubberband) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRubberband', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngShake', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngShake': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-shake-start animated shake'
          , goFx = function () {
            if ($scope.ngShake) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngShake', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngSwing', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngSwing': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-swing-start animated swing'
          , goFx = function () {
            if ($scope.ngSwing) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngSwing', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngTada', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngTada': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-tada-start animated tada'
          , goFx = function () {
            if ($scope.ngTada) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngTada', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngWobble', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngWobble': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-wobble-start animated wobble'
          , goFx = function () {
            if ($scope.ngWobble) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngWobble', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceIn', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngBounceIn': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-bouncein-start animated bounceIn'
          , goFx = function () {
            if ($scope.ngBounceIn) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceIn', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceInDown', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngBounceInDown': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-bounceindown-start animated bounceInDown'
          , goFx = function () {
            if ($scope.ngBounceInDown) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceInDown', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceInLeft', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngBounceInLeft': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-bounceinleft-start animated bounceInLeft'
          , goFx = function () {
            if ($scope.ngBounceInLeft) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceInLeft', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceInRight', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngBounceInRight': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-bounceinright-start animated bounceInRight'
          , goFx = function () {
            if ($scope.ngBounceInRight) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceInRight', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceInUp', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngBounceInUp': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-bounceinup-start animated bounceInUp'
          , goFx = function () {
            if ($scope.ngBounceInUp) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceInUp', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceOut', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngBounceOut': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-bounceout-start animated bounceOut'
          , goFx = function () {
            if ($scope.ngBounceOut) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceOut', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceOutDown', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngBounceOutDown': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-bounceoutdown-start animated bounceOutDown'
          , goFx = function () {
            if ($scope.ngBounceOutDown) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceOutDown', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceOutLeft', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngBounceOutLeft': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-bounceoutleft-start animated bounceOutLeft'
          , goFx = function () {
            if ($scope.ngBounceOutLeft) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceOutLeft', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceOutRight', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngBounceOutRight': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-bounceoutright-start animated bounceOutRight'
          , goFx = function () {
            if ($scope.ngBounceOutRight) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceOutRight', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceOutUp', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngBounceOutUp': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-bounceoutup-start animated bounceOutUp'
          , goFx = function () {
            if ($scope.ngBounceOutUp) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceOutUp', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeIn', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeIn': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadein-start animated fadeIn'
          , goFx = function () {
            if ($scope.ngFadeIn) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeIn', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInDown', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeInDown': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeindown-start animated fadeInDown'
          , goFx = function () {
            if ($scope.ngFadeInDown) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInDown', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInDownBig', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeInDownBig': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeindownbig-start animated fadeInDownBig'
          , goFx = function () {
            if ($scope.ngFadeInDownBig) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInDownBig', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInLeft', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeInLeft': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeinleft-start animated fadeInLeft'
          , goFx = function () {
            if ($scope.ngFadeInLeft) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInLeft', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInLeftBig', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeInLeftBig': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeinleftbig-start animated fadeInLeftBig'
          , goFx = function () {
            if ($scope.ngFadeInLeftBig) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInLeftBig', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInRight', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeInRight': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeinright-start animated fadeInRight'
          , goFx = function () {
            if ($scope.ngFadeInRight) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInRight', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInRightBig', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeInRightBig': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeinrightbig-start animated fadeInRightBig'
          , goFx = function () {
            if ($scope.ngFadeInRightBig) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInRightBig', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInUp', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeInUp': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeinup-start animated fadeInUp'
          , goFx = function () {
            if ($scope.ngFadeInUp) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInUp', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInUpBig', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeInUpBig': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeinupbig-start animated fadeInUpBig'
          , goFx = function () {
            if ($scope.ngFadeInUpBig) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInUpBig', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOut', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeOut': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeout-start animated fadeOut'
          , goFx = function () {
            if ($scope.ngFadeOut) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOut', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutDown', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeOutDown': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeoutdown-start animated fadeOutDown'
          , goFx = function () {
            if ($scope.ngFadeOutDown) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutDown', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutDownBig', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeOutDownBig': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeoutdownbig-start animated fadeOutDownBig'
          , goFx = function () {
            if ($scope.ngFadeOutDownBig) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutDownBig', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutLeft', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeOutLeft': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeoutleft-start animated fadeOutLeft'
          , goFx = function () {
            if ($scope.ngFadeOutLeft) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutLeft', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutLeftBig', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeOutLeftBig': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeoutleftbig-start animated fadeOutLeftBig'
          , goFx = function () {
            if ($scope.ngFadeOutLeftBig) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutLeftBig', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutRight', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeOutRight': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeoutright-start animated fadeOutRight'
          , goFx = function () {
            if ($scope.ngFadeOutRight) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutRight', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutRightBig', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeOutRightBig': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeoutrightbig-start animated fadeOutRightBig'
          , goFx = function () {
            if ($scope.ngFadeOutRightBig) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutRightBig', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutUp', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeOutUp': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeoutbig-start animated fadeOutUp'
          , goFx = function () {
            if ($scope.ngFadeOutUp) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutUp', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutUpBig', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFadeOutUpBig': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-fadeoutupbig-start animated fadeOutUpBig'
          , goFx = function () {
            if ($scope.ngFadeOutUpBig) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutUpBig', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFlip', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFlip': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-flip-start animated flip'
          , goFx = function () {
            if ($scope.ngFlip) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFlip', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFlipInX', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFlipInX': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-flipinx-start animated flipInX'
          , goFx = function () {
            if ($scope.ngFlipInX) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFlipInX', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFlipInY', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFlipInY': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-flipiny-start animated flipInY'
          , goFx = function () {
            if ($scope.ngFlipInY) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFlipInY', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFlipOutX', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFlipOutX': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-flipouty-start animated flipOutY'
          , goFx = function () {
            if ($scope.ngFlipOutX) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFlipOutX', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFlipOutY', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngFlipOutY': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-flipouty-start animated flipOutY'
          , goFx = function () {
            if ($scope.ngFlipOutY) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFlipOutY', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngLightSpeedIn', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngLightSpeedIn': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-lightspeedin-start animated lightSpeedIn'
          , goFx = function () {
            if ($scope.ngLightSpeedIn) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngLightSpeedIn', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngLightSpeedOut', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngLightSpeedOut': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-lightspeedout-start animated lightSpeedOut'
          , goFx = function () {
            if ($scope.ngLightSpeedOut) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngLightSpeedOut', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateIn', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRotateIn': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rotatein-start animated rotateIn'
          , goFx = function () {
            if ($scope.ngRotateIn) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateIn', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateInUpLeft', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRotateInUpLeft': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rotateinupleft-start animated rotateInUpLeft'
          , goFx = function () {
            if ($scope.ngRotateInUpLeft) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateInUpLeft', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateInUpRight', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRotateInUpRight': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rotateinupright-start animated rotateInUpRight'
          , goFx = function () {
            if ($scope.ngRotateInUpRight) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateInUpRight', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateInDownLeft', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRotateInDownLeft': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rotateindownleft-start animated rotateInDownLeft'
          , goFx = function () {
            if ($scope.ngRotateInDownLeft) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateInDownLeft', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateInDownRight', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRotateInDownRight': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rotateindownright-start animated rotateInDownRight'
          , goFx = function () {
            if ($scope.ngRotateInDownRight) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateInDownRight', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateOut', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRotateOut': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rotateout-start animated rotateOut'
          , goFx = function () {
            if ($scope.ngRotateOut) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateOut', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateOutUpLeft', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRotateOutUpLeft': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rotateoutupleft-start animated rotateOutUpLeft'
          , goFx = function () {
            if ($scope.ngRotateOutUpLeft) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateOutUpLeft', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateOutUpRight', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRotateOutUpRight': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rotateoutupright-start animated rotateOutUpRight'
          , goFx = function () {
            if ($scope.ngRotateOutUpRight) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateOutUpRight', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateOutDownLeft', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRotateOutDownLeft': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rotateoutdownleft-start animated rotateOutDownLeft'
          , goFx = function () {
            if ($scope.ngRotateOutDownLeft) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateOutDownLeft', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateOutDownRight', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRotateOutDownRight': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rotateoutdownright-start animated rotateOutDownRight'
          , goFx = function () {
            if ($scope.ngRotateOutDownRight) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateOutDownRight', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngHinge', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngHinge': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-hinge-start animated hinge'
          , goFx = function () {
            if ($scope.ngHinge) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngHinge', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRollIn', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRollIn': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rollin-start animated rollIn'
          , goFx = function () {
            if ($scope.ngRollIn) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRollIn', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRollOut', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngRollOut': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-rollout-start animated rollOut'
          , goFx = function () {
            if ($scope.ngRollOut) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRollOut', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomIn', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngZoomIn': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-zoomin-start animated zoomIn'
          , goFx = function () {
            if ($scope.ngZoomIn) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomIn', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomInDown', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngZoomInDown': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-zoomindown-start animated zoomInDown'
          , goFx = function () {
            if ($scope.ngZoomInDown) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomInDown', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomInLeft', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngZoomInLeft': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-zoominleft-start animated zoomInLeft'
          , goFx = function () {
            if ($scope.ngZoomInLeft) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomInLeft', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomInRight', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngZoomInRight': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-zoominright-start animated zoomInRight'
          , goFx = function () {
            if ($scope.ngZoomInRight) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomInRight', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomInUp', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngZoomInUp': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-zoominup-start animated zoomInUp'
          , goFx = function () {
            if ($scope.ngZoomInUp) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomInUp', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomOut', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngZoomOut': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-zoomout-start animated zoomOut'
          , goFx = function () {
            if ($scope.ngZoomOut) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomOut', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomOutDown', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngZoomOutDown': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-zoomoutdown-start animated zoomOutDown'
          , goFx = function () {
            if ($scope.ngZoomOutDown) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomOutDown', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomOutLeft', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngZoomOutLeft': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-zoomoutleft-start animated zoomOutLeft'
          , goFx = function () {
            if ($scope.ngZoomOutLeft) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomOutLeft', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomOutRight', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngZoomOutRight': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-zoomoutright-start animated zoomOutRight'
          , goFx = function () {
            if ($scope.ngZoomOutRight) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomOutRight', function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomOutUp', [function () {
    return {
      'restrict': 'A',
      'scope': {
        'ngZoomOutUp': '='
      },
      'link': function($scope, el) {

        var clss = 'ng-zoomoutup-start animated zoomOutUp'
          , goFx = function () {
            if ($scope.ngZoomOutUp) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomOutUp', function () {
          goFx();
        });
      }
    };
  }]);
}(angular));

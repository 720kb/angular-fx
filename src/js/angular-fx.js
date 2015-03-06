/*global angular*/

(function withAngular(angular) {
  'use strict';

  angular.module('720kb.fx', [])
  .directive('ngBounce', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-bounce-start animated bounce'
          , goFx = function () {

            if (scope.$eval(atr.ngBounce)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngBounce, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFlash', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-flash-start animated flash'
          , goFx = function () {
            if (scope.$eval(atr.ngFlash)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFlash, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngPulse', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-pulse-start animated pulse'
          , goFx = function () {
            if (scope.$eval(atr.ngPulse)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngPulse, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRubberband', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rubberband-start animated rubberBand'
          , goFx = function () {
            if (scope.$eval(atr.ngRubberband)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRubberband, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngShake', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-shake-start animated shake'
          , goFx = function () {
            if (scope.$eval(atr.ngShake)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngShake, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngSwing', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-swing-start animated swing'
          , goFx = function () {
            if (scope.$eval(atr.ngSwing)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngSwing, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngTada', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-tada-start animated tada'
          , goFx = function () {
            if (scope.$eval(atr.ngTada)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngTada, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngWobble', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-wobble-start animated wobble'
          , goFx = function () {
            if (scope.$eval(atr.ngWobble)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngWobble, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceIn', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-bouncein-start animated bounceIn'
          , goFx = function () {
            if (scope.$eval(atr.ngBounceIn)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngBounceIn, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceInDown', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-bounceindown-start animated bounceInDown'
          , goFx = function () {
            if (scope.$eval(atr.ngBounceInDown)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngBounceInDown, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceInLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-bounceinleft-start animated bounceInLeft'
          , goFx = function () {
            if (scope.$eval(atr.ngBounceInLeft)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngBounceInLeft, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceInRight', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-bounceinright-start animated bounceInRight'
          , goFx = function () {
            if (scope.$eval(atr.ngBounceInRight)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngBounceInRight, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceInUp', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-bounceinup-start animated bounceInUp'
          , goFx = function () {
            if (scope.$eval(atr.ngBounceInUp)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngBounceInUp, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceOut', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-bounceout-start animated bounceOut'
          , goFx = function () {
            if (scope.$eval(atr.ngBounceOut)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngBounceOut, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceOutDown', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-bounceoutdown-start animated bounceOutDown'
          , goFx = function () {
            if (scope.$eval(atr.ngBounceOutDown)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngBounceOutDown, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceOutLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-bounceoutleft-start animated bounceOutLeft'
          , goFx = function () {
            if (scope.$eval(atr.ngBounceOutLeft)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngBounceOutLeft, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceOutRight', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-bounceoutright-start animated bounceOutRight'
          , goFx = function () {
            if (scope.$eval(atr.ngBounceOutRight)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngBounceOutRight, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngBounceOutUp', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-bounceoutup-start animated bounceOutUp'
          , goFx = function () {
            if (scope.$eval(atr.ngBounceOutUp)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngBounceOutUp, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeIn', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadein-start animated fadeIn'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeIn)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeIn, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInDown', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeindown-start animated fadeInDown'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeInDown)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeInDown, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInDownBig', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeindownbig-start animated fadeInDownBig'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeInDownBig)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeInDownBig, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeinleft-start animated fadeInLeft'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeInLeft)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeInLeft, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInLeftBig', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeinleftbig-start animated fadeInLeftBig'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeInLeftBig)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeInLeftBig, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInRight', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeinright-start animated fadeInRight'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeInRight)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeInRight, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInRightBig', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeinrightbig-start animated fadeInRightBig'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeInRightBig)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeInRightBig, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInUp', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeinup-start animated fadeInUp'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeInUp)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeInUp, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeInUpBig', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeinupbig-start animated fadeInUpBig'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeInUpBig)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeInUpBig, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOut', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeout-start animated fadeOut'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeOut)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeOut, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutDown', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeoutdown-start animated fadeOutDown'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeOutDown)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeOutDown, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutDownBig', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeoutdownbig-start animated fadeOutDownBig'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeOutDownBig)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeOutDownBig, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeoutleft-start animated fadeOutLeft'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeOutLeft)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeOutLeft, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutLeftBig', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeoutleftbig-start animated fadeOutLeftBig'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeOutLeftBig)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeOutLeftBig, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutRight', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeoutright-start animated fadeOutRight'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeOutRight)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeOutRight, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutRightBig', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeoutrightbig-start animated fadeOutRightBig'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeOutRightBig)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeOutRightBig, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutUp', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeoutbig-start animated fadeOutUp'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeOutUp)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeOutUp, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFadeOutUpBig', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-fadeoutupbig-start animated fadeOutUpBig'
          , goFx = function () {
            if (scope.$eval(atr.ngFadeOutUpBig)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFadeOutUpBig, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFlip', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-flip-start animated flip'
          , goFx = function () {
            if (scope.$eval(atr.ngFlip)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFlip, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFlipInX', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-flipinx-start animated flipInX'
          , goFx = function () {
            if (scope.$eval(atr.ngFlipInX)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFlipInX, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFlipInY', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-flipiny-start animated flipInY'
          , goFx = function () {
            if (scope.$eval(atr.ngFlipInY)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFlipInY, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFlipOutX', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-flipouty-start animated flipOutY'
          , goFx = function () {
            if (scope.$eval(atr.ngFlipOutX)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFlipOutX, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngFlipOutY', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-flipouty-start animated flipOutY'
          , goFx = function () {
            if (scope.$eval(atr.ngFlipOutY)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngFlipOutY, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngLightSpeedIn', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-lightspeedin-start animated lightSpeedIn'
          , goFx = function () {
            if (scope.$eval(atr.ngLightSpeedIn)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngLightSpeedIn, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngLightSpeedOut', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-lightspeedout-start animated lightSpeedOut'
          , goFx = function () {
            if (scope.$eval(atr.ngLightSpeedOut)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngLightSpeedOut, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateIn', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rotatein-start animated rotateIn'
          , goFx = function () {
            if (scope.$eval(atr.ngRotateIn)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRotateIn, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateInUpLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rotateinupleft-start animated rotateInUpLeft'
          , goFx = function () {
            if (scope.$eval(atr.ngRotateInUpLeft)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRotateInUpLeft, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateInUpRight', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rotateinupright-start animated rotateInUpRight'
          , goFx = function () {
            if (scope.$eval(atr.ngRotateInUpRight)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRotateInUpRight, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateInDownLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rotateindownleft-start animated rotateInDownLeft'
          , goFx = function () {
            if (scope.$eval(atr.ngRotateInDownLeft)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRotateInDownLeft, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateInDownRight', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rotateindownright-start animated rotateInDownRight'
          , goFx = function () {
            if (scope.$eval(atr.ngRotateInDownRight)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRotateInDownRight, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateOut', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rotateout-start animated rotateOut'
          , goFx = function () {
            if (scope.$eval(atr.ngRotateOut)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRotateOut, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateOutUpLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rotateoutupleft-start animated rotateOutUpLeft'
          , goFx = function () {
            if (scope.$eval(atr.ngRotateOutUpLeft)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRotateOutUpLeft, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateOutUpRight', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rotateoutupright-start animated rotateOutUpRight'
          , goFx = function () {
            if (scope.$eval(atr.ngRotateOutUpRight)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRotateOutUpRight, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateOutDownLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rotateoutdownleft-start animated rotateOutDownLeft'
          , goFx = function () {
            if (scope.$eval(atr.ngRotateOutDownLeft)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRotateOutDownLeft, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRotateOutDownRight', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rotateoutdownright-start animated rotateOutDownRight'
          , goFx = function () {
            if (scope.$eval(atr.ngRotateOutDownRight)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRotateOutDownRight, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngHinge', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-hinge-start animated hinge'
          , goFx = function () {
            if (scope.$eval(atr.ngHinge)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngHinge, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRollIn', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rollin-start animated rollIn'
          , goFx = function () {
            if (scope.$eval(atr.ngRollIn)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRollIn, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngRollOut', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-rollout-start animated rollOut'
          , goFx = function () {
            if (scope.$eval(atr.ngRollOut)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngRollOut, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomIn', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-zoomin-start animated zoomIn'
          , goFx = function () {
            if (scope.$eval(atr.ngZoomIn)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngZoomIn, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomInDown', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-zoomindown-start animated zoomInDown'
          , goFx = function () {
            if (scope.$eval(atr.ngZoomInDown)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngZoomInDown, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomInLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-zoominleft-start animated zoomInLeft'
          , goFx = function () {
            if (scope.$eval(atr.ngZoomInLeft)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngZoomInLeft, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomInRight', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-zoominright-start animated zoomInRight'
          , goFx = function () {
            if (scope.$eval(atr.ngZoomInRight)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngZoomInRight, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomInUp', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-zoominup-start animated zoomInUp'
          , goFx = function () {
            if (scope.$eval(atr.ngZoomInUp)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngZoomInUp, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomOut', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-zoomout-start animated zoomOut'
          , goFx = function () {
            if (scope.$eval(atr.ngZoomOut)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngZoomOut, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomOutDown', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-zoomoutdown-start animated zoomOutDown'
          , goFx = function () {
            if (scope.$eval(atr.ngZoomOutDown)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngZoomOutDown, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomOutLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-zoomoutleft-start animated zoomOutLeft'
          , goFx = function () {
            if (scope.$eval(atr.ngZoomOutLeft)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngZoomOutLeft, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomOutRight', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-zoomoutright-start animated zoomOutRight'
          , goFx = function () {
            if (scope.$eval(atr.ngZoomOutRight)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngZoomOutRight, function () {
          goFx();
        });
      }
    };
  }])
  .directive('ngZoomOutUp', [function () {
    return {
      'restrict': 'A',
      'link': function (scope, el, atr) {

        var clss = 'ng-zoomoutup-start animated zoomOutUp'
          , goFx = function () {
            if (scope.$eval(atr.ngZoomOutUp)) {

              el.removeClass('animated').addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        scope.$watch(atr.ngZoomOutUp, function () {
          goFx();
        });
      }
    };
  }]);
}(angular));

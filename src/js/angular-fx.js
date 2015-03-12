/*global angular*/
(function withAngularFx(angular) {
  'use strict';

  angular.module('720kb.fx', [])
  .directive('ngfxBounce', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-bounce-start animated bounce'
          , fx = function fxFunction() {

            if (scope.$eval(attributes.ngfxBounce)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxBounce, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFlash', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-flash-start animated flash'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFlash)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFlash, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxPulse', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-pulse-start animated pulse'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxPulse)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxPulse, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRubberband', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rubberband-start animated rubberBand'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRubberband)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRubberband, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxShake', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-shake-start animated shake'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxShake)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxShake, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxSwing', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-swing-start animated swing'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxSwing)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxSwing, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxTada', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-tada-start animated tada'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxTada)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxTada, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxWobble', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-wobble-start animated wobble'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxWobble)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxWobble, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceIn', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-bouncein-start animated bounceIn'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxBounceIn)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxBounceIn, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceInDown', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-bounceindown-start animated bounceInDown'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxBounceInDown)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxBounceInDown, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceInLeft', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-bounceinleft-start animated bounceInLeft'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxBounceInLeft)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxBounceInLeft, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceInRight', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-bounceinright-start animated bounceInRight'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxBounceInRight)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxBounceInRight, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceInUp', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-bounceinup-start animated bounceInUp'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxBounceInUp)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxBounceInUp, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceOut', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-bounceout-start animated bounceOut'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxBounceOut)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxBounceOut, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceOutDown', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-bounceoutdown-start animated bounceOutDown'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxBounceOutDown)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxBounceOutDown, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceOutLeft', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-bounceoutleft-start animated bounceOutLeft'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxBounceOutLeft)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxBounceOutLeft, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceOutRight', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-bounceoutright-start animated bounceOutRight'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxBounceOutRight)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxBounceOutRight, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceOutUp', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-bounceoutup-start animated bounceOutUp'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxBounceOutUp)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxBounceOutUp, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeIn', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadein-start animated fadeIn'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeIn)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeIn, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInDown', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeindown-start animated fadeInDown'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeInDown)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeInDown, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInDownBig', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeindownbig-start animated fadeInDownBig'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeInDownBig)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeInDownBig, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInLeft', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeinleft-start animated fadeInLeft'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeInLeft)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeInLeft, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInLeftBig', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeinleftbig-start animated fadeInLeftBig'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeInLeftBig)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeInLeftBig, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInRight', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeinright-start animated fadeInRight'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeInRight)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeInRight, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInRightBig', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeinrightbig-start animated fadeInRightBig'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeInRightBig)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeInRightBig, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInUp', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeinup-start animated fadeInUp'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeInUp)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeInUp, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInUpBig', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeinupbig-start animated fadeInUpBig'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeInUpBig)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeInUpBig, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOut', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeout-start animated fadeOut'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeOut)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeOut, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutDown', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeoutdown-start animated fadeOutDown'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeOutDown)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeOutDown, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutDownBig', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeoutdownbig-start animated fadeOutDownBig'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeOutDownBig)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeOutDownBig, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutLeft', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeoutleft-start animated fadeOutLeft'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeOutLeft)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeOutLeft, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutLeftBig', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeoutleftbig-start animated fadeOutLeftBig'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeOutLeftBig)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeOutLeftBig, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutRight', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeoutright-start animated fadeOutRight'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeOutRight)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeOutRight, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutRightBig', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeoutrightbig-start animated fadeOutRightBig'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeOutRightBig)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeOutRightBig, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutUp', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeoutbig-start animated fadeOutUp'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeOutUp)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeOutUp, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutUpBig', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-fadeoutupbig-start animated fadeOutUpBig'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFadeOutUpBig)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFadeOutUpBig, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFlip', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-flip-start animated flip'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFlip)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFlip, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFlipInX', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-flipinx-start animated flipInX'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFlipInX)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFlipInX, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFlipInY', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-flipiny-start animated flipInY'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFlipInY)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFlipInY, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFlipOutX', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-flipouty-start animated flipOutY'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFlipOutX)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFlipOutX, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFlipOutY', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-flipouty-start animated flipOutY'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxFlipOutY)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxFlipOutY, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxLightSpeedIn', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-lightspeedin-start animated lightSpeedIn'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxLightSpeedIn)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxLightSpeedIn, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxLightSpeedOut', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-lightspeedout-start animated lightSpeedOut'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxLightSpeedOut)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxLightSpeedOut, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateIn', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rotatein-start animated rotateIn'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRotateIn)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRotateIn, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateInUpLeft', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rotateinupleft-start animated rotateInUpLeft'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRotateInUpLeft)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRotateInUpLeft, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateInUpRight', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rotateinupright-start animated rotateInUpRight'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRotateInUpRight)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRotateInUpRight, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateInDownLeft', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rotateindownleft-start animated rotateInDownLeft'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRotateInDownLeft)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRotateInDownLeft, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateInDownRight', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rotateindownright-start animated rotateInDownRight'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRotateInDownRight)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRotateInDownRight, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateOut', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rotateout-start animated rotateOut'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRotateOut)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRotateOut, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateOutUpLeft', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rotateoutupleft-start animated rotateOutUpLeft'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRotateOutUpLeft)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRotateOutUpLeft, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateOutUpRight', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rotateoutupright-start animated rotateOutUpRight'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRotateOutUpRight)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRotateOutUpRight, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateOutDownLeft', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rotateoutdownleft-start animated rotateOutDownLeft'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRotateOutDownLeft)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRotateOutDownLeft, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateOutDownRight', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rotateoutdownright-start animated rotateOutDownRight'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRotateOutDownRight)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRotateOutDownRight, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxHinge', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-hinge-start animated hinge'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxHinge)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxHinge, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRollIn', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rollin-start animated rollIn'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRollIn)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRollIn, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRollOut', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-rollout-start animated rollOut'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxRollOut)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxRollOut, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomIn', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-zoomin-start animated zoomIn'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxZoomIn)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxZoomIn, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomInDown', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-zoomindown-start animated zoomInDown'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxZoomInDown)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxZoomInDown, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomInLeft', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-zoominleft-start animated zoomInLeft'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxZoomInLeft)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxZoomInLeft, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomInRight', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-zoominright-start animated zoomInRight'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxZoomInRight)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxZoomInRight, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomInUp', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-zoominup-start animated zoomInUp'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxZoomInUp)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxZoomInUp, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomOut', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-zoomout-start animated zoomOut'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxZoomOut)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxZoomOut, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomOutDown', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-zoomoutdown-start animated zoomOutDown'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxZoomOutDown)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxZoomOutDown, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomOutLeft', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-zoomoutleft-start animated zoomOutLeft'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxZoomOutLeft)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxZoomOutLeft, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomOutRight', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-zoomoutright-start animated zoomOutRight'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxZoomOutRight)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxZoomOutRight, function watctherFunction() {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomOutUp', [function directiveFunction() {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, element, attributes) {

        var c = 'ngfx-zoomoutup-start animated zoomOutUp'
          , fx = function fxFunction() {
            if (scope.$eval(attributes.ngfxZoomOutUp)) {

              element.removeClass('animated').addClass(c);
            } else {
              element.removeClass(c);
            }
          };

        scope.$watch(attributes.ngfxZoomOutUp, function watctherFunction() {
          fx();
        });
      }
    };
  }]);
}(angular));

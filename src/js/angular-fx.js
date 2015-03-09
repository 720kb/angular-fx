/*global angular*/

(function withAngular(angular) {
  'use strict';

  angular.module('720kb.fx', [])
  .directive('ngBounce', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-bounce-start animated bounce'
          , fx = function () {

            if (s.$eval(a.ngBounce)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngBounce, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFlash', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-flash-start animated flash'
          , fx = function () {
            if (s.$eval(a.ngFlash)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFlash, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngPulse', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-pulse-start animated pulse'
          , fx = function () {
            if (s.$eval(a.ngPulse)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngPulse, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRubberband', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rubberband-start animated rubberBand'
          , fx = function () {
            if (s.$eval(a.ngRubberband)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRubberband, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngShake', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-shake-start animated shake'
          , fx = function () {
            if (s.$eval(a.ngShake)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngShake, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngSwing', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-swing-start animated swing'
          , fx = function () {
            if (s.$eval(a.ngSwing)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngSwing, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngTada', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-tada-start animated tada'
          , fx = function () {
            if (s.$eval(a.ngTada)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngTada, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngWobble', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-wobble-start animated wobble'
          , fx = function () {
            if (s.$eval(a.ngWobble)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngWobble, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngBounceIn', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-bouncein-start animated bounceIn'
          , fx = function () {
            if (s.$eval(a.ngBounceIn)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngBounceIn, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngBounceInDown', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-bounceindown-start animated bounceInDown'
          , fx = function () {
            if (s.$eval(a.ngBounceInDown)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngBounceInDown, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngBounceInLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-bounceinleft-start animated bounceInLeft'
          , fx = function () {
            if (s.$eval(a.ngBounceInLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngBounceInLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngBounceInRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-bounceinright-start animated bounceInRight'
          , fx = function () {
            if (s.$eval(a.ngBounceInRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngBounceInRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngBounceInUp', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-bounceinup-start animated bounceInUp'
          , fx = function () {
            if (s.$eval(a.ngBounceInUp)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngBounceInUp, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngBounceOut', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-bounceout-start animated bounceOut'
          , fx = function () {
            if (s.$eval(a.ngBounceOut)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngBounceOut, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngBounceOutDown', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-bounceoutdown-start animated bounceOutDown'
          , fx = function () {
            if (s.$eval(a.ngBounceOutDown)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngBounceOutDown, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngBounceOutLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-bounceoutleft-start animated bounceOutLeft'
          , fx = function () {
            if (s.$eval(a.ngBounceOutLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngBounceOutLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngBounceOutRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-bounceoutright-start animated bounceOutRight'
          , fx = function () {
            if (s.$eval(a.ngBounceOutRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngBounceOutRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngBounceOutUp', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-bounceoutup-start animated bounceOutUp'
          , fx = function () {
            if (s.$eval(a.ngBounceOutUp)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngBounceOutUp, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeIn', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadein-start animated fadeIn'
          , fx = function () {
            if (s.$eval(a.ngFadeIn)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeIn, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeInDown', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeindown-start animated fadeInDown'
          , fx = function () {
            if (s.$eval(a.ngFadeInDown)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeInDown, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeInDownBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeindownbig-start animated fadeInDownBig'
          , fx = function () {
            if (s.$eval(a.ngFadeInDownBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeInDownBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeInLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeinleft-start animated fadeInLeft'
          , fx = function () {
            if (s.$eval(a.ngFadeInLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeInLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeInLeftBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeinleftbig-start animated fadeInLeftBig'
          , fx = function () {
            if (s.$eval(a.ngFadeInLeftBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeInLeftBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeInRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeinright-start animated fadeInRight'
          , fx = function () {
            if (s.$eval(a.ngFadeInRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeInRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeInRightBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeinrightbig-start animated fadeInRightBig'
          , fx = function () {
            if (s.$eval(a.ngFadeInRightBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeInRightBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeInUp', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeinup-start animated fadeInUp'
          , fx = function () {
            if (s.$eval(a.ngFadeInUp)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeInUp, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeInUpBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeinupbig-start animated fadeInUpBig'
          , fx = function () {
            if (s.$eval(a.ngFadeInUpBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeInUpBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeOut', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeout-start animated fadeOut'
          , fx = function () {
            if (s.$eval(a.ngFadeOut)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeOut, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeOutDown', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeoutdown-start animated fadeOutDown'
          , fx = function () {
            if (s.$eval(a.ngFadeOutDown)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeOutDown, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeOutDownBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeoutdownbig-start animated fadeOutDownBig'
          , fx = function () {
            if (s.$eval(a.ngFadeOutDownBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeOutDownBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeOutLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeoutleft-start animated fadeOutLeft'
          , fx = function () {
            if (s.$eval(a.ngFadeOutLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeOutLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeOutLeftBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeoutleftbig-start animated fadeOutLeftBig'
          , fx = function () {
            if (s.$eval(a.ngFadeOutLeftBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeOutLeftBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeOutRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeoutright-start animated fadeOutRight'
          , fx = function () {
            if (s.$eval(a.ngFadeOutRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeOutRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeOutRightBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeoutrightbig-start animated fadeOutRightBig'
          , fx = function () {
            if (s.$eval(a.ngFadeOutRightBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeOutRightBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeOutUp', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeoutbig-start animated fadeOutUp'
          , fx = function () {
            if (s.$eval(a.ngFadeOutUp)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeOutUp, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFadeOutUpBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-fadeoutupbig-start animated fadeOutUpBig'
          , fx = function () {
            if (s.$eval(a.ngFadeOutUpBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFadeOutUpBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFlip', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-flip-start animated flip'
          , fx = function () {
            if (s.$eval(a.ngFlip)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFlip, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFlipInX', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-flipinx-start animated flipInX'
          , fx = function () {
            if (s.$eval(a.ngFlipInX)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFlipInX, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFlipInY', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-flipiny-start animated flipInY'
          , fx = function () {
            if (s.$eval(a.ngFlipInY)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFlipInY, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFlipOutX', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-flipouty-start animated flipOutY'
          , fx = function () {
            if (s.$eval(a.ngFlipOutX)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFlipOutX, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngFlipOutY', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-flipouty-start animated flipOutY'
          , fx = function () {
            if (s.$eval(a.ngFlipOutY)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngFlipOutY, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngLightSpeedIn', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-lightspeedin-start animated lightSpeedIn'
          , fx = function () {
            if (s.$eval(a.ngLightSpeedIn)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngLightSpeedIn, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngLightSpeedOut', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-lightspeedout-start animated lightSpeedOut'
          , fx = function () {
            if (s.$eval(a.ngLightSpeedOut)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngLightSpeedOut, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRotateIn', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rotatein-start animated rotateIn'
          , fx = function () {
            if (s.$eval(a.ngRotateIn)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRotateIn, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRotateInUpLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rotateinupleft-start animated rotateInUpLeft'
          , fx = function () {
            if (s.$eval(a.ngRotateInUpLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRotateInUpLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRotateInUpRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rotateinupright-start animated rotateInUpRight'
          , fx = function () {
            if (s.$eval(a.ngRotateInUpRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRotateInUpRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRotateInDownLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rotateindownleft-start animated rotateInDownLeft'
          , fx = function () {
            if (s.$eval(a.ngRotateInDownLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRotateInDownLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRotateInDownRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rotateindownright-start animated rotateInDownRight'
          , fx = function () {
            if (s.$eval(a.ngRotateInDownRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRotateInDownRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRotateOut', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rotateout-start animated rotateOut'
          , fx = function () {
            if (s.$eval(a.ngRotateOut)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRotateOut, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRotateOutUpLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rotateoutupleft-start animated rotateOutUpLeft'
          , fx = function () {
            if (s.$eval(a.ngRotateOutUpLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRotateOutUpLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRotateOutUpRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rotateoutupright-start animated rotateOutUpRight'
          , fx = function () {
            if (s.$eval(a.ngRotateOutUpRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRotateOutUpRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRotateOutDownLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rotateoutdownleft-start animated rotateOutDownLeft'
          , fx = function () {
            if (s.$eval(a.ngRotateOutDownLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRotateOutDownLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRotateOutDownRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rotateoutdownright-start animated rotateOutDownRight'
          , fx = function () {
            if (s.$eval(a.ngRotateOutDownRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRotateOutDownRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngHinge', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-hinge-start animated hinge'
          , fx = function () {
            if (s.$eval(a.ngHinge)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngHinge, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRollIn', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rollin-start animated rollIn'
          , fx = function () {
            if (s.$eval(a.ngRollIn)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRollIn, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngRollOut', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-rollout-start animated rollOut'
          , fx = function () {
            if (s.$eval(a.ngRollOut)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngRollOut, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngZoomIn', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-zoomin-start animated zoomIn'
          , fx = function () {
            if (s.$eval(a.ngZoomIn)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngZoomIn, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngZoomInDown', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-zoomindown-start animated zoomInDown'
          , fx = function () {
            if (s.$eval(a.ngZoomInDown)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngZoomInDown, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngZoomInLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-zoominleft-start animated zoomInLeft'
          , fx = function () {
            if (s.$eval(a.ngZoomInLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngZoomInLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngZoomInRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-zoominright-start animated zoomInRight'
          , fx = function () {
            if (s.$eval(a.ngZoomInRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngZoomInRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngZoomInUp', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-zoominup-start animated zoomInUp'
          , fx = function () {
            if (s.$eval(a.ngZoomInUp)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngZoomInUp, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngZoomOut', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-zoomout-start animated zoomOut'
          , fx = function () {
            if (s.$eval(a.ngZoomOut)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngZoomOut, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngZoomOutDown', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-zoomoutdown-start animated zoomOutDown'
          , fx = function () {
            if (s.$eval(a.ngZoomOutDown)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngZoomOutDown, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngZoomOutLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-zoomoutleft-start animated zoomOutLeft'
          , fx = function () {
            if (s.$eval(a.ngZoomOutLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngZoomOutLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngZoomOutRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-zoomoutright-start animated zoomOutRight'
          , fx = function () {
            if (s.$eval(a.ngZoomOutRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngZoomOutRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngZoomOutUp', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ng-zoomoutup-start animated zoomOutUp'
          , fx = function () {
            if (s.$eval(a.ngZoomOutUp)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngZoomOutUp, function () {
          fx();
        });
      }
    };
  }]);
}(angular));

/*global angular*/

(function withAngfxular(angular) {
  'use strict';

  angular.module('720kb.fx', [])
  .directive('ngfxBounce', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-bounce-start animated bounce'
          , fx = function () {

            if (s.$eval(a.ngfxBounce)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxBounce, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFlash', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-flash-start animated flash'
          , fx = function () {
            if (s.$eval(a.ngfxFlash)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFlash, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxPulse', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-pulse-start animated pulse'
          , fx = function () {
            if (s.$eval(a.ngfxPulse)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxPulse, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRubberband', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rubberband-start animated rubberBand'
          , fx = function () {
            if (s.$eval(a.ngfxRubberband)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRubberband, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxShake', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-shake-start animated shake'
          , fx = function () {
            if (s.$eval(a.ngfxShake)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxShake, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxSwing', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-swing-start animated swing'
          , fx = function () {
            if (s.$eval(a.ngfxSwing)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxSwing, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxTada', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-tada-start animated tada'
          , fx = function () {
            if (s.$eval(a.ngfxTada)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxTada, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxWobble', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-wobble-start animated wobble'
          , fx = function () {
            if (s.$eval(a.ngfxWobble)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxWobble, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceIn', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-bouncein-start animated bounceIn'
          , fx = function () {
            if (s.$eval(a.ngfxBounceIn)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxBounceIn, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceInDown', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-bounceindown-start animated bounceInDown'
          , fx = function () {
            if (s.$eval(a.ngfxBounceInDown)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxBounceInDown, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceInLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-bounceinleft-start animated bounceInLeft'
          , fx = function () {
            if (s.$eval(a.ngfxBounceInLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxBounceInLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceInRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-bounceinright-start animated bounceInRight'
          , fx = function () {
            if (s.$eval(a.ngfxBounceInRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxBounceInRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceInUp', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-bounceinup-start animated bounceInUp'
          , fx = function () {
            if (s.$eval(a.ngfxBounceInUp)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxBounceInUp, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceOut', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-bounceout-start animated bounceOut'
          , fx = function () {
            if (s.$eval(a.ngfxBounceOut)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxBounceOut, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceOutDown', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-bounceoutdown-start animated bounceOutDown'
          , fx = function () {
            if (s.$eval(a.ngfxBounceOutDown)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxBounceOutDown, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceOutLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-bounceoutleft-start animated bounceOutLeft'
          , fx = function () {
            if (s.$eval(a.ngfxBounceOutLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxBounceOutLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceOutRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-bounceoutright-start animated bounceOutRight'
          , fx = function () {
            if (s.$eval(a.ngfxBounceOutRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxBounceOutRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxBounceOutUp', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-bounceoutup-start animated bounceOutUp'
          , fx = function () {
            if (s.$eval(a.ngfxBounceOutUp)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxBounceOutUp, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeIn', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadein-start animated fadeIn'
          , fx = function () {
            if (s.$eval(a.ngfxFadeIn)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeIn, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInDown', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeindown-start animated fadeInDown'
          , fx = function () {
            if (s.$eval(a.ngfxFadeInDown)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeInDown, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInDownBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeindownbig-start animated fadeInDownBig'
          , fx = function () {
            if (s.$eval(a.ngfxFadeInDownBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeInDownBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeinleft-start animated fadeInLeft'
          , fx = function () {
            if (s.$eval(a.ngfxFadeInLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeInLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInLeftBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeinleftbig-start animated fadeInLeftBig'
          , fx = function () {
            if (s.$eval(a.ngfxFadeInLeftBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeInLeftBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeinright-start animated fadeInRight'
          , fx = function () {
            if (s.$eval(a.ngfxFadeInRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeInRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInRightBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeinrightbig-start animated fadeInRightBig'
          , fx = function () {
            if (s.$eval(a.ngfxFadeInRightBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeInRightBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInUp', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeinup-start animated fadeInUp'
          , fx = function () {
            if (s.$eval(a.ngfxFadeInUp)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeInUp, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeInUpBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeinupbig-start animated fadeInUpBig'
          , fx = function () {
            if (s.$eval(a.ngfxFadeInUpBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeInUpBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOut', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeout-start animated fadeOut'
          , fx = function () {
            if (s.$eval(a.ngfxFadeOut)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeOut, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutDown', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeoutdown-start animated fadeOutDown'
          , fx = function () {
            if (s.$eval(a.ngfxFadeOutDown)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeOutDown, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutDownBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeoutdownbig-start animated fadeOutDownBig'
          , fx = function () {
            if (s.$eval(a.ngfxFadeOutDownBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeOutDownBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeoutleft-start animated fadeOutLeft'
          , fx = function () {
            if (s.$eval(a.ngfxFadeOutLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeOutLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutLeftBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeoutleftbig-start animated fadeOutLeftBig'
          , fx = function () {
            if (s.$eval(a.ngfxFadeOutLeftBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeOutLeftBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeoutright-start animated fadeOutRight'
          , fx = function () {
            if (s.$eval(a.ngfxFadeOutRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeOutRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutRightBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeoutrightbig-start animated fadeOutRightBig'
          , fx = function () {
            if (s.$eval(a.ngfxFadeOutRightBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeOutRightBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutUp', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeoutbig-start animated fadeOutUp'
          , fx = function () {
            if (s.$eval(a.ngfxFadeOutUp)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeOutUp, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFadeOutUpBig', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-fadeoutupbig-start animated fadeOutUpBig'
          , fx = function () {
            if (s.$eval(a.ngfxFadeOutUpBig)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFadeOutUpBig, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFlip', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-flip-start animated flip'
          , fx = function () {
            if (s.$eval(a.ngfxFlip)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFlip, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFlipInX', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-flipinx-start animated flipInX'
          , fx = function () {
            if (s.$eval(a.ngfxFlipInX)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFlipInX, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFlipInY', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-flipiny-start animated flipInY'
          , fx = function () {
            if (s.$eval(a.ngfxFlipInY)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFlipInY, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFlipOutX', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-flipouty-start animated flipOutY'
          , fx = function () {
            if (s.$eval(a.ngfxFlipOutX)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFlipOutX, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxFlipOutY', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-flipouty-start animated flipOutY'
          , fx = function () {
            if (s.$eval(a.ngfxFlipOutY)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxFlipOutY, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxLightSpeedIn', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-lightspeedin-start animated lightSpeedIn'
          , fx = function () {
            if (s.$eval(a.ngfxLightSpeedIn)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxLightSpeedIn, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxLightSpeedOut', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-lightspeedout-start animated lightSpeedOut'
          , fx = function () {
            if (s.$eval(a.ngfxLightSpeedOut)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxLightSpeedOut, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateIn', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rotatein-start animated rotateIn'
          , fx = function () {
            if (s.$eval(a.ngfxRotateIn)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRotateIn, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateInUpLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rotateinupleft-start animated rotateInUpLeft'
          , fx = function () {
            if (s.$eval(a.ngfxRotateInUpLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRotateInUpLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateInUpRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rotateinupright-start animated rotateInUpRight'
          , fx = function () {
            if (s.$eval(a.ngfxRotateInUpRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRotateInUpRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateInDownLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rotateindownleft-start animated rotateInDownLeft'
          , fx = function () {
            if (s.$eval(a.ngfxRotateInDownLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRotateInDownLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateInDownRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rotateindownright-start animated rotateInDownRight'
          , fx = function () {
            if (s.$eval(a.ngfxRotateInDownRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRotateInDownRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateOut', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rotateout-start animated rotateOut'
          , fx = function () {
            if (s.$eval(a.ngfxRotateOut)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRotateOut, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateOutUpLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rotateoutupleft-start animated rotateOutUpLeft'
          , fx = function () {
            if (s.$eval(a.ngfxRotateOutUpLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRotateOutUpLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateOutUpRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rotateoutupright-start animated rotateOutUpRight'
          , fx = function () {
            if (s.$eval(a.ngfxRotateOutUpRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRotateOutUpRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateOutDownLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rotateoutdownleft-start animated rotateOutDownLeft'
          , fx = function () {
            if (s.$eval(a.ngfxRotateOutDownLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRotateOutDownLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRotateOutDownRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rotateoutdownright-start animated rotateOutDownRight'
          , fx = function () {
            if (s.$eval(a.ngfxRotateOutDownRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRotateOutDownRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxHinge', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-hinge-start animated hinge'
          , fx = function () {
            if (s.$eval(a.ngfxHinge)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxHinge, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRollIn', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rollin-start animated rollIn'
          , fx = function () {
            if (s.$eval(a.ngfxRollIn)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRollIn, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxRollOut', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-rollout-start animated rollOut'
          , fx = function () {
            if (s.$eval(a.ngfxRollOut)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxRollOut, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomIn', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-zoomin-start animated zoomIn'
          , fx = function () {
            if (s.$eval(a.ngfxZoomIn)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxZoomIn, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomInDown', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-zoomindown-start animated zoomInDown'
          , fx = function () {
            if (s.$eval(a.ngfxZoomInDown)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxZoomInDown, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomInLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-zoominleft-start animated zoomInLeft'
          , fx = function () {
            if (s.$eval(a.ngfxZoomInLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxZoomInLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomInRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-zoominright-start animated zoomInRight'
          , fx = function () {
            if (s.$eval(a.ngfxZoomInRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxZoomInRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomInUp', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-zoominup-start animated zoomInUp'
          , fx = function () {
            if (s.$eval(a.ngfxZoomInUp)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxZoomInUp, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomOut', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-zoomout-start animated zoomOut'
          , fx = function () {
            if (s.$eval(a.ngfxZoomOut)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxZoomOut, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomOutDown', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-zoomoutdown-start animated zoomOutDown'
          , fx = function () {
            if (s.$eval(a.ngfxZoomOutDown)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxZoomOutDown, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomOutLeft', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-zoomoutleft-start animated zoomOutLeft'
          , fx = function () {
            if (s.$eval(a.ngfxZoomOutLeft)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxZoomOutLeft, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomOutRight', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-zoomoutright-start animated zoomOutRight'
          , fx = function () {
            if (s.$eval(a.ngfxZoomOutRight)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxZoomOutRight, function () {
          fx();
        });
      }
    };
  }])
  .directive('ngfxZoomOutUp', [function () {
    return {
      'restrict': 'A',
      'link': function (s, e, a) {

        var c = 'ngfx-zoomoutup-start animated zoomOutUp'
          , fx = function () {
            if (s.$eval(a.ngfxZoomOutUp)) {

              e.removeClass('animated').addClass(c);
            } else {
              e.removeClass(c);
            }
          };

        s.$watch(a.ngfxZoomOutUp, function () {
          fx();
        });
      }
    };
  }]);
}(angular));

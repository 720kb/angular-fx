/*global angular*/

(function withAngular(angular) {
  'use strict';

  angular.module('720kb.fx', [])
  .directive('ngBounce', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-bounce-start animated bounce'
          , goFx = function () {
            if ($parse(atr.ngBounce)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngBounce', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFlash', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-flash-start animated flash'
          , goFx = function () {
            if ($parse(atr.ngFlash)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFlash', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngPulse', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-pulse-start animated pulse'
          , goFx = function () {
            if ($parse(atr.ngPulse)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngPulse', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRubberband', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rubberband-start animated rubberBand'
          , goFx = function () {
            if ($parse(atr.ngRubberband)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRubberband', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngShake', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-shake-start animated shake'
          , goFx = function () {
            if ($parse(atr.ngShake)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngShake', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngSwing', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-swing-start animated swing'
          , goFx = function () {
            if ($parse(atr.ngSwing)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngSwing', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngTada', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-tada-start animated tada'
          , goFx = function () {
            if ($parse(atr.ngTada)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngTada', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngWobble', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-wobble-start animated wobble'
          , goFx = function () {
            if ($parse(atr.ngWobble)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngWobble', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngBounceIn', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-bouncein-start animated bounceIn'
          , goFx = function () {
            if ($parse(atr.ngBounceIn)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngBounceIn', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngBounceInDown', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceindown-start animated bounceInDown'
          , goFx = function () {
            if ($parse(atr.ngBounceInDown)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngBounceInDown', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngBounceInLeft', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceinleft-start animated bounceInLeft'
          , goFx = function () {
            if ($parse(atr.ngBounceInLeft)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngBounceInLeft', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngBounceInRight', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceinright-start animated bounceInRight'
          , goFx = function () {
            if ($parse(atr.ngBounceInRight)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngBounceInRight', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngBounceInUp', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceinup-start animated bounceInUp'
          , goFx = function () {
            if ($parse(atr.ngBounceInUp)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngBounceInUp', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngBounceOut', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceout-start animated bounceOut'
          , goFx = function () {
            if ($parse(atr.ngBounceOut)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngBounceOut', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngBounceOutDown', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceoutdown-start animated bounceOutDown'
          , goFx = function () {
            if ($parse(atr.ngBounceOutDown)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngBounceOutDown', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngBounceOutLeft', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceoutleft-start animated bounceOutLeft'
          , goFx = function () {
            if ($parse(atr.ngBounceOutLeft)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngBounceOutLeft', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngBounceOutRight', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceoutright-start animated bounceOutRight'
          , goFx = function () {
            if ($parse(atr.ngBounceOutRight)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngBounceOutRight', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngBounceOutUp', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceoutup-start animated bounceOutUp'
          , goFx = function () {
            if ($parse(atr.ngBounceOutUp)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngBounceOutUp', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeIn', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadein-start animated fadeIn'
          , goFx = function () {
            if ($parse(atr.ngFadeIn)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeIn', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeInDown', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeindown-start animated fadeInDown'
          , goFx = function () {
            if ($parse(atr.ngFadeInDown)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeInDown', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeInDownBig', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeindownbig-start animated fadeInDownBig'
          , goFx = function () {
            if ($parse(atr.ngFadeInDownBig)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeInDownBig', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeInLeft', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeinleft-start animated fadeInLeft'
          , goFx = function () {
            if ($parse(atr.ngFadeInLeft)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeInLeft', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeInLeftBig', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeinleftbig-start animated fadeInLeftBig'
          , goFx = function () {
            if ($parse(atr.ngFadeInLeftBig)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeInLeftBig', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeInRight', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeinright-start animated fadeInRight'
          , goFx = function () {
            if ($parse(atr.ngFadeInRight)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeInRight', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeInRightBig', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeinrightbig-start animated fadeInRightBig'
          , goFx = function () {
            if ($parse(atr.ngFadeInRightBig)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeInRightBig', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeInUp', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeinup-start animated fadeInUp'
          , goFx = function () {
            if ($parse(atr.ngFadeInUp)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeInUp', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeInUpBig', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeinupbig-start animated fadeInUpBig'
          , goFx = function () {
            if ($parse(atr.ngFadeInUpBig)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeInUpBig', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeOut', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeout-start animated fadeOut'
          , goFx = function () {
            if ($parse(atr.ngFadeOut)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeOut', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeOutDown', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutdown-start animated fadeOutDown'
          , goFx = function () {
            if ($parse(atr.ngFadeOutDown)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeOutDown', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeOutDownBig', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutdownbig-start animated fadeOutDownBig'
          , goFx = function () {
            if ($parse(atr.ngFadeOutDownBig)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeOutDownBig', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeOutLeft', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutleft-start animated fadeOutLeft'
          , goFx = function () {
            if ($parse(atr.ngFadeOutLeft)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeOutLeft', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeOutLeftBig', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutleftbig-start animated fadeOutLeftBig'
          , goFx = function () {
            if ($parse(atr.ngFadeOutLeftBig)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeOutLeftBig', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeOutRight', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutright-start animated fadeOutRight'
          , goFx = function () {
            if ($parse(atr.ngFadeOutRight)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeOutRight', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeOutRightBig', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutrightbig-start animated fadeOutRightBig'
          , goFx = function () {
            if ($parse(atr.ngFadeOutRightBig)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeOutRightBig', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeOutUp', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutbig-start animated fadeOutBig'
          , goFx = function () {
            if ($parse(atr.ngFadeOutUp)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeOutUp', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFadeOutUpBig', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutupbig-start animated fadeOutUpBig'
          , goFx = function () {
            if ($parse(atr.ngFadeOutUpBig)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFadeOutUpBig', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFlip', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-flip-start animated flip'
          , goFx = function () {
            if ($parse(atr.ngFlip)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFlip', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFlipInX', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-flipinx-start animated flipInX'
          , goFx = function () {
            if ($parse(atr.ngFlipInX)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFlipInX', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFlipInY', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-flipiny-start animated flipInY'
          , goFx = function () {
            if ($parse(atr.ngFlipInY)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFlipInY', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFlipOutX', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-flipouty-start animated flipOutY'
          , goFx = function () {
            if ($parse(atr.ngFlipOutX)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFlipOutX', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngFlipOutY', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-flipouty-start animated flipOutY'
          , goFx = function () {
            if ($parse(atr.ngFlipOutY)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngFlipOutY', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngLightSpeedIn', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-lightspeedin-start animated lightSpeedIn'
          , goFx = function () {
            if ($parse(atr.ngLightSpeedIn)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngLightSpeedIn', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngLightSpeedOut', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-lightspeedout-start animated lightSpeedOut'
          , goFx = function () {
            if ($parse(atr.ngLightSpeedOut)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngLightSpeedOut', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRotateIn', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rotatein-start animated rotateIn'
          , goFx = function () {
            if ($parse(atr.ngRotateIn)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRotateIn', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRotateInUpLeft', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateinupleft-start animated rotateInUpLeft'
          , goFx = function () {
            if ($parse(atr.ngRotateInUpLeft)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRotateInUpLeft', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRotateInUpRight', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateinupright-start animated rotateInUpRight'
          , goFx = function () {
            if ($parse(atr.ngRotateInUpRight)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRotateInUpRight', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRotateInDownLeft', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateindownleft-start animated rotateInDownLeft'
          , goFx = function () {
            if ($parse(atr.ngRotateInDownLeft)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRotateInDownLeft', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRotateInDownRight', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateindownright-start animated rotateInDownRight'
          , goFx = function () {
            if ($parse(atr.ngRotateInDownRight)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRotateInDownRight', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRotateOut', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateout-start animated rotateOut'
          , goFx = function () {
            if ($parse(atr.ngRotateOut)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRotateOut', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRotateOutUpLeft', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateoutupleft-start animated rotateOutUpLeft'
          , goFx = function () {
            if ($parse(atr.ngRotateOutUpLeft)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRotateOutUpLeft', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRotateOutUpRight', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateoutupright-start animated rotateOutUpRight'
          , goFx = function () {
            if ($parse(atr.ngRotateOutUpRight)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRotateOutUpRight', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRotateOutDownLeft', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateoutdownleft-start animated rotateOutDownLeft'
          , goFx = function () {
            if ($parse(atr.ngRotateOutDownLeft)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRotateOutDownLeft', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRotateOutDownRight', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateoutdownright-start animated rotateOutDownRight'
          , goFx = function () {
            if ($parse(atr.ngRotateOutDownRight)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRotateOutDownRight', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngHinge', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-hinge-start animated hinge'
          , goFx = function () {
            if ($parse(atr.ngHinge)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngHinge', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRollIn', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rollin-start animated rollIn'
          , goFx = function () {
            if ($parse(atr.ngRollIn)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRollIn', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngRollOut', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-rollout-start animated rollOut'
          , goFx = function () {
            if ($parse(atr.ngRollOut)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngRollOut', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngZoomIn', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomin-start animated zoomIn'
          , goFx = function () {
            if ($parse(atr.ngZoomIn)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngZoomIn', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngZoomInDown', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomindown-start animated zoomInDown'
          , goFx = function () {
            if ($parse(atr.ngZoomInDown)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngZoomInDown', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngZoomInLeft', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-zoominleft-start animated zoomInLeft'
          , goFx = function () {
            if ($parse(atr.ngZoomInLeft)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngZoomInLeft', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngZoomInRight', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-zoominright-start animated zoomInRight'
          , goFx = function () {
            if ($parse(atr.ngZoomInRight)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngZoomInRight', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngZoomInUp', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-zoominup-start animated zoomInUp'
          , goFx = function () {
            if ($parse(atr.ngZoomInUp)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngZoomInUp', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngZoomOut', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomout-start animated zoomOut'
          , goFx = function () {
            if ($parse(atr.ngZoomOut)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngZoomOut', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngZoomOutDown', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomoutdown-start animated zoomOutDown'
          , goFx = function () {
            if ($parse(atr.ngZoomOutDown)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngZoomOutDown', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngZoomOutLeft', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomoutleft-start animated zoomOutLeft'
          , goFx = function () {
            if ($parse(atr.ngZoomOutLeft)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngZoomOutLeft', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngZoomOutRight', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomoutright-start animated zoomOutRight'
          , goFx = function () {
            if ($parse(atr.ngZoomOutRight)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngZoomOutRight', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }])
  .directive('ngZoomOutUp', ['$parse', function ($parse) {
    return {
      'restrict': 'A',
      'scope': true,
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomoutup-start animated zoomOutUp'
          , goFx = function () {
            if ($parse(atr.ngZoomOutUp)()) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        atr.$observe('ngZoomOutUp', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }]);
}(angular));

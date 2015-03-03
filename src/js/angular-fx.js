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
      'link': function($scope, el, atr) {

        var clss = 'ng-bounce-start animated bounce'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngBounce)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounce', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-flash-start animated flash'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFlash)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFlash', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-pulse-start animated pulse'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngPulse)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngPulse', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rubberband-start animated rubberBand'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRubberband)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRubberband', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-shake-start animated shake'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngShake)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngShake', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-swing-start animated swing'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngSwing)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngSwing', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-tada-start animated tada'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngTada)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngTada', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-wobble-start animated wobble'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngWobble)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngWobble', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-bouncein-start animated bounceIn'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngBounceIn)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceIn', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceindown-start animated bounceInDown'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngBounceInDown)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceInDown', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceinleft-start animated bounceInLeft'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngBounceInLeft)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceInLeft', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceinright-start animated bounceInRight'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngBounceInRight)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceInRight', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceinup-start animated bounceInUp'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngBounceInUp)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceInUp', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceout-start animated bounceOut'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngBounceOut)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceOut', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceoutdown-start animated bounceOutDown'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngBounceOutDown)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceOutDown', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceoutleft-start animated bounceOutLeft'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngBounceOutLeft)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceOutLeft', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceoutright-start animated bounceOutRight'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngBounceOutRight)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceOutRight', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-bounceoutup-start animated bounceOutUp'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngBounceOutUp)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngBounceOutUp', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadein-start animated fadeIn'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeIn)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeIn', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeindown-start animated fadeInDown'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeInDown)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInDown', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeindownbig-start animated fadeInDownBig'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeInDownBig)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInDownBig', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeinleft-start animated fadeInLeft'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeInLeft)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInLeft', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeinleftbig-start animated fadeInLeftBig'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeInLeftBig)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInLeftBig', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeinright-start animated fadeInRight'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeInRight)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInRight', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeinrightbig-start animated fadeInRightBig'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeInRightBig)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInRightBig', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeinup-start animated fadeInUp'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeInUp)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInUp', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeinupbig-start animated fadeInUpBig'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeInUpBig)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeInUpBig', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeout-start animated fadeOut'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeOut)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOut', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutdown-start animated fadeOutDown'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeOutDown)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutDown', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutdownbig-start animated fadeOutDownBig'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeOutDownBig)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutDownBig', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutleft-start animated fadeOutLeft'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeOutLeft)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutLeft', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutleftbig-start animated fadeOutLeftBig'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeOutLeftBig)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutLeftBig', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutright-start animated fadeOutRight'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeOutRight)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutRight', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutrightbig-start animated fadeOutRightBig'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeOutRightBig)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutRightBig', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutbig-start animated fadeOutUp'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeOutUp)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutUp', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-fadeoutupbig-start animated fadeOutUpBig'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFadeOutUpBig)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFadeOutUpBig', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-flip-start animated flip'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFlip)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFlip', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-flipinx-start animated flipInX'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFlipInX)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFlipInX', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-flipiny-start animated flipInY'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFlipInY)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFlipInY', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-flipouty-start animated flipOutY'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFlipOutX)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFlipOutX', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-flipouty-start animated flipOutY'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngFlipOutY)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngFlipOutY', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-lightspeedin-start animated lightSpeedIn'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngLightSpeedIn)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngLightSpeedIn', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-lightspeedout-start animated lightSpeedOut'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngLightSpeedOut)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngLightSpeedOut', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rotatein-start animated rotateIn'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRotateIn)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateIn', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateinupleft-start animated rotateInUpLeft'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRotateInUpLeft)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateInUpLeft', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateinupright-start animated rotateInUpRight'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRotateInUpRight)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateInUpRight', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateindownleft-start animated rotateInDownLeft'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRotateInDownLeft)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateInDownLeft', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateindownright-start animated rotateInDownRight'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRotateInDownRight)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateInDownRight', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateout-start animated rotateOut'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRotateOut)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateOut', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateoutupleft-start animated rotateOutUpLeft'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRotateOutUpLeft)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateOutUpLeft', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateoutupright-start animated rotateOutUpRight'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRotateOutUpRight)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateOutUpRight', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateoutdownleft-start animated rotateOutDownLeft'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRotateOutDownLeft)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateOutDownLeft', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rotateoutdownright-start animated rotateOutDownRight'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRotateOutDownRight)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRotateOutDownRight', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-hinge-start animated hinge'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngHinge)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngHinge', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rollin-start animated rollIn'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRollIn)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRollIn', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-rollout-start animated rollOut'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngRollOut)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngRollOut', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomin-start animated zoomIn'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngZoomIn)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomIn', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomindown-start animated zoomInDown'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngZoomInDown)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomInDown', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-zoominleft-start animated zoomInLeft'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngZoomInLeft)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomInLeft', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-zoominright-start animated zoomInRight'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngZoomInRight)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomInRight', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-zoominup-start animated zoomInUp'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngZoomInUp)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomInUp', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomout-start animated zoomOut'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngZoomOut)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomOut', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomoutdown-start animated zoomOutDown'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngZoomOutDown)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomOutDown', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomoutleft-start animated zoomOutLeft'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngZoomOutLeft)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomOutLeft', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomoutright-start animated zoomOutRight'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngZoomOutRight)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomOutRight', function (val) {
          if (val) {

            goFx();
          }
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
      'link': function($scope, el, atr) {

        var clss = 'ng-zoomoutup-start animated zoomOutUp'
          , goFx = function () {
            if ($scope.$parent.$eval(atr.ngZoomOutUp)) {

              el.removeClass('animated');
              el.addClass(clss);
            } else {
              el.removeClass(clss);
            }
          };

        $scope.$watch('ngZoomOutUp', function (val) {
          if (val) {

            goFx();
          }
        });
      }
    };
  }]);
}(angular));

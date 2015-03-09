Angular Fx
==================


###Angular.js + animate.css

Conditional animations and effects for your elements: `ng-shake`, `ng-pulse`, `ng-tada`, and [more](https://github.com/720kb/angular-fx#complete-list) ...

Just use them like you do for `ng-if` or `ng-hide` or `ng-show`.

It uses the awesome [animate.css](http://daneden.github.io/animate.css).

The angular fx is developed by [720kb](http://720kb.net).

##Requirements


[AngularJS](http://angularjs.org) v1.2+

[animate.css](http://daneden.github.io/animate.css) 


###Browser support


Chrome  ![ok](http://i.imgur.com/CK8qxk1.png)

Firefox ![ok](http://i.imgur.com/CK8qxk1.png)

Safari ![ok](http://i.imgur.com/CK8qxk1.png)

Opera ![ok](http://i.imgur.com/CK8qxk1.png)

IE    ![mmm](http://i.imgur.com/iAIwqCL.png)


## Load

To use the directive, include the Angular Fx javascript and css files in your web page and the animate.css file:

```html
<!DOCTYPE HTML>
<html>
<head>
  <link href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.1/animate.min.css" rel="stylesheet" type="text/css" />
  <!-- angular-fx.css goes after animate.css-->
  <link href="path/to/css/angular-fx.css" rel="stylesheet" type="text/css" />
</head>
<body ng-app="app">
  //.....
  <script src="path/to/js/angular-fx.js"></script>
</body>
</html>
```

##Install

###Bower installation

```
$ bower install angular-fx --save
```

_then load the js files in your html_

###Add module dependency

Add the 720kb.fx module dependency

```js
angular.module('app', [
  '720kb.fx'
 ]);
```

Use them like you do for `ng-if` or `ng-show` or `ng-hide`

```html

<a href="#" ng-pulse="3 > 2">Pulse</a>

```
## Example

```js
angular.module('app', [
  '720kb.fx'
 ])
 .controller('myCtrl',['$scope', '$timeout', function ($scope, $timeout) {
    $timeout(function () {

     $scope.x = 3;
    }, 2000);

    $timeout(function () {

     $scope.x = 1;
    }, 6000);
 }]);
```

Use them like you do for `ng-if` or `ng-show` or `ng-hide`

```html
<div ng-controller="myCtrl">
<a href="#" ng-pulse="x > 2">Pulse</a>
<a href="#" ng-fade-out="x > 2">Fadeout</a>
</div>
```

###[live example](https://720kb.github.io/angular-fx)

##Complete list
_for animations and effects examples, you can refer to the animate.css animations list [here](http://daneden.github.io/animate.css/)_

ng-flash

ng-pulse

ng-rubber-band

ng-shake

ng-swing

ng-tada

ng-wobble

ng-bounce-in

ng-bounce-in-down

ng-bounce-in-left

ng-bounce-in-right

ng-bounce-in-up

ng-bounce-out

ng-bounce-out-down

ng-bounce-out-left

ng-bounce-out-right

ng-bounce-out-up

ng-fade-in

ng-fade-in-down

ng-fade-in-down-big

ng-fade-in-left

ng-fade-in-left-big

ng-fade-in-right

ng-fade-in-right-big

ng-fade-in-up

ng-fade-in-up-big

ng-fade-out

ng-fade-out-down

ng-fade-out-down-big

ng-fade-out-left

ng-fade-out-left-big

ng-fade-out-right

ng-fade-out-right-big

ng-fade-out-up

ng-fade-out-up-big

ng-flip

ng-flip-in-x

ng-flip-in-y

ng-flip-out-x

ng-flip-out-y

ng-light-speed-in

ng-light-speed-out

ng-rotate-in

ng-rotate-in-up-left

ng-rotate-in-up-right

ng-rotate-in-down-left

ng-rotate-in-down-right

ng-rotate-out

ng-rotate-out-up-left

ng-rotate-out-up-right

ng-rotate-out-down-left

ng-rotate-out-down-right

ng-hinge

ng-roll-in

ng-roll-out

ng-zoom-in

ng-zoom-in-down

ng-zoom-in-left

ng-zoom-in-right

ng-zoom-in-up

ng-zoom-out

ng-zoom-out-down

ng-zoom-out-left

ng-zoom-out-right

ng-zoom-out-up

##Options

####Animations speed
To set a different animation speed just use the `ng-fx-speed="medium | fast | slow"` attribute (default value, if not specified, is `medium`):

```html
<a href="#" ng-pulse="3 > 2" ng-fx-speed="slow">Slow Pulse</a>
<a href="#" ng-pulse="3 > 2" ng-fx-speed="medium">Medium Pulse</a>
<a href="#" ng-pulse="3 > 2" ng-fx-speed="fast">Fast Pulse</a>
```

####Element visibility
If, for any reason, you would your element to be shown or hidden by default, you can use the `ng-fx-default="hide | show"` attribute:

```html
<a href="#" ng-pulse="3 > 2" ng-fx-default="show">Shown by default</a>
<a href="#" ng-pulse="3 > 2" ng-fx-default="hide">Hidden by default</a>
```

####Infinite animations
If for example you want an element to repeat the animation or effect while your condition/expression is true (sometimes needed), just add the `infinite` class to your element:

```html
<a href="#" ng-pulse="3 > 2">Pulse one time</a>
<a href="#" ng-pulse="3 > 2" class="infinite">Pulse continuously</a>
```

##Contributing

We will be much grate if you help us making this project to grow up.
Feel free to contribute by forking, opening issues, pull requests etc.

## License

The MIT License (MIT)

Copyright (c) 2014 Filippo Oretti, Dario Andrei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

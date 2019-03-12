//get module reference

var appRoot = angular.module('myApp');

appRoot.directive('myCarousel', function () {
  return {
    restrict: 'E',
    templateUrl: 'my-carousel.html',
    scope: true,

    link: function ($scope, $element, $attrs) {
      var carouselDom = $element[0].children[0];
      var carouselContainer = carouselDom.children[0];
      var btnLeft = angular.element(carouselDom.children[1].children[0]);
      var btnRight = angular.element(carouselDom.children[1].children[1]);
      var addImagebutton = angular.element(carouselDom.children[3].children[1].children[0]);
      var carouselindicators = $element[0].children[0].children[2];
      var scrollpixel = 200;
      var scrollWidth = 200;
      var dots = [];
      // debugger;
      // var gitImage = "data:image/png;base64,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"
      var gitImage = [];

      btnLeft.on('click', scrollLeft);
      btnRight.on('click', scrollRight);
      // addImagebutton.on('click', addImageFunction);

      //Carousel Indicators manipulation
      var i;
      for (i = 0; i < 7; i++) {
        dots[i] = angular.element(carouselDom.children[2].children[i]);
      }
      var i;
      for (i = 0; i < 7; i++) {
        dots[i].on('click', { index: i }, scrollpixelright);
      }

      function scrollpixelright(e) {
        var index = e.data.index;


        scrollValue = (index * scrollpixel);

        angular.element(carouselContainer).animate({ scrollLeft: scrollValue }, 400);


        activeDot(index);


      }
      function activeDot(input) {
        $element.find('li').filter(function () {
          return angular.element(this).addClass('active');
        });

      }
      //scrollLeft & scrollRight Functions based on event
      function scrollRight() {
        if (carouselContainer.scrollLeft >= 800) {
          angular.element(carouselContainer).animate({ scrollLeft: '0' }, 400);

        }

        else {
          angular.element(carouselContainer).animate({ scrollLeft: '+=' + scrollWidth }, 400);

        }
      };

      function scrollLeft() {
        if (carouselContainer.scrollLeft >= 800) {
          angular.element(carouselContainer).animate({ scrollLeft: '-=' + scrollWidth }, 400);
        }
        else if (carouselContainer.scrollLeft == 0) {
          angular.element(carouselContainer).animate({ scrollLeft: '1000' }, 400);
        }
        else {
          angular.element(carouselContainer).animate({ scrollLeft: '-=' + scrollWidth }, 400);
        }
      }
      //function close
    }
    //link close
  };//return close
});
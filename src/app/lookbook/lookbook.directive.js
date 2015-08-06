let MARGIN = 10;

function Lookbook($rootScope, $timeout){
  'ngInject';

  return {
    restrict: 'EA',
    templateUrl: 'app/lookbook/lookbook.html',
    controller: LookbookCtrl,
    controllerAs: 'look',
    bindToController: true,
    link: function (scope, element) {
      $timeout(checkLoaded);

      function checkLoaded() {
        let images = element.find('img');
        let loaded = 0;

        images.on('load', () => {
          if (++loaded === images.length) {
            $rootScope.$emit('lookbook:imagesLoaded');
            scope.$apply();
          }
        });
      }
    }
  };
}

class LookbookCtrl {
  constructor($rootScope, Lookbook){
    'ngInject';

    this.slides = Lookbook.slides;
    this.sliderPosition = 0;
    this.margin = MARGIN;
    $rootScope.$on('lookbook:imagesLoaded', () => this.init());
  }

  init(){
    this.current = 1;
    this.renderSlides();
  }

  getPosition(slide){
    let index = this.slides.indexOf(slide) + 1;
    return {
      width: slide.width + this.margin * 2,
      left: slide.left + index * 2 * this.margin
    }
  }

  setSlideWidth(event, slide){
    slide.width = event.path[0].clientWidth;
  }
  renderSlides(){
    let currentLeft = 0;
    for (let slide of this.slides) {
      slide.left = currentLeft;
      currentLeft += slide.width + 2 * this.margin;
    }
    this.move(this.current);
  }
  move(index){
    let targetSlide = this.slides[index];
    let width = targetSlide.width + 2 * this.margin;
    this.sliderPosition = index !== 0 ?
      (window.innerWidth - width) / 2  - targetSlide.left:
      (window.innerWidth - width) / 2;
    this.current = index;
  }
}

export default Lookbook;
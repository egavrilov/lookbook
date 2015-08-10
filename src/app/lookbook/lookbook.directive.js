/* global window */
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
  constructor($rootScope, $location, Lookbook){
    'ngInject';

    this.Lookbook = Lookbook;
    this.slides = Lookbook.slides;
    this.items = Lookbook.items;
    this.sliderPosition = 0;
    this.margin = MARGIN;
    this.horizontal = window.innerWidth < window.innerHeight;
    this.$location = $location;
    $rootScope.$on('lookbook:imagesLoaded', () => this.init());
  }

  init(){
    let slide = this.$location.search().slide;
    this.current = isNaN(slide) ? 0 : slide;
    this.renderSlides();
    this.loadItems();
  }

  /**
   * Lazy load items.
   * @param [index] Index of slide to load articles of.
   */
  loadItems(index){
    if (typeof index === 'undefined') index = this.current;
    if (!this.slides[index] || this.slides[index].items) return;

    this.Lookbook.loadItems(Object.keys(this.slides[index].articles))
      .then((items) => {
        this.slides[index].items = items;
        this.loadItems(index+1);
        this.loadItems(index-1);
    });
  }

  setSlideWidth(event, slide){
    slide.width = this.horizontal ?
      window.innerWidth :
      event.path[0].clientWidth;
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
    index = Number(index);
    let targetSlide = this.slides[index];
    if (!targetSlide) return;

    let width = targetSlide.width + 2 * this.margin;
    this.sliderPosition = index !== 0 ?
      (window.innerWidth - width) / 2  - targetSlide.left:
      (window.innerWidth - width) / 2;
    this.current = index;
    this.$location.search('slide', this.current);
  }
  swipe(direction){
    this.move(this.current + (direction || 1));
  }
}

export default Lookbook;
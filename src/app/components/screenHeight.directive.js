class ScreenHeight{
  constructor(){
    return {
      controller: ScreenHeightCtrl,
      bindToController: true
    };
  }
}

class ScreenHeightCtrl{
  constructor($window, $document, $element){
    'ngInject';
    this.$window = $window;
    this.$element = $element;

    this.setSize();
    $document.on('resize', this.setSize);
  }

  setSize(){
    if (this.$window.innerWidth > this.$window.innerHeight) {
      this.$element.css('height', this.$window.innerHeight + 'px');
    } else {
      this.$element.css('width', this.$window.innerWidth + 'px');
    }
  }
}

export default ScreenHeight;
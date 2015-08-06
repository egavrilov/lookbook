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
    this.$element.css('height', this.$window.innerHeight + 'px');
  }
}

export default ScreenHeight;
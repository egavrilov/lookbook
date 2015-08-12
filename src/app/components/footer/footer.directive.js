class Footer {

  constructor() {
    'ngInject';

    return {
      restrict: 'EA',
      templateUrl: 'app/components/footer/footer.html',
      controller: () => {},
      controllerAs: 'footer',
      bindToController: true
    };
  }
}

export default Footer;
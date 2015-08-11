class Header {

  constructor() {
    'ngInject';

    return {
      restrict: 'EA',
      templateUrl: 'app/components/header/header.html',
      controller: () => {},
      controllerAs: 'header',
      bindToController: true
    };
  }
}

export default Header;
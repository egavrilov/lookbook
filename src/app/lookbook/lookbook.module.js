import LookbookFactory from './lookbook.factory.js';
import Lookbook from './lookbook.directive.js';
import RubleFilter from '../components/ruble.filter';
import ScreenHeight from '../components/screenHeight.directive';
import ResourceLoad from '../components/slLoad.directive';

angular.module('lookbook', ['ngResource'])
  .factory('Lookbook', ['$http', '$q', ($http, $q) => new LookbookFactory($http, $q)])
  .directive('screenHeight', () => new ScreenHeight())
  .directive('slLoad', () => new ResourceLoad())
  .directive('lookbook', Lookbook)
  .filter('ruble', RubleFilter);

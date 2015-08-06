import LookbookFactory from './lookbook.factory.js';
import Lookbook from './lookbook.directive.js';
import ScreenHeight from '../components/screenHeight.directive';
import ResourceLoad from '../components/slLoad.directive';

angular.module('lookbook', [])
  .factory('Lookbook', () => new LookbookFactory())
  .directive('screenHeight', () => new ScreenHeight())
  .directive('slLoad', () => new ResourceLoad())
  .directive('lookbook', Lookbook);

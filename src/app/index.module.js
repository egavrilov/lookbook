import config from './index.config';
import runBlock from './index.run';
import Header from './components/header/header.directive';
import Footer from './components/footer/footer.directive';
import './lookbook/lookbook.module';

angular.module('slLookbook', ['ngAnimate', 'ngTouch', 'lookbook'])
  .config(config)
  .run(runBlock)
  .directive('slHeader', () => new Header())
  .directive('slFooter', () => new Footer());
import config from './index.config';
import runBlock from './index.run';
import './lookbook/lookbook.module.js';

angular.module('slLookbook', ['ngAnimate', 'ngTouch', 'lookbook'])
  .config(config)
  .run(runBlock);
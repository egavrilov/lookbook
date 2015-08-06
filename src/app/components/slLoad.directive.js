export default class ResourceLoad{
  constructor() {

    return {
      restrict: 'A',
      scope: {
        fn: '&slLoad'
      },
      link: function (scope, element) {
        element.on('load', function (event) {
          scope.$apply(function () {
            scope.fn({$event: event});
          });
        });
      }
    };
  }

}
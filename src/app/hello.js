angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controllerAs: 'MainCtrl',
    transclude: true,
    controller: function ($log, $scope) {
      this.username = '';
      this.password = '';
      this.hello = 'Hello ';
      this.allok = function () {
        if ($scope.login.$valid) {
          $log.log(this.username + ' ' + this.password);
        }
      };
    }
  });

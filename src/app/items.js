angular
  .module('app')
  .controller('Item.Controller', function () {
    var vm = this;
    vm.items = ['Item1', 'Item2', 'Item3'];
    vm.temps = angular.copy(vm.items);
    vm.add = function (itemname) {
      vm.items.push(itemname);
      vm.temps.push(itemname);
    };
    vm.remove = function (index) {
      vm.items.splice(index, 1);
      vm.temps.splice(index, 1);
    };
    vm.edit = function (index, value) {
      vm.items[index] = value;
      vm.temps[index] = value;
    };

    vm.undo = function (index) {
      vm.items[index] = angular.copy(vm.temps[index]);
      console.log(vm.items[index]);
      console.log(vm.temps[index]);
      return vm.items[index];
    };
  });

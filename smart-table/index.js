(function (ng) {
  ng.module("myApp", ["smart-table"])
    .controller("mainCtrl", ["$scope", function (scope) {
      scope.rowCollection = [];
      for (var i = 0; i < 100; i++) {
        var item = {};
        item.name = "名字" + i;
        item.age = 18 + i;
        scope.rowCollection.push(item);
      }
      console.log(scope);
    }]);
})(angular);
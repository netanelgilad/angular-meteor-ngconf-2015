/**
 * Created by netanel on 27/02/15.
 */
angular.module('todomvc')
  .controller('MainController', function($scope) {

    $scope.todos = [];

    $scope.newTodo = '';

    $scope.addTodo = function () {
      var todo = {
        title : $scope.newTodo,
        completed : false
      };
      $scope.todos.push(todo);

      $scope.newTodo = '';
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };
  });

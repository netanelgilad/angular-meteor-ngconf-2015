/**
 * Created by netanel on 27/02/15.
 */
angular.module('todomvc')
  .controller('MainController', function($scope, $meteor, TodosManager) {

    $scope.todos = $meteor.collection(Todos);

    $scope.newTodo = '';

    $scope.addTodo = function () {
      var todo = {
        title : $scope.newTodo,
        completed : false
      };

      $scope.error = undefined;
      TodosManager.addTodo(todo).catch(function(error) {
        $scope.error = error;
      });

      $scope.newTodo = '';
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };
  });

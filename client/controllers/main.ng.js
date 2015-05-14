/**
 * Created by netanel on 27/02/15.
 */
angular.module('todomvc')
  .controller('MainController', function($scope, $meteor, TodosManager, Data) {

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

    $scope.getImageUrl = function() {
      $scope.error = undefined;
      Data.getData().then(function(response) {
        $scope.imageUrl = response.data;
      }, function() {
        $scope.error = 'Failed to get image url from $http';
      });
    }
  });

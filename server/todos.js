/**
 * Created by netanel on 27/02/15.
 */

angular.module('todomvc')
  .service('TodosManager', function () {
    this.addTodo = function (todo) {
      console.log('#### This is running on the server! ####');
      if (todo.title.length < 3) {
        throw new Meteor.Error(500, undefined, 'Title must be longer than 3 letters');
      }
      else {
        Todos.insert(todo);
      }
    };
  })
  .config(function (ServerAPIProvider) {
    ServerAPIProvider.register('TodosManager');
  });
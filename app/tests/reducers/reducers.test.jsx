var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searcText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'something to do',
          completed: false,
          createdAt: 9238475
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should toggle todo', () => {
      var todos = [{
        id: 1,
        text: 'Something To Do',
        completed: false,
        createdAt: 123,
        completedAt: undefined
      }, {
        id: 2,
        text: 'Somthing else to do too',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toNotEqual(undefined);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: 1,
        text: 'Something To Do',
        completed: false,
        createdAt: 123,
        completedAt: undefined
      }, {
        id: 2,
        text: 'Somthing else to do too',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(2);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});

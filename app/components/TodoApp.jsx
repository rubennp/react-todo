var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Give the counter reading'
        },
        {
          id: 4,
          text: 'Throwing rubbish'
        }
      ]
    }
  },
  handleAddTodo: function(text) {
    alert('new todo: ' + text);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <h1 className="text-center">Todo App</h1>
          <hr/>
          <TodoSearch onSearch={this.handleSearch} />
          <hr/>
          <TodoList todos={todos} />
          <hr/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;

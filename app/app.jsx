var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');  // ES6 sintax equal to var Route = require('react-router').Route; etc...

// Load foundation

jQuery(document).ready(function($) {
  $(document).foundation();
}); // $(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Simple Todo React App</p>,
  document.getElementById('app')
);

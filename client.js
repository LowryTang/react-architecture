(function(arguments) {
  var App = require('./components/App.jsx');
  var ReactRouter = require('react-router');
  var React = require('react');

  ReactRouter.run(App, ReactRouter.HistoryLocation, function (Handler) {
    var AppFactory = React.createFactory(Handler);
    React.render(AppFactory(), document);
  })

}).call(this)

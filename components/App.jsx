var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;

var history = ReactRouter.HistoryLocation;


var About = React.createClass({
  render: function () {
    return (
      <div>
        <h2>About</h2>
        <RouteHandler />
      </div>
    );
  }
});

var Inbox = React.createClass({
  render: function () {
    return <h2>Inbox</h2>;
  }
});

var Home = React.createClass({
  render: function () {
    return <h2>Home</h2>;
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>App</h1>
        <div>
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="inbox">Inbox</Link>
        </div>
        <RouteHandler />
        <script src="build/bundle.js"></script>
      </div>
    );
  }
});

var routes = (
  <Route path="/" handler={App}>
    <Route name="home" path="/" handler={Home}></Route>
    <Route name="about" path="about" handler={About}></Route>
    <Route name="inbox" path="inbox" handler={Inbox}></Route>
  </Route>
);


module.exports = routes;

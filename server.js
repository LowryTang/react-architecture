var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('node-jsx').install({extension: '.jsx'});

var React = require('react');
var App = require('./components/App.jsx');
var ReactRouter = require('react-router');
var ExpressLocation = require('react-router-express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function (req, res, next) {
  var location = new ExpressLocation(req.url, res);

  ReactRouter.run(App, location, function (Root) {
    res.setHeader('Content-Type', 'text/html');
    var AppFactory = React.createFactory(Root);
    var markup = React.renderToString(AppFactory());
    res.send('<!DOCTYPE html>' + markup);
  });
});

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function() {
  // debug('Express server listening on port ' + server.address().port);
});

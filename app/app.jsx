var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main');
var Weather = require('./components/Weather');
var About = require('./components/About');
var Examples = require('./components/Examples');

// Loading foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$('document').foundation();

// App css
require('style!css!sass!./styles/app.scss')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}></Route>
      <Route path="examples" component={Examples}></Route>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

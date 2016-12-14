var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var About = require('About');
var Examples= require('Examples');
var Weather = require('Weather');

//Load foundations
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

//Object Destructuring. Everything gets assigned react-router.<>
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

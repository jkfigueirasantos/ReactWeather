var React = require('react');
var Nav = require('./Nav');

var Main = (props) => {
  return(
    <div className="main-app">
      <Nav />
      {props.children}
    </div>
  );
}

module.exports = Main;

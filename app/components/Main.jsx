var React = require('react');
var Nav = require('./Nav');

var Main = (props) => {
  return(
    <div className="main-app">
      <Nav />
      <div className="row">
        <div className="columns large-4 medium-6 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;

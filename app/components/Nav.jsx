var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    alert('Not yet wired up...');
  },
  render: function() {
    return(
      <header className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li><span className="menu-text">React Weather App</span></li>
            <li><IndexLink activeClassName="-active" to="/">Get Weather</IndexLink></li>
            <li><Link activeClassName="-active" to="/about">About</Link></li>
            <li><Link activeClassName="-active" to="/examples">Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="text" placeholder="Search weather by city"/></li>
              <li><input type="submit" className="button" value="Get Weather"/></li>
            </ul>
          </form>
        </div>
      </header>
    );
  }
});

module.exports = Nav;

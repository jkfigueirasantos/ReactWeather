var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return(
    <nav className="main-nav">
      <h1 className="logotype">ReactWeather</h1>
      <IndexLink activeClassName="-active" to="/">Get Weather</IndexLink>
      <Link activeClassName="-active" to="/about">About</Link>
      <Link activeClassName="-active" to="/examples">Examples</Link>
    </nav>
  );
}

module.exports = Nav;

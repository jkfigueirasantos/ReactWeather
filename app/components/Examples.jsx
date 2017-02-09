var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return(
    <div className="screen examples-screen">
      <h1 className="main-title text-center">Examples</h1>
      <p>Here are some examples for you to try out.</p>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
        <li>
          <Link to='?/location=Mogi'>Mogi, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;

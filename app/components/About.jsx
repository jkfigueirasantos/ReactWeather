var React = require('react');

var About = () => {
  return(
    <div className="screen about-screen">
      <h1 className="page-title text-center">About</h1>
      <p>
        Application developed in the course Complete ReactJS Course.
        Here are some tools and codes used during the development of this app:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/" target="_blank">ReactJS</a> - Javascript library used;
          </li>
        <li>
          <a href="https://webpack.github.io/" target="_blank">Webpack</a> - Node bundler used to compile the code;
        </li>
        <li>
          <a href="https://openweathermap.org/" target="_blank">Open Weather Map</a> - Used for searching weather data by city name;
        </li>
        <li>
          <a href="http://foundation.zurb.com/" target="_blank">Foundation Framework</a> - CSS Framework used to style the app;
        </li>
        <li>
          <a href="https://jquery.com/" target="_blank">jQuery</a> - Another Javascript library used in the app;
        </li>
        <li>
          <a href="http://es6-features.org/" target="_blank">ES6</a> - Used to write new js features like arrow functions, Classes desconstructing and promises;
        </li>
        <li>Headphone and a lot of water!</li>
      </ul>
    </div>
  );
}

module.exports = About;

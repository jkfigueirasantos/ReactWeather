var React = require('react');

var WeatherMessage = (props) => {
  var location = props.messageLocation,
      temp = props.messageTemp;
  return(
    <p className="result">It's {temp} in {location}.</p>
  );
}

module.exports = WeatherMessage;

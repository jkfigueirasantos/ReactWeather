var React = require('react');

var WeatherMessage = (props) => {
  var location = props.messageLocation,
      temp = props.messageTemp;
  return(
    <h3 className="text-center result">It's {temp} in {location}.</h3>
  );
}

module.exports = WeatherMessage;

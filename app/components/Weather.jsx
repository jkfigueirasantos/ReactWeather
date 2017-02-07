var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var openWeatherMap = require('../api/openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err) {
      that.setState({
        isLoading: false
      });
      alert('error: No city with this name was found!');
    });
  },
  render: function(){
    var location = this.state.location,
        temp = this.state.temp,
        isLoading = this.state.isLoading;

    function renderMessage(){
      if (isLoading) {
        return <p className="result">Fetching weather...</p>
      } else if (location && temp) {
        return <WeatherMessage messageLocation={location} messageTemp={temp}/>
      }
    };
    return(
      <div className="screen weather-screen">
        <h3 className="main-title">Get Weather !</h3>
        <WeatherForm newSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;

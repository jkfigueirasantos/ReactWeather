var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var openWeatherMap = require('../api/openWeatherMap');
var ErrorModal = require('./ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err) {
      that.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });
  },
  render: function(){
    var location = this.state.location,
        temp = this.state.temp,
        isLoading = this.state.isLoading,
        errorMessage = this.state.errorMessage;

    function renderMessage(){
      if (isLoading) {
        return <p className="result">Fetching weather...</p>
      } else if (location && temp) {
        return <WeatherMessage messageLocation={location} messageTemp={temp}/>
      }
    };

    function modalError(){
      if ( typeof errorMessage === 'string') {
        return(
          <ErrorModal message={errorMessage} />
        );
      }
    };

    return(
      <div className="screen weather-screen">
        <h1 className="main-title text-center">Get Weather !</h1>
        <WeatherForm newSearch={this.handleSearch} />
        {renderMessage()}
        {modalError()}
      </div>
    );
  }
});

module.exports = Weather;

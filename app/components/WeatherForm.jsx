var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.newSearch(location);
    }
  },
  render: function(){
    return(
      <form onSubmit={this.onFormSubmit} className="form">
        <p>
          <input type="text" ref="location" placeholder="Enter city name" className="input"/>
        </p>
        <p>
          <button type="submit" className="button hollow expanded">Get Weather !</button>
        </p>
      </form>
    );
  }
});

module.exports = WeatherForm;

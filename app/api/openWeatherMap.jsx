var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=24782c95f382ccc01b87fca5f05a0935';

module.exports = {
  getTemp: function(location) {

    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=metric`;

    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(){
      throw new Error(res.data.message);
    });

  }
}

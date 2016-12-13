var axios = require('axios');

var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
var units = '&units=imperial';
const KEY= '&APPID=4aac14d2297c09cf1fd5ca5c2ee31503';

module.exports = {
  getTemp: function(location) {
    var endodedURL = url + encodeURIComponent(location) + units + KEY;

    return axios.get(endodedURL).then(function(res) {
      //debugger;
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        console.log(res.data.main.temp);
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });

  }
}

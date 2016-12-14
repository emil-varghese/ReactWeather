var React = require('react');

/*
var WeatherMessage = React.createClass({
  render: function() {
    //var {temp,location} = this.props;

    return(
      <h3>It is {this.props.temp} in {this.props.location}</h3>
    );
  }
});
*/

var WeatherMessage = ({temp, location}) => {
  return(
    <h1 className="text-center">It is {temp} in {location}</h1>
  );
}

module.exports = WeatherMessage;

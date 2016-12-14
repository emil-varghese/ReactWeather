var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    };
  },
  handleSearch: function(location){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    })

    openWeatherMap.getTemp(location).then (function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    } , function (e){
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });

    });
  },
  componentDidMount: function() {
    var location = this.props.location.query.location; //The location parameter gets the param from
                                                       // search string. Only last part changes for
                                                       // different params
    if (typeof location ==='string' && location.length> 0) {
      this.handleSearch(location);
      window.location.hash = '#/'; //reset the query string after successful search
    }

  }, //Search on home page does not work
     //The component does not know how to update itself in the same page. So the following function
     //updates the props. State and props
     //a component can change state, but not the props
     //but a parent can update the childs props
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;

    if (location && location.length> 0) {
      this.handleSearch(location);
      window.location.hash = '#/'; //reset the query string after successful search
    }
  },
  render: function() {
    var {isLoading,temp,location,errorMessage} = this.state; //Destructuring this means
    //var temp = this.state.temp and this.state.location = location

    function renderMessage() {
      if(isLoading){
        return <h3>Loading...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function rendorError(){
      if (typeof errorMessage === 'string') {
        return(
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {rendorError()}
      </div>
    );
  }
});

module.exports = Weather;

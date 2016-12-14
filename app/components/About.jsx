var React = require('react');

//Refactored code below
/*
var About = React.createClass({
  render: function() {
    return(
      <h3>About Component</h3>
    );
  }
});
*/
//Refactored to Arrow function
var About = (props) => {
  return(
    <div>
        <h1 className="text-center">About</h1>
        <p>About this app</p>
    </div>

  );
}
module.exports = About;

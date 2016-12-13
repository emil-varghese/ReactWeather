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
    <h3>About Component</h3>
  );
}
module.exports = About;

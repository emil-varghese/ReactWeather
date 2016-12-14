var React = require('react');
var {Link} = require('react-router');

/*
var Examples = React.createClass({
  render: function() {
    return(
      <h3>Example Component</h3>
    );
  }
});
*/
var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Example Component</h1>
      <p>Here are a few examples to try out</p>
      <ol>
        <li>
          <Link to='/?location=Irvine'>Irvine, CA</Link>
        </li>
        <li>
          <Link to='/?location=Kochi'>Kochi, IN</Link>
        </li>
      </ol>
    </div>

  );
}

module.exports = Examples;

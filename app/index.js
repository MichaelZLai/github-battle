var USER_DATA = {
  name: "Michael Lai",
  username: "michaelzlai",
  image: "https://scontent.xx.fbcdn.net/v/t1.0-9/15181240_10154239531058790_7224650531886659620_n.jpg?oh=74b0673e2204b248f5646131230e447d&oe=58F90CDF"
}

var React = require("react");
var ReactDOM = require("react-dom");

//function(data) = view

var HelloWorld = React.createClass({
  render: function() {
    return(
      <div> Hello, {this.props.name} </div>
    )
  }
})


ReactDOM.render(
  <HelloWorld name="MichaeL" />,
  document.getElementById("app")
)

var React = require("react");

var Main = React.createClass({
  render: function(){
    return(
      <div className="main-controller">
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;

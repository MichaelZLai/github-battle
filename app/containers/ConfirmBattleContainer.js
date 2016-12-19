var React = require("react");
var ConfirmBattle = require("../components/ConfirmBattle");

var ConfirmBattleContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    console.log("get initial state")
    return{
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount: function(){
    console.log("component will mount")
  },
  componentDidMount: function(){
    console.log("component did mount")
    var query = this.props.location.query;
    //fetch info from github then update state
  },
  componentWillReceiveProps: function(){
    console.log("component will receive props")
  },
  componentWillUnmount: function(){
    console.log("component will un-mount")
  },
  render: function(){
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
      />
    )
  }
})

module.exports = ConfirmBattleContainer;

var React = require("react");
var ConfirmBattle = require("../components/ConfirmBattle");

var ConfirmBattleContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return{
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount: function(){
  },
  componentDidMount: function(){
    var query = this.props.location.query;
    //fetch info from github then update state
  },
  componentWillReceiveProps: function(){
  },
  componentWillUnmount: function(){
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

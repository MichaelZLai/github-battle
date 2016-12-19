var USER_DATA = {
  name: "Michael Lai",
  username: "michaelzlai",
  image: "https://scontent.xx.fbcdn.net/v/t1.0-9/15181240_10154239531058790_7224650531886659620_n.jpg?oh=74b0673e2204b248f5646131230e447d&oe=58F90CDF"
}

var React = require("react");
var ReactDOM = require("react-dom");

var Link = React.createClass({
  changeURL: function(){
    window.location.replace(this.props.href)
  },
  render: function(){
    return (
      <span style={{color:"blue", cursor:"pointer"}}
      onClick={this.changeURL}>
      {this.props.children}
      </span>
    )
  }
})

var ProfilePic = React.createClass({
  render: function(){
    return <img src={this.props.imageUrl} style={{height:100, width:100}} />
  }
})

var ProfileLink = React.createClass({
  render: function(){
    return(
      <div>
        <Link href={"https://www.github.com/" + this.props.username} target="_blank">
        {this.props.username}
        </Link>
      </div>
    )
  }
})

var ProfileName = React.createClass({
  render: function(){
    return(
      <div>{this.props.name}</div>
    )
  }
})

var Avatar = React.createClass({
  render: function(){
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})


ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById("app")
)

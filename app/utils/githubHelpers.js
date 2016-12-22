var axios = require("axios");

var id =  "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username){
  //if username or params are used//
  // return axios.get("https://api.github.com/users/" + username + param)
  return axios.get("https://api.github.com/users/" + username )

}

var helpers = {
  getPlayersInfo: function(players){
    return axios.all(players.map( username =>{
      return getUserInfo(username)
    })).then( info =>{
      return info.map( user =>{
        return user.data;
      })
    }).catch( err =>{
      console.warn("error in getPlayersInfo", err)
    })
  }
};

module.exports = helpers

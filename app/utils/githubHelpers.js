var axios = require("axios");

var id =  "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username){
  //if username or params are used//
  // return axios.get("https://api.github.com/users/" + username + param)
  return axios.get("https://api.github.com/users/" + username )
}

function getRepos (username) {
  //fetch usernames repos
}

function getTotalStars (stars) {
  //calculate all the stars the user has

}

function getPlayersData (player) {
  //get repos
  //get total stars
  //return object with data
}

function calculateScores (players) {
  //return an array, after doing fancy algorithms to determine winner
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
  },
  battle: function(players){

  }
};

module.exports = helpers

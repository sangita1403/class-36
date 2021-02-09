class Player{
  constructor(){
   this.index = null;
   this.distance = 0;
   this.name = null
  }
  getCount(){
      database.ref("PlayerCount").on("value",function(data){
          PlayerCount1 = data.val()
      })
  }
  updateCount(Count){
      database.ref("/").update({
          PlayerCount : Count
      })
  }
  static getPlayerInfo(){
      database.ref("Players").on("value",function (data){
          allPlayersInfo = data.val()
      })
  }
  updatePlayerInfo(){
      var playerIndex = "Players/player"+this.index
      database.ref(playerIndex).set({
         name : this.name,
         distance : this.distance
      })
  }
}
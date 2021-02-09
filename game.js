class Game{
  constructor(){

  }
  getState(){
      database.ref("gameState").on("value",function(data){
          gameState1 = data.val()
      })
  }
  updateState(state){
      database.ref("/").update({
          gameState:state
      })
  }
  start(){
      if(gameState1===0){
          player = new Player()
          player.getCount()
          form = new Form()
          form.display()
      }
  }
  play(){
      form.hideForm();
      Player.getPlayerInfo();
      if(allPlayersInfo !== undefined){
      var ypos = 130
      for(var plr in allPlayersInfo){
          ypos+= 20
          textSize(15)
          text(allPlayersInfo[plr].name +" : ",allPlayersInfo[plr].distance ,200 , ypos)
      }
    }
      if(keyDown(DOWN_ARROW)&& player.index!== null){
          player.distance+= 10
          player.updatePlayerInfo()
      }
  }
}
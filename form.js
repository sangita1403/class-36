class Form {
  constructor(){
     this.inputBox = createInput()
     this.button = createButton("PLAY")
     this.greeting = createElement("h3")
  }
  hideForm(){
    this.greeting.hide();
    this.button.hide();
    this.inputBox.hide();
  }
  display(){
     var title = createElement("h2")
     title.html("Multi Player Car Racing Game")
     title.position(130,20)

     
     this.inputBox.position(130,150)

     
     this.button.position(250,200) 
     
     this.button.mousePressed(()=>{
         this.inputBox.hide()
         this.button.hide()
         player.name = this.inputBox.value()
         this.greeting.html("Hello "+player.name)
         this.greeting.position(140,160)
         PlayerCount1 += 1
         player.index = PlayerCount1
         player.updateCount(PlayerCount1)
         player.updatePlayerInfo()
     })
  }
}
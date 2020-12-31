class Player  {
    constructor(x,y,width,height){
  var options = {
     restitution : 0.5

  }  
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
     
       }  
   display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }

   playerMovement(){
      if(KeyIsDown(RIGHT_ARROW)){
         carl.position.x = carl.position.x+10;
      }
      if(KeyIsDown(LEFT_ARROW)){
         carl.position.x = carl.position.x-10;
      }
      if(KeyIsDown(UP_ARROW)){
         carl.position.y = carl.position.y-10;
      }
      if(KeyIsDown(DOWN_ARROW)){
         carl.position.y = carl.position.y+10;
      }
   }

   }
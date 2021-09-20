var canvas=new fabric.Canvas("myCanvas");

player_y=6;
player_x=6;

blockImageWidth=30;
blockImageHeight=30;

playerObject="";
blockObject="";

function PlayerUpdate(){

    fabric.Image.fromURL("player.png",function(Img){

        playerObject=Img;
        playerObject.scaleToHeight(150);
        playerObject.scaleToWidth(150);

        playerObject.set({

            top:player_y,
            left:player_x
        });
        canvas.add(playerObject);
    });
}



function BlockUpdate(get_img){

    fabric.Image.fromURL(get_img,function(Img){

        blockObject=Img;
        blockObject.scaleToHeight(blockImageHeight);
        blockObject.scaleToWidth(blockImageWidth);

        blockObject.set({

            top:player_y,
            left:player_x
        });
        canvas.add(blockObject);
    });
}



window.addEventListener("keydown",my_keydown);

function my_keydown(e){

    console.log(e);
    my_keypress=e.keyCode;
    console.log(my_keypress);
      

    if(e.shiftKey==true && my_keypress=="80"){
       
        blockImageWidth=blockImageWidth+10;
        blockImageHeight=blockImageHeight+10;

        document.getElementById("current_width").innerHTML=blockImageWidth;
        document.getElementById("current_height").innerHTML=blockImageHeight;   
    }


    if(e.shiftKey==true && my_keypress=="77"){
  
        blockImageWidth=blockImageWidth-10;
        blockImageHeight=blockImageHeight-10;
        document.getElementById("current_width").innerHTML=blockImageWidth;
        document.getElementById("current_height").innerHTML=blockImageHeight; 
         }

         if(my_keypress=="38"){

            console.log("up arrow key is pressed");
            up();
            
         }



         if(my_keypress=="40"){
            console.log("down arrow key is pressed");
            down();

         }
   
         if(my_keypress=="37"){
            console.log("left arrow key is pressed");
            left();

         }
        
         if(my_keypress=="39"){
            console.log("right arrow key is pressed");
            right();

         }

         if(my_keypress=="87"){
            console.log("w key is pressed");
            BlockUpdate("wall.jpg");
         }

         if(my_keypress=="89"){
            console.log("y key is pressed");
            BlockUpdate("yellow_wall.png");
         }

         if(my_keypress=="85"){
            console.log("u key is pressed");
            BlockUpdate("unique.png");
         }

         if(my_keypress=="84"){
            console.log("t key is pressed");
            BlockUpdate("trunk.jpg");
         }

         if(my_keypress=="82"){
            console.log("r key is pressed");
            BlockUpdate("roof.jpg");
         }

         if(my_keypress=="76"){
            console.log("l key is pressed");
            BlockUpdate("light_green.png");
         }

         if(my_keypress=="71"){
            console.log("g key is pressed");
            BlockUpdate("ground.png");
         }

         if(my_keypress=="68"){
            console.log("d key is pressed");
            BlockUpdate("dark_green.png");
         }

         if(my_keypress=="67"){
            console.log("c key is pressed");
            BlockUpdate("cloud.jpg");
         }

         if(my_keypress=="73"){
             console.log("i key is pressed");
             BlockUpdate("pig.png");
         }
}

function up(){

   if(player_y>=0){
      
      player_y=player_y-blockImageHeight;
      console.log("x="+player_x+"y="+player_y);
      canvas.remove(playerObject);
      PlayerUpdate();


   }
}

function down(){

   if(player_y<=550){

      player_y=player_y+blockImageHeight;
      console.log("x="+player_x+"y="+player_y);
      canvas.remove(playerObject);
      PlayerUpdate();
   }
}

function left(){

   if(player_x>=0){

      player_x=player_x-blockImageWidth;
      console.log("x="+player_x+"y="+player_y);
      canvas.remove(playerObject);
      PlayerUpdate();
   }
}

function right(){

   if(player_x<=850){

      player_x=player_x+blockImageWidth;
      console.log("x="+player_x+"y="+player_y);
      canvas.remove(playerObject);
      PlayerUpdate();
   }
}
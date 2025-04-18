function brickWall(H,W){
    for(let i=1; i<=H; i++){
      let temp = "";
      for(let j=1; j<=W; j++){
          if(i%2!==0){
              temp = temp + "[] ";}
          else {
              temp = temp +" []";}}
      console.log(temp) }}
brickWall(4,5)
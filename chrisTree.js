function chrisTree(n){
  for(let i=1; i<=n; i++){
    let tree = "";
    for(let j=1; j<=n-i; j++){
      tree = tree +" ";
    }
    for(let j=1; j<=((2*i)-1); j++){
      tree= tree+"*"; 
    }
    console.log(tree)
  }
}
  
chrisTree(6) //we are "using two ladder loops inside one for loop". Till i understand the code i'll remember this logic.

// function chrisTree(n){
//   for(let i=1; i<=n; i++){
//     let tree = "";
//     for(let j=1; j<=n-1; j++){
//       tree = tree +" ";
//     }
//     for(let j=1; j<=((2*i)-1); j++){
//       tree= tree+"*"; 
//     }
//     console.log(tree)
//   }
// }
  
// chrisTree(6)  This prints Half tree with full count of stars



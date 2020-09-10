function ecrire(){
 var y = Number(prompt(" taille de votre pyramide : "));
  if(!Number.isNaN(y)){
    var x = "";
    for(var i = 0; i < y; i++){
     x = x + "#";
     console.log(x) + "\n";
    }
   }//end if
  else
   alert("It is not a Number");
}
ecrire();

// Arrow function

ecrire = () =>{
var y = Number(prompt(" taille de votre pyramide : "));
  if(!Number.isNaN(y)){
    var x = "";
    for(var i = 0; i < y; i++){
     x = x + "#";
     console.log(x) + "\n";
    }
   }//end if
  else
   alert("It is not a Number");
}
ecrire();

function Dice(user) {
    x = Math.floor(Math.random()*3 +1).toString();
    y = user.toString();
   
    switch (y+x) {
     case "11":
     case "22":
     case "33":
       tie()
       break
     case "13":
     case "21":
     case "32":
       win()
       break;
     case "12":
     case "23":
     case "31":
       lose()
       break;
     }
   }

function win(){}
function tie(){}
function lose(){}

   
   
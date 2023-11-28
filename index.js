
//TAsk 3

var firstNum = prompt("enter Your first Number");
var secNum = prompt("enter Your first Number");

var firstNum = parseInt(firstNum ,10);
var secNum = parseInt(secNum ,10);



sum = firstNum + secNum;
multiple = firstNum * secNum;
division = firstNum / secNum;
modulas = firstNum % secNum;
sub = firstNum - secNum;
document.write(firstNum +"+"+ secNum+ "=" + sum +"<br/>");
document.write(firstNum +"-"+ secNum+ "=" + sub +"<br/>");
document.write(firstNum +"*"+ secNum+ "=" + multiple +"<br/>");
document.write(firstNum +"/"+ secNum+ "=" + division +"<br/>");
document.write(firstNum +"%"+ secNum+ "=" + modulas)

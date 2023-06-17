




var rand1 =Math.floor(Math.random()*6)+1;
var imglink1 = "images/"+"dice"+rand1+".png";

document.querySelectorAll("img")[0].setAttribute("src",imglink1);

var rand2 =Math.floor(Math.random()*6)+1;
var imglink2 = "images/"+"dice"+rand2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imglink2);

if(rand1>rand2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(rand2>rand1)
{
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}


document.querySelector(".reset").addEventListener('click',function(){
  setTimeout(function(){document.location.reload();}, 100);
})

// setTimeout(function(){document.location.reload();}, 3000);































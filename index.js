
document.querySelector("h1").addEventListener("click",function(){
  generateRandomNo();
});


function generateRandomNo(){
  var randomNumber1=Math.random();
  randomNumber1=randomNumber1*6;
  randomNumber1=Math.ceil(randomNumber1);

  var randomNumber2=Math.random();
  randomNumber2=randomNumber2*6;
  randomNumber2=Math.ceil(randomNumber2);


  document.querySelector(".img1").setAttribute("src","images/dice"+ randomNumber1+ ".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+ randomNumber2+ ".png");

  if(randomNumber1>randomNumber2)
  {
    document.querySelector("h1").textContent = "🚩 Player 1 wins!!"
    document.querySelector("h1").style.fontSize = "5rem";
  }
  else if(randomNumber1<randomNumber2)
  {
    document.querySelector("h1").textContent = "Player 2 wins!! 🚩"
    document.querySelector("h1").style.fontSize = "5rem";
  }
  else
  {
    document.querySelector("h1").textContent = "It's a Draw!!"
    document.querySelector("h1").style.fontSize = "5rem";
  }
}

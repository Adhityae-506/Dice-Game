function throwDice(){
    var audio = document.getElementById("diceRolling");
    audio.play();

    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");

    img1.classList.add("roll");
    img2.classList.add("roll");

    setTimeout(() => {
    img1.classList.remove("roll");
    img2.classList.remove("roll");

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var image1 = document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");
    var image2 = document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");

    
    const header = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
      header.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      header.textContent = "Player 2 Wins! 🚩";
    } else {
      header.textContent = "It's a Draw!";
    }
  }, 500);
}

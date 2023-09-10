"use strict";
const dicebtn = document.querySelector(".dice");
const divder = document.querySelector(".divider");
dicebtn.addEventListener("click", () => {
    const audio = new Audio('./sounds/mixkit-game-click-1114.wav');
    audio.play();
  const request = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const jsonFormat = await response.json();

    // console.log(id);
    // console.log(response);
    return jsonFormat;
  };
  request()
    .then((data) => {
        const adviceid = document.querySelector("#Advice h5 span");
        const advicemessage = document.querySelector("#Advice p");
        adviceid.textContent = data.slip.id;
        advicemessage.textContent = data.slip.advice;
    })
    .catch((err) => console.error(err));
});

if(window.innerWidth < 414){
    divder.setAttribute("src","./images/pattern-divider-mobile.svg");

}
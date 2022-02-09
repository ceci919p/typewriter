"use strict";

let text;
let maxLength;
let iterator;
let outPutTxt = "";
window.addEventListener("load", loadFunc);

function loadFunc() {
  console.log("loadFunc");
  setUp();
}

function setUp() {
  //get text
  text = document.querySelector(".typewritten").textContent;
  /*  console.log("*****************");
  console.log(document.querySelector(".typewritten").textContent);
  console.log(document.querySelector(".typewritten"));
  console.log("*****************"); */
  document.querySelector(".typewritten").textContent = "";
  console.log("setUp", text);
  initTextLoop();
}

function initTextLoop() {
  //call loop
  iterator = 0;
  maxLength = text.length;
  console.log("maxLength", maxLength);
  textLoop();
}

function textLoop() {
  //loop function

  //build str
  outPutTxt += text.charAt(iterator);
  console.log("outPutTxt", outPutTxt);
  //iterator
  iterator++;

  //adding string to the frontend HTML
  document.querySelector(".typewritten").innerHTML = outPutTxt;

  console.log("I'm looping");

  //until iterator is bigger than string length
  if (iterator < maxLength) {
    setTimeout(textLoop, 500);
  }
}

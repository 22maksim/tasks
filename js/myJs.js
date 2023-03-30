"use strict";

let myBuy = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
document.querySelector('.outArray').innerHTML = myBuy;

let valueMyBuy = 0;

function bodyColor(color) {
  document.body.style.background = color;
}

document.querySelector('.maxClick').onclick = () => {
  
  if (valueMyBuy < myBuy.length - 1) {
    myBuy[valueMyBuy] = 0;
    myBuy[valueMyBuy + 1] = "&#128760;";
    valueMyBuy++;
    document.querySelector('.outArray').innerHTML = myBuy;
    document.querySelector('.outArray2').innerHTML = valueMyBuy + 1;
  }
  if (valueMyBuy == 1) {
    bodyColor('yellow');
  }
  if (valueMyBuy == 2) {
    bodyColor('green');
  }
  if (valueMyBuy == 3) {
    bodyColor('white');
  }
  if (valueMyBuy == 4) {
    bodyColor('gray');
  }
  if (valueMyBuy == 5) {
    bodyColor('black');
  }
  if (valueMyBuy == 6) {
    bodyColor('pink');
  }
  if (valueMyBuy == 7) {
    bodyColor('purple');
  }
  if (valueMyBuy == 8) {
    bodyColor('gray');
  }
  if (valueMyBuy == 9) {
    bodyColor('green');
  }
  if (valueMyBuy == 10) {
    bodyColor('red');
  }
  if (valueMyBuy == 11) {
    bodyColor('yellow');
  }
  if (valueMyBuy == 12) {
    bodyColor('white');
  }
  document.body.style.fontSize = "40px";
}

document.querySelector('.minClick').onclick = () => {
  if (valueMyBuy > 0 && valueMyBuy != 0){
    myBuy[valueMyBuy] = 0;
    myBuy[valueMyBuy - 1] = "&#128760;";
    valueMyBuy--;
    document.querySelector('.outArray').innerHTML = myBuy;
    document.querySelector('.outArray2').innerHTML = valueMyBuy + 1;
  }
  if (valueMyBuy == 1) {bodyColor('yellow');}if (valueMyBuy == 2) {bodyColor('green');}
  if (valueMyBuy == 3) {bodyColor('white');}if (valueMyBuy == 4) {bodyColor('gray');}
  if (valueMyBuy == 5) {bodyColor('black');}if (valueMyBuy == 6) {bodyColor('pink');}
  if (valueMyBuy == 7) {bodyColor('purple');}if (valueMyBuy == 8) {bodyColor('gray');}
  if (valueMyBuy == 9) {bodyColor('green');}if (valueMyBuy == 10) {bodyColor('red');}
  if (valueMyBuy == 11) {bodyColor('yellow');}if (valueMyBuy == 0) {bodyColor('white');}
}
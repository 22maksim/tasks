"use strict";

document.body.style.fontSize = "35px";

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
}

document.querySelector('.minClick').onclick = () => {
  if (valueMyBuy > 0 && valueMyBuy != 0){
    myBuy[valueMyBuy] = 0;
    myBuy[valueMyBuy - 1] = "&#128760;";
    valueMyBuy--;
    document.querySelector('.outArray').innerHTML = myBuy;
    document.querySelector('.outArray2').innerHTML = valueMyBuy + 1;
  }
  if (valueMyBuy == 1) {bodyColor('yellow');}
  if (valueMyBuy == 2) {bodyColor('green');}
  if (valueMyBuy == 3) {bodyColor('white');}
  if (valueMyBuy == 4) {bodyColor('gray');}
  if (valueMyBuy == 5) {bodyColor('black');}
  if (valueMyBuy == 6) {bodyColor('pink');}
  if (valueMyBuy == 7) {bodyColor('purple');}
  if (valueMyBuy == 8) {bodyColor('gray');}
  if (valueMyBuy == 9) {bodyColor('green');}
  if (valueMyBuy == 10) {bodyColor('red');}
  if (valueMyBuy == 11) {bodyColor('yellow');}
  if (valueMyBuy == 0) {bodyColor('white');}
}


// let h = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// let z = "";

// for (let i = 0; i < h.length; i++) {
//   for (let x = 0; x < h[i].length; x++) {
//     z += h[i][x] + ",";
//   }
//   z += "<br>";
// }
// document.querySelector(".outArray3").innerHTML = z;




let dataMy = [
  [11, 56, 87],
  [1, 4, 9],
  [98, 64, 2]
];

let sklad = "";

for (let i = 0; i < dataMy.length; i++) {
  for (let m = 0; m < dataMy[i].length; m++) {
    if (dataMy[i][m] > 50) {
    sklad += dataMy[i][m] + " ";
    }
  }
  // sklad += "<br>";
}

// for(let p = 0; p < sklad.length; p++) {
//   sklad = sklad[0] + sklad[p];
// }

// document.querySelector(".outArray3").innerHTML = sklad;






//--------------------------------------------------------------------//
                        //плавающая единица//



let runing = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let gou = 0;
let interval = 100;
let  strokeField = document.querySelector('.runone');
console.log(runing.length);


setTimeout(function maks() {
  runing[gou] = 0;
  gou++;
  runing[gou] = 1;
  strokeField.innerHTML = runing;
  if(gou === runing.length - 1){
    setTimeout(function maks2() {
      runing[gou] = 0;
      gou --;
      runing[gou] = 1;
      strokeField.innerHTML = runing;
      console.log(gou);
      if(gou > 0 ) {
        setTimeout(maks2, interval);
      }
      if(gou === 0) {
        setTimeout(maks, interval);
      }
    }, interval);
  }
  if (gou < runing.length - 1) {
    setTimeout(maks, interval);
  }
  console.log(gou);
}, interval);

console.log(gou);
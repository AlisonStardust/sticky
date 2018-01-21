//function add or remove sticky
$(document).ready(function() {
  $("#createSecond").click(function() {
    $(".stickers").clone().appendTo(".here").attr( 'id', 'sticker2' );
  });
    $("#removeSecond").click(function() {
    $("#sticker2").remove();
  });
});


//function drag element

dragElement(document.getElementById(("sticker")));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//<---version 1 ---> does not work

// const colorpink = changeColor("#E91E63");
// const colorblue = changeColor("#2196F3");
// const colororange = changeColor("#FF9800");
// const colorgrey = changeColor("#9E9E9E");

// document.querySelector(".pink").addEventListener("click", colorpink);
// document.querySelector(".blue").addEventListener("click", colorblue);
// document.querySelector(".orange").addEventListener("click", colororange);
// document.querySelector(".grey").addEventListener("click", colorgrey);

// function changeColor(stickyColor) {
//    document.getElementById("sticker").style.backgroundColor = stickyColor;
//    document.getElementById("sticker2").style.backgroundColor = stickyColor;
// }

//<--- version 2 --> works

document.querySelector(".pink").addEventListener("click", function() {setColor(".pink")});
document.querySelector(".blue").addEventListener("click", function() {setColor(".blue")});
document.querySelector(".orange").addEventListener("click", function() {setColor(".orange")});
document.querySelector(".grey").addEventListener("click", function() {setColor(".grey")});
 
function setColor(color){
  var colorCode = "#000000";
  switch(color){
    case ".pink":
      colorCode = "#E91E63";
      break;
    case ".blue":
      colorCode = "#2196F3";
      break;
    case ".orange":
      colorCode = "#FF9800";
      break;
    case ".grey":
      colorCode = "#9E9E9E";
      break;
  }
  setStickerColor("sticker", colorCode);
  setStickerColor("sticker2", colorCode);
}
 
function setStickerColor(name, colorCode) {
  document.getElementById(name).style.backgroundColor = colorCode;
};

// <---version 3 ---> WORKS
// const stickyColor = ["#E91E63", "#2196F3", "#FF9800", "#9E9E9E"];

// document.querySelector(".pink").addEventListener("click", soIClicked);

// function soIClicked() {
//     document.getElementById("sticker").style.backgroundColor = stickyColor[0];
//     document.getElementById("sticker2").style.backgroundColor = stickyColor[0];
// };

// document.querySelector(".blue").addEventListener("click", soIClicked2);

// function soIClicked2() {
//   document.getElementById("sticker").style.backgroundColor = stickyColor[1];
//   document.getElementById("sticker2").style.backgroundColor = stickyColor[1];
// };

// document.querySelector(".orange").addEventListener("click", soIClicked3);

// function soIClicked3() {
//   document.getElementById("sticker").style.backgroundColor = stickyColor[2];
//   document.getElementById("sticker2").style.backgroundColor = stickyColor[2];
// };

// document.querySelector(".grey").addEventListener("click", soIClicked4);

// function soIClicked4() {
//   document.getElementById("sticker").style.backgroundColor = stickyColor[3];
//   document.getElementById("sticker2").style.backgroundColor = stickyColor[3];
// };
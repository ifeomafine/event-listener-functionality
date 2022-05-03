
// For 'CLICK ON THIS TEXT'
function changeText() {
    document.getElementById("text").textContent
    = "OOOPS!";
  }
  document.getElementById("text").addEventListener("click", changeText);

// For 'MOUSE OVER ME'
  function changeChange() {
    document.getElementById("change").textContent
    = "Thank You!";
  }
  function changeChanger() {
    document.getElementById("change").textContent
    = "Mouse Over Me";
  }
  document.getElementById("change").addEventListener("mousemove", changeChange);
  document.getElementById("change").addEventListener("mouseout", changeChanger);

//   For 'MOUSE DOWN'
  function changeDown() {
    document.getElementById("down").textContent
    = "Release Me!";
  }
  function changeDowner() {
    document.getElementById("down").textContent
    = "Mouse Down";
  }
  document.getElementById("down").addEventListener("mousedown", changeDown);
  document.getElementById("down").addEventListener("mouseup", changeDowner);

//   For 'MOUSE OVER ME'

  function changeOver() {
    document.getElementById("over").textContent
    = "Take the Mouse Out!";
  }
  function changeOverr() {
    document.getElementById("over").textContent
    = "Mouse Over Me";
  }
  document.getElementById("over").addEventListener("mousemove", changeOver);
  document.getElementById("over").addEventListener("mouseout", changeOverr);


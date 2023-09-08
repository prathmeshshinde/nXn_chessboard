var buttonClick = document.getElementById("clickButton");

buttonClick.addEventListener("click", function () {
  var val = document.getElementById("getNum").value;
  if (val > 0) {
    var parentDiv = document.getElementById("chessboard-container");

    parentDiv.innerHTML = "";

    parentDiv.setAttribute("class", "rows");
    parentDiv.style.display = "flex";
    parentDiv.style.justifyContent = "center";
    const divWidth = 50 * val;
    parentDiv.style.width = `${divWidth}px`;
    parentDiv.style.flexWrap = "wrap";
    parentDiv.style.backgroundColor = "sky";
    parentDiv.style.boxShadow = "0px 10px 10px rgba(0,0,0,0.1)";

    for (let i = 0; i < val; i++) {
      for (let j = 0; j < val; j++) {
        if ((i + j) % 2) {
          const blackDiv = document.createElement("div");
          blackDiv.style.height = "50px";
          blackDiv.style.width = "50px";
          blackDiv.style.backgroundColor = "black";
          document.getElementById("chessboard-container").appendChild(blackDiv);
        } else {
          const whiteDiv = document.createElement("div");
          whiteDiv.style.height = "50px";
          whiteDiv.style.width = "50px";
          whiteDiv.style.backgroundColor = "white";
          document.getElementById("chessboard-container").appendChild(whiteDiv);
        }
      }
    }
    val = 0;
  } else if (val <= 0) {
    alert("Enter value greater than 0");
  } else {
    alert("Please enter a number");
  }
});

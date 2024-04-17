window.onload = function () {
  // Завдання 'onMouseOver' і 'onMouseOut':

  let block = document.querySelector(".block");
  let initialColor = block.style.backgroundColor;

  block.addEventListener("mouseover", function () {
    this.style.backgroundColor = "green";
  });

  block.addEventListener("mouseout", function () {
    this.style.backgroundColor = initialColor;
  });

  //Завдання 'onContextMenu':

  let block2 = document.querySelector(".block2");
  let text = document.querySelector(".text");
  let contextMenu = document.querySelector(".userContextMenu");

  block2.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    contextMenu.style.display = "block";

    let mouseX = e.clientX;
    let mouseY = e.clientY;

    contextMenu.style.left = mouseX + "px";
    contextMenu.style.top = mouseY + "px";
  });

  document.addEventListener("click", function () {
    contextMenu.style.display = "none";
  });

  let alignRight = document.querySelector(".right");
  alignRight.addEventListener("click", function () {
    text.style.textAlign = "right";
  });

  let alignLeft = document.querySelector(".left");
  alignLeft.addEventListener("click", function () {
    text.style.textAlign = "left";
  });

  let alignCenter = document.querySelector(".center");
  alignCenter.addEventListener("click", function () {
    text.style.textAlign = "center";
  });

  let hideElement = document.querySelector(".hide");
  hideElement.addEventListener("click", function () {
    contextMenu.style.display = "none";
  });

  //Завдання 'onMouseOver' і 'onMouseOut': images
  let image = document.querySelector("img");
  let imgWidth = parseFloat(getComputedStyle(image).width);
  let imgHeight = parseFloat(getComputedStyle(image).height);

  console.log(imgHeight);

  image.addEventListener("mouseover", function () {
    image.style.width = imgWidth * 2 + "px";
    image.style.height = imgHeight * 2 + "px";
  });

  image.addEventListener("mouseout", function () {
    image.style.width = imgWidth + "px";
    image.style.height = imgHeight + "px";
  });

  //Завдання 'keyup':

  let gameBlock = document.querySelector(".game-block");
  let gameField = document.querySelector(".game-field");
  let step = 10; // крок переміщення

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight"
    ) {
      event.preventDefault();
    }
    let currentTop = parseFloat(getComputedStyle(gameBlock).top);
    let currentLeft = parseFloat(getComputedStyle(gameBlock).left);
    let maxTop =
      parseFloat(getComputedStyle(gameField).height) -
      parseFloat(getComputedStyle(gameBlock).height);
    let maxLeft =
      parseFloat(getComputedStyle(gameField).width) -
      parseFloat(getComputedStyle(gameBlock).width);

    switch (event.key) {
      case "ArrowUp":
        if (currentTop > 0) {
          gameBlock.style.top = currentTop - step + "px";
        }
        break;
      case "ArrowDown":
        if (currentTop < maxTop) {
          gameBlock.style.top = currentTop + step + "px";
        }
        break;
      case "ArrowLeft":
        if (currentLeft > 0) {
          gameBlock.style.left = currentLeft - step + "px";
        }
        break;
      case "ArrowRight":
        if (currentLeft < maxLeft) {
          gameBlock.style.left = currentLeft + step + "px";
        }
        break;
    }
  });
};

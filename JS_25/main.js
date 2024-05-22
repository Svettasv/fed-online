window.onload = function () {
  // 1. Створіть канвас і за допомогою JavaScript малюйте на ньому 3 прямокутники  які пересікаються. Використовуйте метод fillRect для цього.
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgba(255, 0, 0, 1)";
  ctx.fillRect(50, 50, 300, 200);

  ctx.fillStyle = "rgba(0, 255, 0, 1)";
  ctx.fillRect(150, 100, 300, 200);

  ctx.fillStyle = "rgba(0, 0, 255, 1)";
  ctx.fillRect(250, 150, 300, 200);

  // 2. Залиття канвасу градієнтом
  // Створіть функцію, яка отримує 2 кольори та заливає весь канвас лінійним або  градієнтом. Використовуйте createLinearGradient  для створення градієнту:

  let canvas2 = document.getElementById("newCanvas");
  let ctx2 = canvas2.getContext("2d");

  function fillGradient(color1, color2) {
    let gradient = ctx.createLinearGradient(50, 50, 350, 250);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);

    ctx2.fillStyle = gradient;
    ctx2.fillRect(0, 0, 600, 400);
  }

  fillGradient("orange", "green");

  // 3. Малювання простої лінії

  let canvas3 = document.getElementById("canvas3");
  let ctx3 = canvas3.getContext("2d");

  function drawLine(xstart, ystart, xedn, yend, color, width) {
    ctx3.beginPath();
    ctx3.moveTo(xstart, ystart);
    ctx3.lineTo(xedn, yend);
    ctx3.lineWidth = width;
    ctx3.strokeStyle = color;
    ctx3.stroke();
  }

  drawLine(100, 100, 400, 100, "red", 5);

  // 4. Динамічне створення SVG-лінії

  function addSvgLine(x1, y1, x2, y2, color, width) {
    let svgNS = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "500");
    svg.setAttribute("height", "500");

    let line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", width);

    svg.appendChild(line);
    document.getElementById("svgContainer").appendChild(svg);
  }

  addSvgLine(50, 50, 150, 200, "green", 5);

  // 5. Створення SVG прямокутника з JavaScript

  function addSvgRectangle(width, height, fillColor, strokeColor, strokeWidth) {
    let svgNS = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");

    let rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", "10");
    rect.setAttribute("y", "10");
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fillColor);
    rect.setAttribute("stroke", strokeColor);
    rect.setAttribute("stroke-width", strokeWidth);

    svg.appendChild(rect);
    document.getElementById("svgContainer2").appendChild(svg);
  }

  addSvgRectangle(300, 100, "yellow", "blue", 2);
};

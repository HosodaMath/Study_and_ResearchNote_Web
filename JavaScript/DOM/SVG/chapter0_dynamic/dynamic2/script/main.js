let render_rect = () => {
  const rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect1.setAttribute("id", "rect1");
  rect1.setAttribute("x", "0");
  rect1.setAttribute("y", "0");
  rect1.setAttribute("width", "512");
  rect1.setAttribute("height", "512");
  rect1.setAttribute("fill", "#000000");

  const rect1_svg = document.querySelector("#dynamic2");
  rect1_svg.appendChild(rect1);
}

let render_circle = () => {
  const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle1.setAttribute("cx", "256");
  circle1.setAttribute("cy", "256");
  circle1.setAttribute("r", "128");
  circle1.setAttribute("fill", "#ffff00");

  const circle1_svg = document.querySelector("#dynamic2");
  circle1_svg.appendChild(circle1);
}

let main = () => {
  render_rect();
  render_circle();
}

main();


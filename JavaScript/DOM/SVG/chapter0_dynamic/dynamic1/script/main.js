let render_rect = () => {
  const rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect1.setAttribute("id", "rect1");
  rect1.setAttribute("x", "100");
  rect1.setAttribute("y", "100");
  rect1.setAttribute("width", "200");
  rect1.setAttribute("height", "100");
  rect1.setAttribute("fill", "#ffff00");

  const rect1_svg = document.querySelector("#dynamic1");
  rect1_svg.appendChild(rect1);
}

render_rect();
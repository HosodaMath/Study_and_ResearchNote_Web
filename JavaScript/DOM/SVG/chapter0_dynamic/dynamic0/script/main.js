let render_circle = () => {
  const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle1.setAttribute("cx", "256");
  circle1.setAttribute("cy", "256");
  circle1.setAttribute("r", "100");
  circle1.setAttribute("fill", "#000000");

  const circle1_svg = document.querySelector("#dynamic0");
  circle1_svg.appendChild(circle1);
}

render_circle();
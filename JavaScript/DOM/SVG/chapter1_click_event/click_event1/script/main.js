let render_circle = () => {
  const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle1.setAttribute("cx", "256");
  circle1.setAttribute("cy", "256");
  circle1.setAttribute("r", "100");
  circle1.setAttribute("fill", "#ffdf00");
  circle1.setAttribute("stroke", "#ff0000");
  circle1.setAttribute("stroke-width", "5.0");

  const circle1_svg = document.querySelector("#click_event1");
  circle1_svg.appendChild(circle1);

  circle1.addEventListener("click", (event) => {
    console.log("click(circle)");
  })
}

render_circle();
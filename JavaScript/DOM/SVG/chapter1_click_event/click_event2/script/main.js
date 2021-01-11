let render_rect = () => {
  const rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect1.setAttribute("id", "rect1");
  rect1.setAttribute("x", "0");
  rect1.setAttribute("y", "0");
  rect1.setAttribute("width", "512");
  rect1.setAttribute("height", "512");
  rect1.setAttribute("fill", "#000000");

  const rect1_svg = document.querySelector("#click_event2");
  rect1_svg.appendChild(rect1);

  rect1.addEventListener("click", (event) => {
    console.log("rectをクリックしました");
  })
}

let render_circle = () => {
  const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle1.setAttribute("cx", "256");
  circle1.setAttribute("cy", "256");
  circle1.setAttribute("r", "100");
  circle1.setAttribute("fill", "#ffdf00");
  circle1.setAttribute("stroke", "#ff0000");
  circle1.setAttribute("stroke-width", "5.0");

  const circle1_svg = document.querySelector("#click_event2");
  circle1_svg.appendChild(circle1);

  circle1.addEventListener("click", (event) => {
    console.log("circleをクリックしました");
  })
}

let main = () => {
  render_rect();
  render_circle();
}

main();


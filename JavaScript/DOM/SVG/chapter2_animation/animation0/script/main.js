const get_id = document.querySelector("#circle_test");
let time = 0;

let step = () => {
  time += 0.1;

  get_id.style.fill = `hsl(150, 100%, ${time}%)`;
  if(time < 50){
    requestAnimationFrame(step);
  }

  console.log(time);
}

let main = () => {
  step();
}

main();
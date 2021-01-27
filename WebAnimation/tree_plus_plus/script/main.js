const cloud1 = document.querySelector("#cloud1");
const cloud2 = document.querySelector("#cloud2");
const cloud3 = document.querySelector("#cloud3");


let time1 = 0;
let time2 = 0;
let time3 = 0;

let main = () => {
  time1 += 0.5;
  cloud1.setAttribute("cx", time1);
  cloud1.setAttribute("cy", 200);

  time2 += 0.7;
  cloud2.setAttribute("cx", time2);
  cloud2.setAttribute("cy", 400);
  
  time3 += 0.2;
  cloud3.setAttribute("cx", time2);
  cloud3.setAttribute("cy", 300);

  requestAnimationFrame(main);

}

main();
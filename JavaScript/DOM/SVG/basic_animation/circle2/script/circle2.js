const circle = document.querySelector("#circle2");
let time = 0;

let main = () => {
    let width = 800;
    let height = 600;
    const Max = width;
    let radius = 50;
    time += 0.5;
    circle.setAttribute("cx", time);
    circle.setAttribute("cy", height / 2);
    circle.setAttribute("r", radius);
    if(time > Max + radius){
        time = radius;
    }
    requestAnimationFrame(main);
    console.log(time);
}

main();
const circle = document.querySelector("circle");
let time = 0;

let main = () => {
    time += 1;
    circle.style.fill = `rgb(0, 200, 200)`;
    circle.setAttribute("cx", time);
    circle.setAttribute("cy", 512 / 2);
    if(time < 512){
        requestAnimationFrame(main);
    }
    console.log(time);
}

main();
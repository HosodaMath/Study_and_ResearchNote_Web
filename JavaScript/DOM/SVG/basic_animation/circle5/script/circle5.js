import { Vector2 } from "./vector.js";

const circle = document.querySelector("#circle5");
const start_button = document.querySelector(".start_button");

let location2 = new Vector2(0.0, 0.0);
//let velocity2 = new Vector2(0.0, 0.0);
let time = 0;

let set_window_size = () => {
    let width = 800;
    let height = 600;
    let size = new Vector2(width, height);
    
    return size;
}

let init = () => {
    let size = set_window_size();
    let init_location2 = size;
    circle.setAttribute("cx", init_location2.locationX / 2.0);
    circle.setAttribute("cy", init_location2.locationY / 2.0);
    circle.setAttribute("r", 50);
}

init();

let main = () => {
    let size = set_window_size();
    const Max = size.locationX;
    
    location2 = new Vector2(0.0, size.locationY / 2);
    //velocity2 = new Vector2(0.5, 0.0);
    let radius = 50;

    

    time += 0.5;
    //location2.add(velocity2);
    circle.setAttribute("cx", time);
    circle.setAttribute("cy", location2.locationY);
    circle.setAttribute("r", radius);
    document.querySelector(".log").innerHTML = `現在の座標は${time}`;
    if(time > Max + radius){
        time = radius;
    }
    requestAnimationFrame(main);
}

start_button.addEventListener("click", (event) => {
    main();
})


import { Vector2 } from "./vector.js";
const circle = document.querySelector("#circle3");
let location2 = new Vector2(0.0, 0.0);
//let velocity2 = new Vector2(0.0, 0.0);
let time = 0;

let set_window_size = () => {
    let width = 800;
    let height = 600;
    let size = new Vector2(width, height);
    
    return size;
}

let main = () => {
    let size = set_window_size();
    const Max = size.locationX;
    
    location2 = new Vector2(0.0, size.locationY / 2);
    //velocity2 = new Vector2(0.5, 0.0);
    let radius = 50;
    
    time += 1.5;
    //location2.add(velocity2);
    circle.setAttribute("cx", time);
    circle.setAttribute("cy", location2.locationY);
    circle.setAttribute("r", radius);
    
    if(time > Max + radius){
        time = radius;
    }
    

    requestAnimationFrame(main);
    console.log(time, location2.locationX, location2.locationY);
}

main();
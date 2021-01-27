let img_load1 = async () => {
  const response = await fetch("../image/cloud/cloud1.svg");
  const code = await response.text();
  document.getElementById("load_cloud1").innerHTML = code;
}

let img_load2 = async () => {
  const response = await fetch("../image/cloud/cloud2.svg");
  const code = await response.text();
  document.getElementById("load_cloud2").innerHTML = code;
}

let img_load3 = async () => {
  const response = await fetch("../image/cloud/cloud3.svg");
  const code = await response.text();
  document.getElementById("load_cloud3").innerHTML = code;
}



let main = () => {
  img_load1();
  img_load2();
  img_load3();
}

main();
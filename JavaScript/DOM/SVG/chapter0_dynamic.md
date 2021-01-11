## 0. SVG要素を動的に挿入する

### 0.0 円を１つ挿入する

```html
 <div>
   <svg viewBox="0 0 512 512" width="512" height="512" id="dynamic0"></svg>
 </div>
```

```js
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
```

### 0.1 矩形を１つ描く

```html
<div>
  <svg viewBox="0 0 512 512" width="512" height="512" id="dynamic1"></svg>
</div>
```

```js
let render_rect = () => {
  const rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect1.setAttribute("id", "rect1");
  rect1.setAttribute("x", "100");
  rect1.setAttribute("y", "100");
  rect1.setAttribute("width", "200");
  rect1.setAttribute("height", "100");
  rect1.setAttribute("fill", "#ffff00");

  const rect1_svg = document.querySelector("#dynamic1");
  rect1_svg.appendChild(rect1);
}

render_rect();
```

### 0.2 複数の図形を描画する

```html
<div>
  <svg viewBox="0 0 512 512" width="512" height="512" id="dynamic2"></svg>
</div>
```

```js
let render_rect = () => {
  const rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect1.setAttribute("id", "rect1");
  rect1.setAttribute("x", "0");
  rect1.setAttribute("y", "0");
  rect1.setAttribute("width", "512");
  rect1.setAttribute("height", "512");
  rect1.setAttribute("fill", "#000000");

  const rect1_svg = document.querySelector("#dynamic2");
  rect1_svg.appendChild(rect1);
}

let render_circle = () => {
  const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle1.setAttribute("cx", "256");
  circle1.setAttribute("cy", "256");
  circle1.setAttribute("r", "128");
  circle1.setAttribute("fill", "#ffff00");

  const circle1_svg = document.querySelector("#dynamic2");
  circle1_svg.appendChild(circle1);
}

let main = () => {
  render_rect();
  render_circle();
}

main();
```


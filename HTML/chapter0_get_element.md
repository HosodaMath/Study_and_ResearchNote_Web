# HTMLの要素を操作する方法

読む前に予めHTMLとCSSのページを読んでいるということを前提としています。

## セレクター名の要素を１つ取得する

セレクター名の種類を復習がてら列挙してみました。

- 全称セレクター

- HTMLタグ名(body, p, div ...etc)

- classセレクター(cssだとよく使う。おなじHTMLに複数使える。)

- idセレクター(主にJavaScriptで使う。おなじHTMLに1つしか使えない。)

今回は**JavaScriptなので通常セレクターと言ったらclassセレクターもしくはidセレクター**のことを指します。

### divタグに文字列を注入する

```html
<div id="str1"></div>
```

```js
const get_element_name = document.querySelector("#str1");
get_element_name.innerHTML = "Hello World"
```

### pタグに文字を注入する

```html
<p id="str2"></p>
```

```js
const get_element_name2 = document.querySelector("#str2");
get_element_name2.innerHTML = "pタグの文字を注入しました。";
```

書き換えるのにinnerHTMLを使いましたが書き方によってはこれらはサイバー攻撃の標的になるので原則使わないほうが良いのかもしれません。(また別にまとめる)

## セレクター名の要素をまとめて取得する

セレクター名が同一である場合はといえば通常classセレクターが該当します。(要素セレクターも該当しますが基本的な数が異なるので除外する)

例

```html
<div>
  <p class = "geometry">Box1</p>
  <p class = "geometry">Rect2</p>
  <p class = "geometry">Circle3</p>
</div>
```

### css図形の場合

```html
<div class="box">Box1</div>
<div class="box">Box2</div>
<div class="box">Box3</div>
<div class="box">Box4</div>
<div class="box">Box5</div>
```



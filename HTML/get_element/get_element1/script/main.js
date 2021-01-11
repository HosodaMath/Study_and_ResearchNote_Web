console.log("まとめて取得するには?");
document.querySelectorAll(".box").forEach((target) => {
  target.addEventListener("click", () => {
    console.log(`${target.textContent}`);
  });
});
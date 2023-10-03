const openRules = document.getElementById("rules");
const close = document.getElementById("close");
const rules = document.querySelector(".rules");

openRules.addEventListener("click", () => {
  rules.style.display = "block";
});

close.addEventListener("click", () => {
  rules.style.display = "none";
});

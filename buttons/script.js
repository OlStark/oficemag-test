document.body.onload = addButton;
const buttons = document.querySelectorAll("#button");

const data = [
  {
    title: "Просмотреть",
    type: primary,
    leftIcon: null,
    rightIcon: null,
    state: null,
    border: null,
  },
];

function addButton() {
  for (let item of buttons) {
    if (item.classList.contains("normal"));
    else {
      item.classList.add("normal");
    }
  }
}

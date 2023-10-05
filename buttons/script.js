const data = [
  {
    title: "Редактировать",
    type: "primary",
    leftIcon: "<img src='./icon8.png' alt='redact'/>",
    rightIcon: null,
    border: "passed",
  },
  {
    title: "Выгрузить в Exel",
    type: "primary",
    leftIcon: "<img src='./upload.png' alt='upload'/>",
    rightIcon: null,
    border: "passed",
  },
  {
    title: "Удалить список",
    type: "warning",
    leftIcon: "<img src='./delite.png' alt='delite'/>",
    rightIcon: null,
    border: null,
  },
  {
    title: "Распечатать",
    type: "passed",
    leftIcon: "<img src='./print.png' alt='print'/>",
    rightIcon: null,
    border: null,
  },
  {
    title: "Загрузить из файла",
    type: "primary",
    leftIcon: "<img src='./download.png' alt='download'/>",
    rightIcon: null,
    border: "primary",
  },
];

const createButton = (props) => {
  const button = document.createElement("button");
  let leftSlot = null;
  let rightSlot = null;

  if (props.rightIcon) {
    rightSlot = document.createElement("span");
    rightSlot.innerHTML = props.rightIcon;
  }
  if (props.leftIcon) {
    leftSlot = document.createElement("span");
    leftSlot.innerHTML = props.leftIcon;
  }

  const arr = [
    leftSlot,
    document.createTextNode(props.title),
    rightSlot,
  ].filter(Boolean);
  arr.forEach((elem) => button.appendChild(elem));

  if (props.type === "primary") {
    button.classList.add("normal");
  }
  if (props.type === "warning") {
    button.classList.add("warning");
  }
  if (props.type === "passed") {
    button.classList.add("passed");
  }

  if (props.border === "primary") {
    button.classList.add("outline-primary");
  }
  if (props.border === "warning") {
    button.classList.add("outline-warning");
  }
  if (props.border === "passed") {
    button.classList.add("outline-passed");
  }

  return button;
};

const root = document.querySelector("#app");
console.log(root);
data.forEach((button) => {
  root.appendChild(createButton(button));
});

let btn1 = document.getElementById("myButton1");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");
let color1 = "#051937 ";
let color2 = "#a8eb12";

let hexaValues = () => {
  let hexa = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color = color + hexa[Math.floor(Math.random() * 16)];
  }
  return color;
};

const handleBtn1 = () => {
  color1 = hexaValues();
  document.body.style.backgroundImage = `linear-gradient(to right top, ${color1} , ${color2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right , ${color1} , ${color2} )`;
  btn1.innerText = color1;
};

const handleBtn2 = () => {
  color2 = hexaValues();
  document.body.style.backgroundImage = `linear-gradient(to right top ,${color1} , ${color2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right, ${color1} , ${color2} )`;
  btn2.innerText = color2;
};

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);

copyDiv.addEventListener("click", () => {
  navigator.clipboard.writeText(copyDiv.textContent);
  alert("Copy Successfully");
});

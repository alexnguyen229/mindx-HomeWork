let btnD = document.getElementById("btn");
let txt = document.getElementById("text1");
let reSul = document.getElementById("result");
btnD.addEventListener("click", function (e) {
  // console.log(btnD);
  console.log("Upper It, just clicked");
  console.log(`User's name ${txt.value}`);
  console.log(`User's name uppercase: ${txt.value.toUpperCase()} `);
  reSul.innerHTML = txt.value.toUpperCase();
});
console.log(reSul);
txt.addEventListener("keydown", function (e) {
  console.log(e.target);
});

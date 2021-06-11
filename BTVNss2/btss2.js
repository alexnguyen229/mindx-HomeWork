// 1.1
for (let i = 0; i < 7; i++)
console.log(i);
// 1.2
let numberChoose = prompt("Nhập số kết thúc");
for (let i = 0; i < numberChoose; i++) {
  console.log(i);
}

// 1.3
let numberEnd = prompt("Nhập số kết thúc");
for (let i = 3; i < numberEnd; i++) {
  console.log(i);
}

// 1.4
let n = prompt("Nhập n");
let c = prompt("Nhập c");
for (let i = c; i < n; i++) {
  console.log(i);
}

//1.5
let n = Number(prompt("Nhập n"));
let c = Number(prompt("Nhập c"));
let s = Number(prompt("Nhập s"));
for (let i = c; i <= n; i += s) {
  console.log(i);
}

// bài 2
let n = prompt("Nhập n");
let match = 1;
for (let i = 1; i <= n; i++) {
  match = match *= i;
}
alert(`the factorial of ${n} is ${match}`);

// bài 3
let numberCheck = prompt("How old are you");
if (numberCheck <= 14) {
  alert(`You are trẻ trâu vl`);
} else alert(`You are người lớn nhé`);


// bài 4
let checkX = prompt("Nhập x");
if (checkX % 2 == 0) {
  alert(`even number`);
} else alert("odd number");

// // bài 5
let username = "";
let password = "";
while (
  username !== "mindx" ||
  password !== "codethechange" ||
  (username == "mindx" && password == "codethechange")
) {
  username = prompt("Nhập username ");
  password = prompt("Nhập password");
  if (username !== "mindx") {
    alert(`Sai username`);
  }
  if (password !== "codethechange") {
    alert(`Sai password`);
  }else alert(`Đăng nhập thành công`);
  
}

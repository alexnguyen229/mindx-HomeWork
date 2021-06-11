// //Bài 1
// let cloths = ['Áo','Quần','Váy']
// while (true){
//   let command = prompt('Welcome, do you want (C, R, U, D\n)' 
//   if(!command){
//     break;
//   }
//   // cover người dùng nhập vào
//   let cmd = command.toLowerCase();
//   if(cmd === "r"){
//     for(let i=0; i< cloths.length; i++){
//       console.log(`${i+1}. ${cloths[i]}`);
//     }
//   }else if ( cmd === "c"){
//     let newCloths = prompt("New item: ");
//     cloths.push(newCloths);
//     alert(`Done`);
//   }else if ( cmd === "u"){
//     let pos = prompt("Update postion: ");
//     let newCloths = prompt("Update name");
//     cloths[pos] = newCloths;
//     alert(`Done`);
//   }else if( cmd === "d"){
//     let pos = prompt("Delete position: ");
//     cloths.splice(pos, 1);
//     alert(`Done`);
//   }else alert(`Command is not supported`);
// }


// //bài 2
let arr = [3, 4, 6, -9, 10, -88, 2];
// let count = 0;
// for ( let i =0; i< arr.length; i++){
//   let number = arr[i];
//   if(number > 0) {
//     count++
//   }
// }
// console.log(count);


//bài 2.3
// //c1 : for
// let foundNumber = Number(prompt("Nhập số cần tìm: "));
// let foundIndex = -1;
// for(let i=0; i<arr.length;i++) {
//   let number = arr[i];
//   if(number === foundNumber){
//     alert("Tìm thấy ở index " + i );
//     foundIndex = i;
//     break;
//   }
// }
// if(foundIndex === -1) {
//   alert(`Không tìm thấy`);
// }




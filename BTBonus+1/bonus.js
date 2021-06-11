// // // bài 1
// let reverse = prompt("Nhập chữ cần đảo ngược");
// let reversed = "";
// for (let i = reverse.length - 1; i >= 0; i--) {
//   reversed += reverse[i];
// }
// alert(reversed);

// // bài 2
// let arrPromt = prompt("Nhập vào chữ cần viết hoa chữ cái đầu: ").split(" ");
// let arrEmpty = [];
// for (let i = 0; i < arrPromt.length; i++) {
//   arrEmpty.push(arrPromt[i].charAt(0).toUpperCase() + arrPromt[i].slice(1));
// }
// alert(arrEmpty.join(" "));

// // bài 3
// let input = prompt('Input array, separated by ","').split(",");
// arrayOutput = [];
// for (let i = 0; i < input.length; i++) {
//   if (!arrayOutput.includes(input[i])) {
//     arrayOutput.push(input[i]);
//   }
// }
// console.log(arrayOutput);
// alert(arrayOutput);
// //bài 4
// let employee = [
//   {
//     name: "Dat",
//     age: 21,
//     slary: 20000000,
//     position: "employee",
//   },
//   {
//     name: "Ha",
//     age: 21,
//     slary: 15000000,
//     position: "employee",
//   },
//   {
//     name: "Hoang",
//     age: 21,
//     slary: 10000000,
//     position: "employee",
//   },
// ];
// while (true) {
//   let menu = prompt("Input command (C, R, U, D, ): ");
//   if (!menu) {
//     break;
//   }
//   let cmd = menu.toLowerCase();
//   if (cmd === "r") {
//     for (let i = 0; i < employee.length; i++) {
//       console.log(`${i + 1}.`);
//       console.log(`Name: ${employee[i].name}`);
//       console.log(`Age: ${employee[i].age}`);
//       console.log(`Slary: ${employee[i].slary}`);
//       console.log(`Position: ${employee[i].position}`);
//     }
//   } else if (cmd === "c") {
//     let name = prompt(" điền tên nhân viên mới: ");
//     let age = prompt(" điền tuổi nhân viên mới: ");
//     let slary = prompt(" điền lương nhân viên mới: ");
//     let position = prompt(" điền chức vụ của nhân viên mới: ");
//     let emptyStr = {};
//     emptyStr.name = name;
//     emptyStr.age = age;
//     emptyStr.slary = slary;
//     emptyStr.position = position;
//     employee.push(emptyStr);
//     alert(`done`);
//   } else if (cmd === "u") {
//     let indexEmp = prompt(`nhập vào index mà bạn muốn cập nhật : `) - 1;
//     let property = prompt(
//       `nhập vào property mà bạn muốn cập nhật VD:name,age,slary.. : `
//     );
//     let value = prompt(`nhập vào giá trị bạn muốn cập nhật: `);
//     employee[indexEmp][property] = value;
//     console.log(employee);
//   } else if (cmd === "d") {
//     let del = Number(prompt("Nhập vị trí mà bạn muốn xóa: ")) - 1;
//     employee.splice(del, 1);
//   } else {
//     alert(`Vui lòng kiểm tra lại cú pháp menu`);
//   }
// }

// //Bai 5
// let day = Number(prompt("Chọn ngày :"));
// let month = Number(prompt("Chọn tháng :"));
// let year = Number(prompt("Chọn năm :"));
// let leapYear = function (lYear) {
//   if (
//     (lYear % 4 === 0 && lYear % 100 !== 0 && lYear % 400 !== 0) ||
//     (lYear % 100 === 0 && lYear % 400 === 0)
//   ) {
//     return lYear + " Leap year";
//   } else {
//     return lYear + " Not leap year";
//   }
// };
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12: {
//     if (day > 0 && day <= 31) {
//       alert("Đúng!");
//     } else alert("Không hợp lệ!");
//     break;
//   }
//   case 2: {
//     if (day > 0 && day <= 28 + leapYear) {
//       alert("Đúng!");
//     } else alert("Không hợp lệ!");
//     break;
//   }
//   case 4: {
//     if (day > 0 && day <= 30) {
//       alert("Đúng!");
//     } else alert("Không hợp lệ!");
//     break;
//   }
//   default:
//     alert("Không hợp lệ!");
//     break;
// }

let staffs = [
        { name: "Nguyen Anh Kien", old: 22, salary: 200, dept: "student" },
        { name: "Nguyen Anh Tuan", old: 24, salary: 600, dept: "teacher" },
        { name: "Pham Thi Hai Yen", old: 20, salary: 200, dept: "student" }
    ];
while (true) {
        let quit = true;
        var num = Number(prompt("Hi there, welcome to admin panel, what do you want?\n" +
            "1. Create\n" +
            "2. Read\n" +
            "3. Update\n" +
            "4. Delete\n" +
            "5. Exit\n" +
            "Enter number to choose a panel!"));
        if (!num)
            quit = false;
        switch (num) {
            case 1:
                addStaff();
                break;
            case 2:
                for (let x in staffs)
                    console.log(staffs[x]);
                break;
            case 3:
                updateStaff();
                break;
            case 4:
                deleteStaff();
                break;
            case 5:
                alert("Good bye!");
                quit = false;
                break;
        }
        if (quit == false) {
            break;
        }
    }
    
    function addStaff() {
        let stName = prompt("Input name: ");
        let stOld = Number(prompt("Input old: "));
        let stSalary = Number(prompt("Input salary: "));
        let stDept = prompt("Input department: ");
        staffs.push({
            name: stName,
            old: stOld,
            salary: stSalary,
            dept: stDept
        });
    }
    
    function updateStaff() {
        let pos = Number(prompt("input index: "));
        let chooseProp = prompt("Choose property you want to update (name/old/salary/department)?");
        if (chooseProp === "old" || chooseProp === "salary") {
            let propt = Number(prompt(`Input new ${chooseProp} you want to update:`));
            staffs[pos][chooseProp] = propt;
        }
        else {
            let propt = prompt(`Input new ${chooseProp} you want to update:`);
            staffs[pos][chooseProp] = propt;
        }
    }
    
    function deleteStaff() {
        let pos = Number(prompt("input index u want to delete"));
        delete staffs[pos];
    }
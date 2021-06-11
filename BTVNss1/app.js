//1.1 Hiện thị ra Dev Tool biến message với giá trị ‘Coding is great’

let message = 'Coding is great';
console.log(message);
//1.3 Với biến message , biến đổi giá trị message thành chữ thường (coding is great), hiện thị ra Dev Tool 
// message = message.toLowerCase();
let nun = message.toLowerCase;
console.log(message.toLowerCase());




// 1.2 Hiện thị ra Dev Tool biến studentCount với giá trị 22
// 1.4 Với biến studentCount ở phần 2.2, tăng giá trị biến lên 1, hiện thị ra Dev Tool
let studentCount = 22;

console.log(studentCount);
studentCount++;
console.log(studentCount);



// Bài 2 Viết chương trình thông báo cho người dùng “Ngày hôm nay đẹp quá”
alert('Ngày hôm nay đẹp quá');
// Bài 3 Viết chương trình yêu cầu người dùng nhập lần lượt họ, tên, sau đó thông báo xin chào người đó
let firstName = prompt('Họ của bạn là gì');
console.log(firstName);
let secondName = prompt('Tên của bạn là gì');
console.log(secondName);

alert(`Xin chào ${firstName} ${secondName}`);

// Bài 4. Viết chương trình yêu cầu người dùng nhập lần lượt chiều dài và chiều rộng của hình chữ nhật. Thông báo ra diện tích của hình chữ nhật.
let lenght = prompt('Chiều dài HCN là ');
console.log(typeof lenght);
let lenghtx = Number (lenght);
console.log(typeof lenghtx);
let width = prompt('Chiều rộng HCN là');
console.log(typeof width);
let widthx = Number (width);
console.log(typeof widthx);
let area = (lenght * width);
alert(`Diện tích của HCN là ${lenght * width}`);


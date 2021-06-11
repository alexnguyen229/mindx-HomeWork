// 1
let keyword = {
  debug:
    "The process of figuring out why your program has a certain error and how to fix it",
  done:
    "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
  defect: "The formal word for 'error'",
  pm:
    "The short version  of Project Manager, the person in charge of the final result of a project",
  uiux:
    "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
};

// 1.1 , 1.2
while (true) {
  alert(`Hi there, this is dev dictionary`);
  let command = prompt("Enter a keyword");
  if (!command) {
    break;
  }
  let cmd = command.toLowerCase();
  if (keyword[cmd] === undefined) {
    let addWord = prompt(
      `we could not find your keyword ${cmd}, pls explaint this`
    );
    keyword[cmd] = addWord;
  } else {
    alert(`${cmd} \n${keyword[cmd]}`);
  }
}

//2
const product = {
  name: "Xiaomi rice cooker",
  price: 1700,
  brand: "Xiaomi",
  color: "white",
};
for (let x in product) {
  console.log(x, product[x]);
}

//2.1
// Biến x có giá trị là property.

// 3
let products = [
  {
    name: "Xiaomi portable charger 20000mah",
    brand: "Xiaomi",
    price: 480,
    color: "White",
    category: "charger",
  },
  {
    name: "VSmart Active 1",
    brand: "VSmart",
    price: 5487,
    color: "Black",
    category: "phone",
  },
  {
    name: "IPhone X",
    brand: "Apple",
    price: 21490,
    color: "Gray",
    category: "phone",
  },
  {
    name: "Samsung galaxy A9",
    brand: "Samsung",
    price: 8490,
    color: "Blue",
    category: "phone",
  },
];

// 3.1
for (let x in products) {
  console.log(`\n---------------------------------`);
  console.log(`name :`, products[x].name);
  console.log("price: ", products[x].price);
}

// 3.2
for (let i = 0; i < products.length; i++) {
  console.log(
    `#${i + 1}. ${products[i].name}\n    Price: ${products[i].price}`
  );
}

let productPosition = Number(prompt("Enter product position:"));
for (let i = 0; i < products.length; i++) {
  for (let x in products[i]) {
    if (productPosition === i) {
      console.log(`${x}: ${products[i][x]}`);
    }
  }
}

//3.3
let categoryTake = prompt("Enter your Category: ").toLowerCase();
for (let i = 0; i < products.length; i++) {
  if (categoryTake === products[i].category) {
    console.log(`\n------------------------------------`);
    console.log(`Name : ${products[i].name}\nPrice : '${products[i].price}`);
  }
}

//3.4
products[0].provider = [`phukienzero`, `dientuccc`];
products[1].provider = [`tgdd`, `ddghn`, `vhStore`];
products[2].provider = [`tgdd`];
products[3].provider = [`tgdd`];
for (let i = 0; i < products.length; i++) {
  console.log(
    `#${i + 1} ${products[i].name}\n Name: ${products[i].price}\n Provider: ${
      products[i].provider
    }`
  );
}

//3.5
let getProviceInput = prompt("Enter your provide: ").toLowerCase();
for (let x in products) {
  if (products[x].provider.includes(getProviceInput)) {
    console.log(`\n-------------------------`);
    console.log(
      `Name: ${products[x].name}\nBrand: ${products[x].brand}\nPrice: ${products[x].price}\nColor: ${products[x].color}\nCategory: ${products[x].category}\nProviders: ${products[x].provider}`
    );
  }
}

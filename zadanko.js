//Zadanie 1
const number = prompt("Podaj wartosc: ");

if (!Number.isFinite(parseFloat(number))) {
  console.log("Niepoprawna wartosc");
} else {
  const result = number % 2 == 0 ? "parzysta" : "nieparzysta";
  console.log(`Wartosc ${result}`);
}

//Zadanie 2
var a = Math.floor(Math.random() * 10) + 1;
var b = Math.floor(Math.random() * 10) + 1;

const temp = (a, b) => {
  console.log(a, b);
  var decide = prompt("Jaka operacje chcesz wykonac: + | - | * | / ");
  switch (decide) {
    case "+":
      document.write(`Suma wynosi ${a + b}`);
      break;
    case "-":
      document.write(`Roznica wynosi ${a - b}`);
      break;
    case "*":
      document.write(`Iloczyn wynosi ${a * b}`);
      break;
    case "/":
      document.write(`Iloraz wynosi ${a / b}`);
      break;
    default:
      document.write("Niepoprawna wartosc");
  }
};

temp(a, b);

//Zadanie 3
const firstNumber = prompt("Podaj wartosc: ");
const secondNumber = prompt("Podaj wartosc: ");
var operators = [
  {
    sign: "+",
    method: function (a, b) {
      return a + b;
    },
  },
  {
    sign: "-",
    method: function (a, b) {
      return a - b;
    },
  },
  {
    sign: "*",
    method: function (a, b) {
      return a * b;
    },
  },
  {
    sign: "/",
    method: function (a, b) {
      return a / b;
    },
  },
];

if (
  Number.isFinite(parseFloat(firstNumber)) &&
  Number.isFinite(parseFloat(secondNumber))
) {
  var selectedOperator = Math.floor(Math.random() * operators.length);
  document.write(
    operators[selectedOperator].method(
      parseInt(firstNumber, 10),
      parseInt(secondNumber, 10)
    )
  );
}

//Zadanie 4
for (let i = 1; i <= 11; i++) {
  console.log(`${2 ** i}`);
}

//Zadanie 5
var i = 3333;
while (i > 200) {
  i /= 3;
  console.log(i);
}

//Zadanie 6
var a = prompt("Podaj liczbe: ");

if (Number.isFinite(parseFloat(a))) {
  i = 1;
  do {
    console.log(`${a ** i}`);
    i++;
  } while (i <= 5);
}

//Zadanie 7
var height = prompt("Podaj wysokosc trojkata: ");
result = "";
if (Number.isFinite(parseFloat(height))) {
  for (let i = parseInt(height, 10) - 1; i >= 0; i--) {
    result += `${" ".repeat(i)}${"X".repeat(
      2 * (parseInt(height, 10) - i) - 1
    )}\n`;
  }
  console.log(result);
} else {
  console.log("Niepoprawna wartosc");
}

//Zadanie 8
i = 999;
while (i > 1) {
  if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
    break;
  }
  i--;
}
console.log(i);

//Zadanie 9
booksTitles = [];
booksTitles.push("cat");
booksTitles.push("dog");
booksTitles.push("horse");
booksTitles.push("catfish");
booksTitles.push("duck");
console.log(booksTitles);

//Zadanie 10
temp = booksTitles.pop();
booksTitles.unshift(temp);
console.log(booksTitles);

//Zadanie 11
if (booksTitles.length % 2 == 1) {
  //return booksTitles[(booksTitles.length - 1) / 2];
  console.log(booksTitles[(booksTitles.length - 1) / 2]);
} else {
  //return booksTitles[booksTitles.length / 2 - 1];
  console.log(booksTitles[booksTitles.length / 2 - 1]);
}

//Zadanie 12
booksTitles = [];
booksTitles.push("cat");
booksTitles.push("dog");
booksTitles.push("horse");
booksTitles.push("catfish");
booksTitles.push("duck");
for (let i in booksTitles.reverse()) {
  console.log(booksTitles[i]);
}

//Zadanie 13
booksTitles = [];
booksTitles.push("cat");
booksTitles.push("dog");
booksTitles.push("horse");
booksTitles.push("catfish");
booksTitles.push("duck");

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

shuffle(booksTitles);
console.log(booksTitles);

//Zadanie 14
booksTitles = [];
booksTitles.push("cat");
booksTitles.push("abba");
booksTitles.push("horse");
booksTitles.push("catfish");
booksTitles.push("natan");
for (let i in booksTitles) {
  if (booksTitles[i] == booksTitles[i].split("").reverse().join("")) {
    console.log(`Posiada palindrom, ktorym jest ${booksTitles[i]}`);
  }
}

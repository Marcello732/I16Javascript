//Marcel Baczynski i Damian Brudkowski 4PTB
//Zadanko1
const fs = require("fs");
const data = fs.readFileSync(
  "/Users/damianbrudkowski/Downloads/liczby.txt",
  "UTF-8"
);
const lines = data.split(/\r?\n/);
let sum = 0;
let ifok = false;
lines.forEach((line) => {
  // console.log(line);
  if (line[0] == line[line.length - 1]) {
    if (!ifok) {
      console.log(line);
      ifok = true;
    }
    sum += 1;
  }
});
console.log("Suma " + sum);

//Zadanko2
const fs = require("fs");
const data = fs.readFileSync(
  "/Users/damianbrudkowski/Downloads/liczby.txt",
  "UTF-8"
);
const lines = data.split(/\r?\n/);
var sumarr = [];
var temp = [];
lines.forEach((line) => {
  sum = 0;
  let k = 2;
  let temp2 = [];
  while (line > 1) {
    while (line % k == 0) {
      sum++;
      line /= k;
      if (!temp2.includes(k)) {
        temp2.push(k);
      }
    }
    ++k;
  }
  sumarr.push(sum);
  temp.push(temp2);
});

console.log(temp);

console.log(
  "Liczba z najwieksza liczba czynnikow pierwszych: " +
    lines[sumarr.indexOf(Math.max(...sumarr))] +
    "\nLiczba czynnikow: " +
    sumarr.indexOf(Math.max(...sumarr))
);
const lengths = temp.map((a) => a.length);
console.log(lengths.indexOf(Math.max(...lengths)));
console.log(
  "Liczba z najwieksza liczba roznych czynnikow pierwszych: " +
    lines[lengths.indexOf(Math.max(...lengths))] +
    "\nLiczba czynnikow: " +
    lengths[lengths.indexOf(Math.max(...lengths))]
);

//Zadanko3

const fs = require("fs");
const data = fs.readFileSync(
  "/Users/damianbrudkowski/Downloads/liczby.txt",
  "UTF-8"
);
const lines = data.split(/\r?\n/);
let numbers = [];
let sum = 0;
sum2 = 0;
lines.forEach((line) => {
  numbers.push(line);
});
numbers.sort(function (a, b) {
  return a - b;
});
numbers.shift();
// console.log(numbers)
goodThrees = [];
for (i = 0; i <= numbers.length - 1; i++) {
  for (j = i + 1; j <= numbers.length - 1; j++) {
    if (numbers[j] % numbers[i] == 0) {
      for (k = j + 1; k <= numbers.length - 1; k++) {
        if (numbers[k] % numbers[j] == 0) {
          sum++;
          console.log(numbers[i] + " " + numbers[j] + " " + numbers[k] + "\n");
          const content =
            numbers[i] + " " + numbers[j] + " " + numbers[k] + "\n";
          fs.appendFile(
            "/Users/damianbrudkowski/Documents/Programming_stuff/js/trojki.txt",
            content,
            (err) => {
              if (err) {
                console.error(err);
              }
            }
          );
          for (l = k + 1; l <= numbers.length - 1; l++) {
            if (numbers[l] % numbers[k] == 0) {
              for (m = l + 1; m <= numbers.length - 1; m++) {
                if (numbers[m] % numbers[l] == 0) {
                  sum2++;
                }
              }
            }
          }
        }
      }
    }
  }
}
console.log("Liczba dobrych trojek: " + sum);
console.log("Liczba dobrych piatek: " + sum2);

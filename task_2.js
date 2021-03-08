// 1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
function vidp1(fNum, sNum) {
  if (fNum > sNum) {
    return fNum;
  } else if (sNum > fNum) {
    return sNum;
  } else {
    return "Числа однакові";
  }
}
let root = document.getElementsByClassName("root")[0];
let z1 = document.createElement("p");
z1.textContent =
  "1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них.";
root.appendChild(z1);
let v1 = document.createElement("p");
v1.textContent = "Результат: " + vidp1(4, 5);
root.appendChild(v1);

// 2. Написать функцию, которая возводит переданное число в указанную степень.
function vidp2(num, st) {
  if (st == 1) return num;
  return vidp2(num, st - 1) * num;
}
let z2 = document.createElement("p");
z2.textContent =
  "2. Написать функцию, которая возводит переданное число в указанную степень.";
root.appendChild(z2);
let v2 = document.createElement("p");
v2.textContent = "Результат: " + vidp2(4, 5);
root.appendChild(v2);

// 3. Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат.
function vidp3(fNum, sNum, znak) {
  switch (znak) {
    case "+":
      rez = fNum + sNum;
      break;
    case "-":
      rez = fNum - sNum;
      break;
    case "*":
      rez = fNum * sNum;
      break;
    case "/":
      rez = fNum / sNum;
      break;
    default:
      "Wrong operator";
  }
  return rez;
}
let z3 = document.createElement("p");
z3.textContent =
  "3. Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат.";
root.appendChild(z3);
let v3 = document.createElement("p");
v3.textContent = "Результат: " + vidp3(4, 5, "*");
root.appendChild(v3);

// 4. Написать функцию, которая проверяет, является ли переданное ей число простым.
function vidp4(num) {
  if (num < 2) {
    return "Число повинно бути більше 1";
  } else if (num === 2) {
    return "Просте число";
  }
  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return "Складене число";
    }
    i += 1;
  }
  return "Просте число";
}
let z4 = document.createElement("p");
z4.textContent =
  "4. Написать функцию, которая проверяет, является ли переданное ей число простым.";
root.appendChild(z4);
let v4 = document.createElement("p");
v4.textContent = "Результат: " + vidp4(5);
root.appendChild(v4);

// 5. Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.
function vidp5(num) {
  for (let j = 2; j <= 9; j++) {
    let v5_1 = document.createElement("p");
    v5_1.textContent = `${num} * ${j} = ${num * j}`;
    root.appendChild(v5_1);
  }
}
function vidp5_1() {
  for (let i = 2; i <= 9; i++) {
    vidp5(i);
  }
}
let z5 = document.createElement("p");
z5.textContent =
  "5. Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.";
root.appendChild(z5);
let v5 = document.createElement("p");
v5.textContent = vidp5_1();
root.appendChild(v5);

// 6. Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. В функции использовать только + - * /, оператор % не использовать.
function vidp6(a, b) {
  return (rez = a - parseInt(a / b) * b);
}
let z6 = document.createElement("p");
z6.textContent =
  "6. Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. В функции использовать только + - * /, оператор % не использовать.";
root.appendChild(z6);
let v6 = document.createElement("p");
v6.textContent = "Результат:" + vidp6(45, 12);
root.appendChild(v6);

// 7. Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.
let A = [];
summa = 0;
for (let j = 1; j <= 5; j++) {
  A.push(Math.ceil(Math.random() * 11) - 1);
}
function vidp7(A) {
  for (let i = 0; i < 5; i++) {
    summa += A[i];
  }
  return summa;
}
let z7 = document.createElement("p");
z7.textContent =
  "7. Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.";
root.appendChild(z7);
let v7 = document.createElement("p");
v7.textContent = "Результат:" + vidp7(A);
root.appendChild(v7);

// 8. Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.
let B = [];
function vidp8(B) {
  for (let j = 1; j <= 5; j++) {
    B.push(Math.ceil(Math.random() * 11) - 1);
  }
  max = B[0];
  for (i = 1; i < 5; i++) {
    if (B[i] > max) {
      max = B[i];
    }
  }
  return max;
}
let z8 = document.createElement("p");
z8.textContent =
  "8. Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.";
root.appendChild(z8);
let v8 = document.createElement("p");
v8.textContent = "Результат:" + vidp8(B);
root.appendChild(v8);

// 9. Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).
function vidp9(start, end, even = true) {
  for (i = start; i <= end; i++) {
    if (i % 2 == 0) {
      if (even) {
        let v9_1 = document.createElement("p");
        v9_1.textContent = i;
        root.appendChild(v9_1);
      }
    } else if (i % 2 == 1) {
      if (even == false) {
        let v9_1 = document.createElement("p");
        v9_1.textContent = i;
        root.appendChild(v9_1);
      }
    }
  }
}
let z9 = document.createElement("p");
z9.textContent =
  "9. Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).";
root.appendChild(z9);
let v9 = document.createElement("p");
v9.textContent = vidp9(2, 20, false);
root.appendChild(v9);

// 10. Написать функцию, которая принимает дату (день, месяц, год) и возвращает дату следующего дня в виде строки «дд.мм.гггг». Проверку на високосный год желательно написать отдельной функцией.
function vidp10(day, month, year) {
  daysInMonth = 0;
  function yyear(year) {
    daysInMonth = 28;
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      daysInMonth = 29;
    }
  }
  if (day <= 0 || day >= 32) {
    return "Invalid day";
  }
  if (month <= 0 || month >= 13) {
    return "Invalid month";
  }
  if (year < 0) {
    return "Invalid year";
  }
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      daysInMonth = 31;
      break;
    case 2:
      yyear(year);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      daysInMonth = 30;
      break;
  }

  day++;
  if (day > daysInMonth) {
    month++;
    day = 1;
  }
  if (month > 12) {
    year++;
    month = 1;
  }
  return `${day}.${month}.${year}`;
}
let z10 = document.createElement("p");
z10.textContent =
  "10. Написать функцию, которая принимает дату (день, месяц, год) и возвращает дату следующего дня в виде строки «дд.мм.гггг». Проверку на високосный год желательно написать отдельной функцией.";
root.appendChild(z10);
let v10 = document.createElement("p");
v10.textContent = "Результат:" + vidp10(3, 13, 2222);
root.appendChild(v10);

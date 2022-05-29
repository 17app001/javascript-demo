
const PI = 3.1415926;
// PI = 3.15926;
/*console.log(PI);

let x = 10;
if (x >= 10) {
    let x = "5";
    console.log(x, "面積為", x ** 2 * PI, typeof (x));
}

document.write("<h2 style='color:red'>面積為" +
    x ** 2 * PI + "</h2>");
// alert("面積為" + x ** 2 * PI);
console.log(x, typeof (x));*/


// let email = "jerry@gmail.com";
// console.log(email, typeof (email), email.length);
// console.log(email[0], email[email.length - 1]);
// console.log(email.slice(0, 5));
// console.log(email.includes("jerry"));
// email = email.replace("jerry", "mary");
// console.log(email);
// console.log("jerry" == "Jerry");

// i++  ==> i+=1 ==>i=i+1
// for (let i = 0; i < email.length; i++) {
//     console.log(i, email[i]);
//     document.write(email[i] + "<br>");
// }

let x = String(10);
let y = Number("10");
//  0==>false

x = 0;
x = 0.0;
x = false;
x = "";
x = null;

x = 5.6;
console.log(Math);
console.log(Math.PI);
console.log(x);
console.log(Math.abs(x));
// ceil 大於等於的整數
console.log(Math.ceil(x));
// floor 小於等於整數
console.log(Math.floor(x));
// round 四捨五入
console.log(Math.round(x));

// 亂數(0~1之間浮點數)
x = Math.random();
console.log(x);
console.log(x * 10);
// 0~10之間整數(0~9)==>(1~10)
console.log(Math.floor(x * 10) + 1);
// 1~49
console.log(Math.floor(x * 49) + 1);
// 10~100
Math.floor(Math.random() * (100 - 10 + 1)) + 10;

const START = 1;
const END = 49;
console.log("===================");

for (let i = 0; i < 6; i++) {
    let number = Math.floor(Math.random() * (END - START + 1)) + START;
    console.log("第" + (i + 1) + "個號碼為:" + number);
    const output = `第${i + 1}個號碼為:${number}`;

    console.log(output);
    document.write(output + "<br>");
}

// 反引號
x = 10;
console.log("數字為" + x);
console.log(`數字為${x}`);

console.log("===================");

// 陣列
let data = [];
let data1 = new Array();
data = ["2022", "5", 29];
data1 = ["13", "10"];

console.log(data.length);
console.log(data.join("-"));
console.log(data.indexOf("2022"));
let data2 = data.concat(data1);
console.log(data2);
console.log("------------------");
// 取值
console.log(data[data.length - 1]);
// 增加值 (push)
data1.push(["56", "57", "58"]);
console.log(data1);
//從後移除 先進先出(pop)
data1.pop();

// console.log(data1);
// let str1 = "";
// for (let i = 0; i < data.length; i++) {
//     if (i != data.length - 1) {
//         str1 += data[i] + "-";
//     } else {
//         str1 += data[i];
//     }
// }

// console.log(str1);


// 一維
count = 5;
let lotto = new Array();
for (let j = 0; j < count; j++) {
    let numbers = [];
    for (let i = 0; i < 6; i++) {
        let number = Math.floor(Math.random() * (END - START + 1)) + START;
        // numbers[i] = number;
        numbers.push(number);
    }
    // console.log(numbers);
    lotto.push(numbers);
}
console.log(lotto);
console.log("------------------");
let ulStr = "<h1>樂透號碼</h1><ul>";
for (i = 0; i < lotto.length; i++) {
    console.log(lotto[i].join(","));
    ulStr += `<h2><li>${lotto[i].join(",")}</li></h2>`;
}
ulStr += "</ul>";
document.write(ulStr);

// 二維陣列
let students = [
    ['jerry', 78, 67, 89],
    ['mary', 100, 99, 88, 100],
    ['kevin', 77, 99],
];

console.log(students.length);
console.log(students[0].length);

// 總分平均分
for (let i = 0; i < students.length; i++) {
    let name = students[i][0];
    let scores = students[i].slice(1, students[i].length);
    // console.log(name, scores);
    let total = 0;
    for (let j = 0; j < scores.length; j++) {
        total += scores[j];
    }
    avg = total / scores.length;
    console.log(name, total, avg);
}

// console.log(students[2].length);


let data3 = ["1", "2", "3"];
delete data3[1];
console.log(data3);
data3[1] = 1;
console.log(data3);
if (1 in data3) {
    console.log(1);
}

if (data3.includes("1")) {
    console.log(1);
}

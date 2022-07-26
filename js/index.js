

// 宣告樂透function
function getRandomNumber(start, end, numbers) {
    let lotto = [];
    for (let i = 0; i < numbers; i++) {
        let n = Math.floor(Math.random() * (end - start + 1)) + start;
        lotto.push(n);
    }

    return lotto;
}


console.log(Math.PI);
const x = 7.7;
console.log(x, typeof x);
// 7.7
console.log(Math.abs(x));
// 8
console.log(Math.ceil(x));
// 7
console.log(Math.floor(x));
// 8
console.log(Math.round(x));

// 亂數 0~1 的浮點數
console.log(Math.random());

// 0~10之間的浮點數亂數(0~9.9999999999)



let start = 1;
let end = 100;
for (let i = 0; i < 6; i++) {
    let n = Math.floor(Math.random() * (end - start + 1)) + start;
    // console.log("第" + (i + 1) + "個號碼:" + n);
    console.log(`第${i + 1}個號碼:${n}`);
    // document.write(`<h2>第${i + 1}個號碼:${n}</h2>`);
}


let ulStr = "<ul>";

for (let j = 0; j < 5; j++) {
    let str = "";
    for (let i = 0; i < 6; i++) {
        let n = Math.floor(Math.random() * (end - start + 1)) + start;
        str += n + "\t";
    }
    console.log(str);
    ulStr += `<li>${str}</li>`;
}

ulStr += "</ul>";
// 5document.write(ulStr);


let data = ["A", "B", 123, 456.5];
console.log(data);
console.log(data.length);
console.log(data[0]);
console.log(data[data.length - 1]);
console.log(data.join("-"));

for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

console.log(data.pop());
console.log(data);

data.push("jerry");
console.log(data);

let students = [
    ['jerry', 78, 67, 89],
    ['mary', 100, 99, 88],
    ['kevin', 77, 99, 77],
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
    let name = students[i][0];
    let total = 0;
    for (let j = 1; j < students[i].length; j++) {
        console.log(students[i][j]);
        total += students[i][j];
    }

    let avg = total / (students[i].length - 1);
    console.log(name, total, avg.toFixed(2));
}


let lotto = [];
const count = prompt("請輸入幾組號碼?")
// const count = 5;
for (let j = 0; j < count; j++) {
    lotto.push(getRandomNumber(1, 50, 5));
}

console.log(lotto);


ulStr = "<ul>";
for (let i = 0; i < lotto.length; i++) {
    let str = "";
    for (let j = 0; j < lotto[i].length; j++) {
        let n = Math.floor(Math.random() * (end - start + 1)) + start;
        str += lotto[i][j] + "&nbsp&nbsp&nbsp";
    } 1

    ulStr += `<li>${str}</li>`;
}

ulStr += "</ul>";
document.write(ulStr);



let a = false;
total = 0;

// while (true) {
//     let x = prompt("輸入數字(q:exit)");
//     if (x == "q") {
//         break;
//     }
//     if (isNaN(x)) {
//         console.log("輸入錯誤!");
//         continue;
//     }
//     total += Number(x);
//     console.log(total);
// }

// alert(`sum:${total}`);

a = "30.123.34";

console.log(Number(a));
console.log(parseInt(a));
console.log(parseFloat(a));


// 函式表達式
const getRandInt = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;

console.log(getRandInt(10, 100));

// 單一亂數function
function getRandomNumber(start, end) {
    let number = Math.floor(Math.random()
        * (end - start + 1)) + start;

    return number;
}

// 取得樂透號碼function
function getLottoNumbers(start, end, count = 6, special = true) {
    let numbers = [];
    do {
        let number = getRandInt(start, end);
        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    } while (numbers.length < count);

    // 排序
    console.log(numbers.sort((a, b) => {
        return a - b;
    }));

    // 特別號
    if (special) {
        numbers.push(getRandInt(start, end));
    }

    return numbers;
}

let count = prompt("請輸入筆數:");
let ulStr = "<h1>樂透號碼</h1><ul>";

for (let i = 0; i < count; i++) {
    let lotto = getLottoNumbers(1, 49);
    console.log(lotto);
    ulStr += `<h2><li>${lotto.join(",")}</li></h2>`;
}
ulStr += "</ul>";
document.write(ulStr);
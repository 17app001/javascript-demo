

const h1El = document.querySelector("h1");



h1El.innerText = "<h2>大樂透2022/7/28</h2>";
h1El.innerHTML = "<h2 style='color:red'>大樂透2022/7/28</h2>";



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
// const count = prompt("請輸入幾組號碼?")
const count = 5;
for (let j = 0; j < count; j++) {
    lotto.push(getLottoNumber(1, 50, 5));
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


// 宣告樂透function
function getLottoNumber(start, end, numbers, special = false) {
    let lotto = [];

    do {
        let n = Math.floor(Math.random() * (end - start + 1)) + start;
        if (!lotto.includes(n)) {
            lotto.push(n);
        }
    } while (lotto.length < numbers);

    // 排序
    lotto.sort((a, b) => a - b);

    if (special) {
        let n = Math.floor(Math.random() * (end - start + 1)) + start;
        lotto.push(n);
    }

    return lotto;
}


function getBmi(height, weight, point = 2) {
    bmi = weight / (height / 100) ** 2;

    if (isNaN(bmi)) {
        return "數值傳入有誤!";
    }

    return bmi.toFixed(point);
}

const getBmi2 = (height, weight, point = 2) => (weight / (height / 100) ** 2).toFixed(point);


console.log(getBmi("a", "54.5", point = 3));
console.log(getBmi2("176", "58.5", point = 3));

a = "35.5";

console.log(parseInt(a) + 10);

console.log(getLottoNumber(1, 49, 6, special = true));


let user = {
    name: 'jerry',
    email: 'jerry@gmail.com',
    password: '12345678',
}

// console.log(user, typeof (user));
// console.log(user["name"], user.name);
let users = [
    {
        name: 'jerry',
        email: 'jerry@gmail.com',
        password: '12345678',
    },
    {
        name: 'Mary',
        email: 'mary@gmail.com',
        password: '123456',
    },
    {
        name: 'kevin',
        email: 'kevin@gmail.com',
        password: '111111',
    },
]

console.log(users[0], typeof (users));

for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
    console.log(users[i].email);
    console.log(users[i].password);

}

users.forEach(user => console.log(user.name, user.email, user.password));


users.forEach(user => {
    document.write(`<h2>姓名:${user.name} 信箱:${user.email} 密碼:${user.password}</h2>`)
    console.log(user["name"], user.email, user.password);
});


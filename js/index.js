

// 函式表達式
const getRandInt = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;

// console.log(getRandInt(10, 100));

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

const dateEl = document.querySelectorAll(".date");
const lottoEl = document.querySelector(".lotto-number ul");
const startEl = document.querySelector("#start");

console.log(startEl);
dateEl.forEach(date => {
    date.innerText = "2022/6/12";
});


startEl.addEventListener("click", () => {
    dateEl[0].innerHTML = new Date();

    lottoEl.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        let numbers = getLottoNumbers(1, 49, 6, true);
        console.log(numbers);
        lottoEl.innerHTML += `<li>${numbers.join(" ")}</li>`;
    }

    const liEl = document.querySelectorAll("li");

    for (let i = 0; i < liEl.length; i++) {
        liEl[i].style.color = "navy";
        liEl[i].style.fontSize = "24px";
        if (i % 2 == 0) {
            liEl[i].style.background = "black";
            liEl[i].style.color = "orange";

        }

    }
});
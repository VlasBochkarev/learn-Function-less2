// Написать функцию, которая выводит все числа из заданного
// пользователем диапазона в прямом порядке. И еще одну
// функцию – для вывода в обратном порядке.
function plus(firstNum, secondNumb) {
    if (firstNum == secondNumb) {
        return secondNumb;
    }

    return "" + firstNum + ", " + plus(firstNum - 1, secondNumb);

}

console.log(plus(30, 20));

// Написать функцию, которая выводит переданное ей число
// задом наперед.
// Например: число 1234 вывести как 4321.

function number(x) {

    if (x.toString().length == 1) {
        return x
    }

    let y = x % 10
    x = (x - y) / 10

    return "" + y + number(x)
}
console.log(number(1234));

let pr = {
    x1: {
        x: 5,
        y: 6,
    },
    x2: {
        x: 8,
        y: 4,
    }

}

function p() {
    let vr = pr.x2.x - pr.x1.x;
    let hr = pr.x1.y - pr.x2.y;
    return hr * vr;

}
console.log(p());

let pryam = {
    x1: {
        x: 10,
        y: 10,
    },
    x2: {
        x: 20,
        y: 5,
    }
}

function storona() {
    let a = pryam.x1.x - pryam.x2.x;
    let c = pryam.x1.y - pryam.x2.y;
    console.log(Math.abs(a));
    console.log(Math.abs(c));
}

function show(obj) {
    for (let key in obj) {
        console.log(key, obj[key]);

    }
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
    let result = 0;
    arr.forEach(value => {
        result += value.age;
    })
    return result / arr.length
}

console.log(getAverageAge(arr)) // (25 + 30 + 29) / 3 = 28




// чек магазина , в нем есть цена товара, название и количество.
// 1. вывести чек (название , цена за ед. количество , общая сумма одной позиции , общая сумма чека )

// 2. добавить товар в чек (если позициия существует то ++)



// 3.два масива которые состоят из 10 цыфр .

// 3.1(нужно обеденить два масива и если числа повторяются то они не добовляются в масив)

// 3.2(добавить в масив те числа которые уже есть в другом масиве)
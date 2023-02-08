window.addEventListener('DOMContentLoaded', () => {
	
});	

function pentagonal(n) {
    if(n === 1) {
        return 1;
    } else {
        return 5 * (n - 1) + pentagonal(n - 1);
    }
}

console.log(pentagonal(1));
console.log(pentagonal(2));
console.log(pentagonal(3));
console.log(pentagonal(4));
console.log(pentagonal(5));
console.log(pentagonal(6));

// 1 -> 1 - +5
// 2 -> 6 - +5 +5
// 3 -> 16 - +5 +5 +5
// 4 -> 31 - +5 +5 +5 +5
// 5 -> 51 - +5 +5 +5 +5 +5
// 6 -> 76

// Rest parameter -> ...arr
// Spread Syntax -> ...arr

function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(1, 2));
console.log( sum(1, 2, 3, 4) );

console.log('////////////////////////////////////////')

function sum1(num1, num2){
    console.log(arguments[3])
    return num1 + num2;
}
console.log(sum1(1, 2));
console.log( sum1(1, 2, 3, 4) );

console.log('////////////////////////////////////////')

function sum2(num1, num2, ...args){
    console.log(args)
    return num1 + num2;
}
console.log( sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) );

console.log('////////////////////////////////////////')

function sum3(num1, num2, num3, num4){
    
    return num1 + num2 + num3 + num4;
}
console.log( sum3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) );

console.log('////////////////////////////////////////')

function sumAll(arr){
    let sum = 0;
    
    for(let num of arr){
        sum += num
    }
    return sum
}
console.log( sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) );

console.log('////////////////////////////////////////')

function sumAll1(...args){
    let sum = 0;
    
    for(let num of args){
        sum += num
    }
    return sum
}
console.log( sumAll1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) );
console.log( sumAll1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) );

console.log('////////////////////////////////////////')

let numArr = [1, 2, 3, 4, 5]
let numArr1 = [6, 7, 8, 9, 10]

console.log(numArr)
console.log(numArr1)
console.log([...numArr])
console.log([...numArr, ...numArr1])

console.log('////////////////////////////////////////')

let a = [...numArr, ...numArr1, 14867198346, numArr]
console.log(a)




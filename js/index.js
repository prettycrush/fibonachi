alert ('Here you can count any number from Fibonacci number sequence');
const n = parseFloat(prompt('Enter number you\'re looking for'));

function fibMethodIf(n) {
if (n===1||n===2) {
    return 1;
    } else {
    return fibMethodIf(n-2)+fibMethodIf(n-1);	
    }
}
alert('For method with IF' + '=   ' + fibMethodIf(n));

function fibMethodReduce(n) {
    let fibArr = [1, 1];
    for (let i = 2; i < n; i++) {
        let sum = fibArr[0] + fibArr[1];
        fibArr[0] = fibArr[1];
        fibArr[1] = sum;
    }
return fibArr.reduce((accumulator,currentValue) => currentValue);
}
alert('For else method with reduce' + '=   ' + fibMethodReduce(n));


//pop - Удаляет последний элемент из массива и возвращает его
//push - Добавляет элемент в конец массива

function fibMethodElse(n){
    let fibArr = [1, 1];
    for (let i = 2; i < n; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr.pop();
}
alert('For method with push' + '=   ' + fibMethodElse(n));
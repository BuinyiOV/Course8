/*
Задачи:

1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0
*/

// Место для первой задачи
function getTimeFromMinutes(a) {

if (typeof a === 'number' && Math.round (a) === a && a >= 0){
	
let hourseNum = Math.floor (a / 60);
let hourseText = 'часов';
if (hourseNum === 1){hourseText = 'час';
	} else if (hourseNum > 1 && hourseNum < 5) {hourseText = 'часа'};
let minutesNum = a % 60;
let minutesText = 'минут';
if (parseInt(minutesNum.toString().slice(-1)) === 1){
	minutesText = 'минутa';
} else if (parseInt(minutesNum.toString().slice(-1)) > 1 && parseInt(minutesNum.toString().slice(-1)) < 5){
	minutesText = 'минуты';
}
	let time = `Это ${hourseNum} ${hourseText} и ${minutesNum} ${minutesText}`;
return time;
} else {
console.log("Ошибка, проверьте данные");
let result;
	return result = "Ошибка, проверьте данные";
}
}

getTimeFromMinutes (222);

// Приклад із завдання

/*

function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

*/

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
	if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number' && typeof d === 'number'){
console.log(Math.max(a, b, c, d));
return Math.max(a, b, c, d)
	} else {
		console.log(0);
		return 0
	}
};

findMaxNumber(3, 44, -3, -555);
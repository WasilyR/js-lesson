/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
	 - count - сюда передается ответ на первый вопрос
	 - movies - в это свойство поместить пустой объект
	 - actors - тоже поместить пустой объект
	 - genres - сюда поместить пустой массив
	 - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
	 - 'Один из последних просмотренных фильмов?'
	 - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
	 movies: {
		  'logan': '8.1'
	 }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };


// for (let i = 0;i < 2;i++) {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
// 		b = prompt('На сколько оцените его?', '');

// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('Error');
// 		i--;
// 	}



// }

// if (personalMovieDB.count < 10) {
// 	console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 	console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
// 	console.log("Вы киноман");
// } else {
// 	console.log("Произошла ошибка");
// }



// console.log(personalMovieDB);
// let num = 30;

// function showFirstMessage(text) {
// 	console.log(text);
// 	let num = 20;
// 	console.log(num);

// }

// showFirstMessage('Hello World');
// console.log(num);

// function calc(a, b) {
// 	return (a + b);
// }

// console.log(calc(4, 5));
// console.log(calc(7, 8));
// console.log(calc(4, 67));
// console.log(calc(89, 5));

// function ret() {
// 	let num = 50;

// 	// 


// 	return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
// 	console.log('Hello');
// };

// logger();



const str = 'teSt';
// const arr = [1, 2, 3, 4, 5]

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some in the fruit';

console.log(fruit.indexOf('fruit'));

const logg = 'Some in the fruit';

// console.log(logg.slice(4, 11));
console.log(logg.substring(4, 11));
// console.log(logg.substr(4, 6));

const num = 12.7;
console.log(Math.round(num));

const test = '12.2px';
// console.log(parseInt(test));
console.log(parseFloat(test));
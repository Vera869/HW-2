let a = Number(10);
alert(a); //Задание 1
a = 20;
alert(a);  //Задание 1
let year = Number(2007);
alert(`Год выпуска первого iPhone - ${year}!`); //Задание 2
let creatorName = String("Brendan Eich.");
alert(`Имя создателя языка JavaScript ${creatorName}`); //Задание 3
const c = 10;
const d = 2;
alert(c + d);
alert(c - d);
alert(c * d);
alert(c / d);  //Задание 4
let result = (d ** 5);
alert(result);  //Задание 5
a = 9;
b = 2;
alert(a % b);  //Задание 6
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num++;
num--;
alert(num);   //Задание 7
let age = Number(prompt("Сколько вам лет?"));
alert(age);   //Задание 8
let user = {
   name: "Elisabeth",
   age: 45,
   isAdmin: true   //Задание 9.0 
}
user[`city of residence`] = "Manilla";   //Задание 9.1
user.age = 25;    //Задание 9.2
delete user[`city of residence`];    //Задание 9.3
let info = String(prompt("Какую информацию хотите узнать о пользователе?"));
alert(user[`${info}`]);    //Задание 9.4
let question = String(prompt("Ваше имя?"))
alert(`Привет, ${question}!`)    //Задание 10

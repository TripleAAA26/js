// 1.Переменные

// var name = 'Azim'  (kam qo'llaniladi)
// camelCase
// const firstName = 'Azim'
//const lastName = 'Abdukarimov' //string
//let age = 26 //number
// const istdevelor=true //boolean

// const _ = 'private'
// const $ = 'some value'
//const if ='asf' // xatolik
// const withnum5 = '5'
//const 5stars = '5' //xatolik

// 2.МУТИРОВАНИЕ

//console.log('odam ismi: ' + firstName + ', uning yoshi: ' + age)
//console.log(age.toString())
//console.log('odam ismi: ' + firstName + ', uning yoshi: ' + age)

// const thirdName = prompt('Otasining ismi')
// alert(firstName + ' ' + thirdName)

// 3.Операторы

// let currentYear = 2023
// const birthYear = 1996
//  const age = currentYear - birthYear

// const a = 10
// const b = 5
// let c = 12
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a

// 4. Типы данных
// const firstName = 'Azim'
// const isprogrammer = true 
// const age = 26 
// let x
// null
// console.log(typeof firstName)
// console.log(typeof isprogrammer)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5. Приоритет Операторов Precedence Operators

// const fullAge = 26
// const birthYear = 1996
// const currentYear = 2023
// const isFullAge = currentYear - birthYear >= fullAge  // 27>=26 true
// console.log(isFullAge)

// 6. Условние опероторы Conditional Operators

// const courseStatus = 'pending' // ready pending fail

// if (courseStatus === 'ready') { 
//     console.log('Kurs tayyor')
// } else if (courseStatus === 'pending') { 
//     console.log('Kurs jarayonda')
// } else {
//     console.log('Kurs yoq')
// }

// const isReady = true

// if (isReady) {
//     console.log('kurs tayyor')    
// } else {
//     console.log('kurs tayyor emas')
// }
// Тернарное выражение 
// isReady ? console.log('kurs tayyor') : console.log('kurs tayyor emas')

// const num1 = 45
// const num2 = '45'
// console.log(num1 === num2)

// 7. Булевая логика
// AND &&
// TRUE&&TRUE=TRUE
// TRUE&&FALSE=FALSE
// FALSE&&TRUE=FALSE
// FALSE&&FALSE=FALSE
// OR ||
// TRUE||TRUE=TRUE
// TRUE||FALSE=TRUE
// FALSE||TRUE=TRUE
// FALSE||FALSE=FALSE
// NOT !
// !TRUE=FALSE
// !FALSE-TRUE
// !!TRUE=TRUE
// !!FALSE=FALSE

// const rt = true
// const re = false
// console.log(!rt||re)

// 8. Function

// function calculateAge(birthYear) 
// {
//     return 2023 - birthYear
// }
// const myAge = calculateAge(1996)
// console.log('with variable' + myAge)
// console.log(calculateAge(1996))

// function calculateAge2(birthYear) 
// {
//     console.log(2023 - birthYear)
// }
// calculateAge2(12)


// function infoAbout (name, birthday) 
// {
//     const age = calculateAge(birthday)
// if(age>0) {    console.log('Uning ismi: ' + name + ' Uning yoshi: ' + age)} 
// else{console.log('Umuman bu kelajak!')}
// }

// infoAbout('Azim', 2030)

// 9. Массивы

// const cars = new Array('Mazda', 'Mercedes', 'BMW')
// const cars = ['Mazda', 'Mercedes', 'BMW']

// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[6])
// cars[3] = 'Porsche'
// cars[cars.length] = 'Nissan'
// console.log(cars)

// 10. Цикл
// const cars = ['Mazda', 'Mercedes', 'BMW', 'Nissan']

// for(let i=0; i<cars.length; i++)
// {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars)
// {
//     console.log(car) 
// } 

// 11. Objects
const person ={
    firstName: 'Azim', lastName: 'Abdukarimov',
    year: 1996, languages:['Uz', 'Ru', 'Eng'],
    hasWife: false, 
    greet: function()
    { 
        console.log('greet from person')
    }

} 
console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)

person.greet()
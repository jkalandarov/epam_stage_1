// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const movies = ['Once upon a time in America', 'Blood Diamond', 'Wind River', 'Star Wars']
movies.forEach(movie => console.log(movie))

// Given an array of car manufacturers, convert the array to a string and back to an array
const carMakers = ['Porsche', 'BMW', 'Mercedez-Benz', 'Tesla']
const text = carMakers.toString()
const array = text.split(',')

//Given an array of the names of your friends, add the words hello to each element of the array
const names = ['Monica', 'Rachel', 'Chandler', 'Joey', 'Ross']
names.forEach(name => console.log('Hi ' + name + '!'))

// Convert numeric array to Boolean
const numbers = [5, 1, 3, 0] 
const boolean_array = []
numbers.forEach(num => boolean_array.push(Boolean(num)))

// Sort the array in descending order
const unsorted = [1,6,7,8,3,4,5,6]
unsorted.sort((a, b)=> b - a)

//Filter array by value> 3
const sorted = unsorted.filter(num => num > 3)
// console.log(sorted);

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
const findIndex = (arr, num) => {
    console.log(arr.indexOf(num))
}
findIndex(sorted, 5)

// Implement a loop that will print the number 'a' until it is less than 10
for (let a = 0; a < 10; a++) {
    console.log(a)    
}

// Implement a loop that prints prime numbers to the console
const isPrime = (num) => {
    for (var i = 2; i < num; i++){
        if (num % 2 == 0) {
            return false
        }
    }
    return true
}

const showPrimeNumber = max => {
    let arr = [2]
    for (var i = 3; i < max; i++){
        if (isPrime(i)) arr.push(i)
    }
    console.log(arr)
}

showPrimeNumber(100)

// Implement a loop that prints odd numbers to the console
const findOddNumbers = max => {
    let odds = []
    for (var i = 0; i < max; i++) {
        if (i % 2 !== 0){
            odds.push(i)
        }
    }
    console.log(odds)
}

findOddNumbers(25)
// Part 1: Thinking Functionally
console.log("I think the function of reverseString2 is the best since the function is the simplest than others.");

let numArray = [];
let strArray = [];
let number = 0;
let sums = 0;
let average = 0;
let longestStr ="";
let longerStr = "";

function mySum(nums) {
    //nums.forEach((num) => {
        //sum += num;
        //});
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

function myAverage(nums) {
    for (let i = 0; i < nums.length; i++) {
        sums += nums[i];
    }
    average = sums / nums.length;
    return average;
}

function myString(strings) {
    for (let s = 0; s < strings.length; s++) {
        if (longestStr.length <= strings[s].length) {
            longestStr = strings[s];
        } else {
            longestStr = longestStr;
        }  
    }
    return longestStr;
}

function stringsLongerThan(strings, n) {
    for (let s = 0; s < strings.length; s++) {
        if (strings[s].length >= n) {
            longerStr = strings[s];
            return longerStr;
        }
    }
}

function printNumRec(n, currentNum) {
    if (currentNum > n) {
        return;
    } 
    console.log(currentNum);
    printNumRec(n, currentNum + 1);
}

// Part 2: Thinking Methodically
const dataArray = [ { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" } ]

const sortCallback = (a, b) => a.age - b.age; 
const filterCallback = (arrayObj, age) => arrayObj.age > 50; 
const filteredObject = [];
const mapCallback = filteredObject.map(({ id, name, occupation, age}) => ({ id: id, name: name, job: occupation, age: age})); 
const ageArray = [];

// Sort the array by age
function sortedByAge(arrayObj, callback) {
    let newList = arrayObj.sort(callback)
    return newList;
}

console.log(sortedByAge(dataArray, sortCallback));

// Filter the array to remove entries with an age greater than 50
function filterAgeGreater50(arrayObj, callback) {
    let index = arrayObj.findIndex(callback);
    //console.log(index);
    let removedArray = arrayObj.splice(index, arrayObj.length - index); 
    //console.log(removedArray);
    for (let i = 0; i < arrayObj.length; i++) {
        filteredObject[i] = arrayObj[i];
    }
    return filteredObject;
}

console.log(filterAgeGreater50(dataArray, filterCallback));

// Map the array to change the “occupation” key to “job” and increment every age by 1
function objectMap(callback) {
    const newObject = callback;
    for (let i = 0; i < newObject.length; i++) {
        newObject[i].age = Number(newObject[i].age) + 1;
        ageArray[i] = newObject[i].age;
    }
    return newObject;  
}  

console.log(objectMap(filteredObject, mapCallback));
console.log(ageArray);  // Use it for reduce()

// Use the reduce method to calculate the sum of the ages and the average age.
const sum = ageArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
function reduce (previousValue, currentValue, index) { 
    let sums = 0;
    sums = previousValue + currentValue;
    return sums;
 }

console.log("The sum of age is " + sum + ".");
console.log("The average age is " + sum / ageArray.length + "."); 

// Part 3: Thinking Critically
// Take an object and increment its age field
const ageObject = [ {age: 41}, {age: 25}, {age: 19}, {age: 58}, {age: 111} ];

function incrementAge(arrayObject) {
    const newObj = arrayObject;
    for (let k = 0; k < arrayObject.length; k++) {
        if (typeof arrayObject[k].age === 'undefined' ? arrayObject[k].age = 0: arrayObject[k].age);
        newObj[k].age = arrayObject[k].age + 1;
    }
    return newObj;  
}
    
console.log(incrementAge(ageObject));

// Take an object, make a copy, and increment the age field of the copy. Return the copy
const ageObjectCopy = ageObject.map((ele) => ele);
const incrementAgeCopy = incrementAge(ageObjectCopy);

console.log(incrementAgeCopy);



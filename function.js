// Part 1: Thinking Functionally
console.log("I think the function of reverseString2 is the best since the function is the simplest than others.");

let numArray = [];
let strArray = [];
let number = 0;
let sum = 0;
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
        sum += nums[i];
    }
    average = sum / nums.length;
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

 

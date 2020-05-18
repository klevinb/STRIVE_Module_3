/*

1)
Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function sum(a,b){
    if(a===b){
        return (a+b)*3
    }else{
        return (a+b)
    }
}
/*

2)
Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function check(a,b){
    let sum = a+b
    if(a===50 || b===50 || sum === 50){
        return true
    }
}
/*
3)
Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
*/
function removeChar(string){
    let index = string.indexOf("4")
    let newString = string.slice(0,index)+ string.slice(index+1)
    console.log(newString)
}
/*
4)
 Write a JavaScript program to find the largest of three given integers.
*/
function theLargest(nr1, nr2, nr3){
    let max=0
    if(nr1 > nr2){
        max = nr1
    }else{
        max = nr2
    }

    if(nr3 > max){
        return nr3
    }else{
        return max
    }
/*
5)
Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function checkRange(a, b){
    if(a >=40 && a <=60 && b >=40 && b <= 60
        ||
        a >=70 && a <=100 && b >=70 && b <=100 ){
            return true
    }else{
        return false
    }
}
/*
6) 

Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
*/


/*
7)
Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function cityNames(string){
    let start= string.toLowerCase().substring(0,3)
    
    if(start === "new"){
        console.log("New York")
    }else if(start === "los"){
        console.log("Los Angelos")
    }else{
        console.log("We dont have that option for the moment!")
    }
}
/*
8)
Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
*/
function sum(array){
    let sum=0
    for(let i=0; i< array.length; i++){
        sum += array[i]
    }
    return sum
}
/*
9)
Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3. 
*/
function checkArray(array){
    if(array.indexOf(1) != -1 || array.indexOf(3) != -1){
        return true
    }else{
        return false
    }
}
/*
10)

Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3
*/
function checkArray1(array){
    if (array.indexOf(1) == -1 && array.indexOf(3) == -1){
        return true;
    } else {
        return false;
    }
}
/*
11)

Write a JavaScript to find the longest string from a given array of strings.
*/
function longestString(strings){
    let longest=""

    for(let i=0; i< strings.length; i++){
        if(strings[i].length > longest){
            longest=strings[i].length
        }
    }
    return longest
}
/*
12)

Write a JavaScript program to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
function findAngles(n){
    if(n < 90){
        console.log("Acute angle!")
    }
    if(n === 90){
        console.log("Right angle!")
    }
    if(n >90 && n<180){
        console.log("Obtuse angle!")
    }

}
/*
13)

Write a JavaScript program to find the index of the greatest element of a given array of integers
*/
function largestIndex(array){
    let index, max=-999
    for(let i=0; i < array.length; i++){
        if(array[i]>max){
            max=array[i]
            index=i
        }
    }
    console.log(max, i)
}

/*
14)

Write a JavaScript program to get the largest even number from an array of integers.

15)

Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

16)

Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

17)

Write a JavaScript program to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Convert a number to a string, the contents of which depend on the number's factors.

If the number has 3 as a factor, output 'Pling'.
If the number has 5 as a factor, output 'Plang'.
If the number has 7 as a factor, output 'Plong'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
In raindrop-speak, this would be a simple "Plong".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
In raindrop-speak, this would be a "PlingPlang".
34 has four factors: 1, 2, 17, and 34.
In raindrop-speak, this would be "34".

20)
Convert a phrase to its acronym, like Portable Network Graphics to its acronym (PNG).

*/

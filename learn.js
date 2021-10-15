/* data types: undefined, null, string, number, boolean, object and symbol*/

// variables

var myName = "Thandokazi"

myName = 8

// there are other ways to declare variables as well 
// theres the let keyword , var and const

let mySurname = "Nkohla"

const pi = 3.14
// const is consistant u can never change it 

// initializing variables with assignment operater

var a = 9;

// uninitializing
var a;

//variable names and variables are case sensitive in js

// adding number in js ..use the + operatr

var sum = 10 + 10;
console.log(sum)

// to multiply we use * , to devide use the /
// to increment 
var myNumber = 20;
 myNumber = myNumber +1;
//quicker way 
myNumber++;

//decrementing --

//finding the remainder uses the % operator
 var remainder;
 remainder = 11 % 3;

 //compound assignment

 var a = 11;
 var b = 2
 a = b -1;
 a-=1; // easy way , same with + ,* and /

 // declaring string variables

 var firstName = "Thando";
 var lastName = "Somyp";

 // escaping 

 var myStr = "FirstLine\n\t\\secondLIne"

 //concactinate strings

 var conct = "The first." + "The second."
 console.log(conct);

 // bracket notation 

 var firstName = "Thando"
 fistletter = firstName[0];
 console.log(firstName)

 //to find the last letter [firstNanme.legnth -1]

// arrays

var ourArray = ["Thando", 22];

// nested array

var myArray = [["Thandokazi", 21], ["sivenathi", 12]];

//bracket notion with arrays
var dataArray = [1,2,3,4];
var dataIndex = dataArray[0];

//u can modify a  array using bracket notion unlike strings

// appending array using push() adds the lement to the end of the array but unshift() will add at the beggining of the array

var theArray = ["tayler", 22,"dogs"];
theArray.push(["happy"]);

//removing with pop() remove the last element but the shift() removes the first element
var Array = [1,2,3];
var remove = Array.pop();

//nested arrays

var myList = [["noodles", 6], ["eggs",12],["coldrink",2], ["cereal",2]]

//reusable code with functions

function myFunction(){
    console.log("learning js")
}
//calling the function
myFunction();

function myFunction(){
    console.log("lets go")
}
myFunction();

//parameters

function paraFunction(a,b){
    console.log(a-b)
}
paraFunction(6,4)

// global scope and functions

// declaring a variable inside a function  its local scope ..only visible inside the function
// global vs local scope

var outerScope = "Outside" // global scope

function myOutfit(){
    
    var innerScope = "inside"; //local

    return outerScope;
}
console.log(myOutfit());
//the local scop took presents

//returning a value from a function

function returningThings(num){
    return num - 2;
}
console.log(returningThings(11));


// booleans values true or false

function welcomeToBooleans(){
    return True;
}

// conditionals with if statements

function theBooleans(isItTrue){
    if (isItTrue){
        return "yes, its true";
    }
    return "no , not true";
}

function trueOrFalse(wasItTrue){
    if (wasItTrue){
        return "yes it is";
    }
    return "not it was not";

}
console.log(trueOrFalse(true))



// Chaper no 2

// Question 01
let username;

// Question 02
let my_Name = "Syed Saleem Raza";

// Question 03
let message = "Hello World";
alert(message);

// Question 04
let Name = prompt("What is Your Name");
alert("Welcom " + Name);
console.log(Name);

let age = prompt("What is Your Age");
alert(age + " year old");
console.log(age);

let course = prompt("Which Course You Are Enrolled");
alert(course);
console.log(course);

// Question 05
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

// Question 06
let email = "saylani@gmail.com";
alert("My email address is " + email);

// Question 07
let book = "A Smarter way to Learn JavaScript";
alert("I'm trying to learn from the Book " + book);

// Question 09
let design = "\“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\”";
alert(design);

// Question 08
document.getElementById("write").innerHTML =
  "Yah! I can write HTML content throught JavaScript";


// Chapter no 4

// Question 1
let string = "Name",
  num = 10,
  boolean = false;

// Question 2
//   LEGAL VARIABLES
let name;
let myName;
let $name;
let name1;
let my_name;

// ILLEGAL VARIABLES
// let Name
// let My-Name
// let NaMe's
// let Name,125
// let My Name

// Question 3


document.getElementById("heading").innerHTML =
  "“Rules for naming JS variables”";


document.getElementById("B").innerHTML =
  "Variable names can only contain , numbers, S and _ . For example : $my_1stVariable";


document.getElementById("C").innerHTML =
  "Variables must begin with a letter, $ or _ . For example : $name, _name or name";


document.getElementById("D").innerHTML = "Variable names are case sensitive";


document.getElementById("E").innerHTML =
  "Variable names should not be JS keywords";

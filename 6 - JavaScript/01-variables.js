console.log("Hello World!");

// This is a single-line comment
/*
    This is 
    a multi-line comment.
*/
// Variables = container
/*
    let - mutable/changeable 
    var - mutable/changeable 
    const - unmutable/unchangeable 
*/
let firstName = "John";
console.log("Hello", firstName);
firstName = "Miko";
console.log("Hello", firstName);

var lastName = "Smith";
console.log("Lastname:", lastName);
lastName = "David";
console.log("Lastname:", lastName);

const birthday = "02-14-2000";
console.log("Birthday:", birthday);
// birthday = "03-12-2001"; This will show TypeError

// Variables = container
/*
    let - mutable/changeable - block-scope
    var - mutable/changeable - global-scope
    const - unmutable/unchangeable
*/
if (true) {
    var email = "mikodavid@example.com";
    let username = "mikodavid20";
    console.log("Username:", username);
  }
  console.log("Email:", email); // This will work.
  // console.log("Username:", username); This will return a Reference Error
  
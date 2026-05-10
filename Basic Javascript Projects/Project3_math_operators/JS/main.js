//main.js

function addition() { // Defining and naming the addition function
    var add = 15 + 25;
    document.getElementById("Add").innerHTML = "15 + 25 = " + add; // Print the result in HTML
}

function subtraction() { // Defining and naming the subtraction function
    var sub = 50 - 18;
    document.getElementById("Sub").innerHTML = "50 - 18 = " + sub; // Print the result in HTML
}

function multiplication() { // Defining and naming the multiplication function
    var mult = 8 * 7;
    document.getElementById("Mlt").innerHTML = "8 * 7 = " + mult; // Print the result in HTML
}

function division() { // Defining and naming the division function
    var divide = 100 / 5;
    document.getElementById("Div").innerHTML = "100 / 5 = " + divide; // Print the result in HTML
}

function random() { // Defining and naming the random function
    document.getElementById("Ran").innerHTML = Math.random() * 50; // Print the result in HTML
}

function modulus_operator() { // Defining and naming the modulus operator function
    var modulus = 45 % 6;
    document.getElementById("Mod").innerHTML =
    "When you divide 45 by 6 you have a remainder of: " + modulus; // Print the result in HTML
}

function Increment() { // Defining and naming the increment function
    var value = document.getElementById("IncrementText").innerHTML; // Saves the text of the HTML element to a variable

    value += 2; // Add two to the value

    document.getElementById("IncrementText").innerHTML = value; // Print the result in HTML
}

function Decrement() { // Defining a function and naming it
    var value = document.getElementById("DecrementText").innerHTML; // Saves the text of the HTML element to a variable

    value -= 3; // Subtract three from the value

    document.getElementById("DecrementText").innerHTML = value; // Print the result in HTML
}
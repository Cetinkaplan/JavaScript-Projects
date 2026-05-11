// main.js

// Utilizing the .concat() method
function fullSentence() {

    var part_1 = "Can you believe ";
    var part_2 = "what day ";
    var part_3 = "it is today?";

    var whole_sentence = part_1.concat(part_2, part_3);

    document.getElementById("stringMethod").innerHTML =
        whole_sentence;
}


// Utilizing the .slice() method
function sliceMethod() {

    var sentence = "Pizza and Burgers";
    var section = sentence.slice(10, 17);

    document.getElementById("slice").innerHTML =
        section;
}


// Utilizing the .toString() method
function stringMethod() {

    var myNumber = 2025;

    document.getElementById("toString").innerHTML =
        myNumber.toString();
}


// Utilizing the .toPrecision() method
function precisionMethod() {

    var myNumber = 456.78912345;

    document.getElementById("specificLength").innerHTML =
        myNumber.toPrecision(6);
}
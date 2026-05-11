// A function using a while loop
function count_to_Ten() {
    let Digit = "";
    let x = 1;
    while (x < 11) {
        Digit += `<br>${x}`;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

// A function using a for loop
function for_Loop() {
    const Instruments = [
        "Guitar",
        "Drums",
        "Piano",
        "Bass",
        "Violin",
        "Trumpet",
        "Flute"
    ];
    let content = "";
    for (let y = 0; y < Instruments.length; y++) {
        content += `${Instruments[y]}<br>`;
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

// A function with an array
function color_array() {
    let Colors = [];
    Colors[0] = "Green";
    Colors[1] = "Red";
    Colors[2] = "Blue";
    Colors[3] = "Yellow";
    Colors[4] = "Orange";
    Colors[5] = "Purple";

    // Displays the 6th color (Purple) using index 5
    document.getElementById("Array").innerHTML = `My favorite color is ${Colors[5]}.`;
}

// Creating an object with the let keyword
function car() {
    let car = {
        make: "Nissan",
        year: "2023",
        color: "Black"
    };

    document.getElementById("car").innerHTML =
        `I have a ${car.year} ${car.color} ${car.make}.`;
}
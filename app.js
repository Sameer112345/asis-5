
// answer 14

// Function to demonstrate FIFO behavior using an array
function fifoQueue() {
    // Create an empty array to store values (FIFO Queue)
    var queue = [];

    // Store values one by one using push (add to the end)
    queue.push("keyboard");
    queue.push("mouse");
    queue.push("printer");
    queue.push("monitor");

    // Display the queue after storing values
    document.write("Devices" + queue.join(", ") + "<br>");

    // Access values in FIFO order using shift (remove from the front)
    var firstIn = queue.shift();
    document.write("out " + firstIn + "<br>");

    var secondIn = queue.shift();
    document.write("out " + secondIn + "<br>");

    var thirdIn = queue.shift();
    document.write("out " + thirdIn + "<br>");

    var fourthIn = queue.shift();
    document.write("out " + fourthIn + "<br>");

    // Display the queue after removing all elements
    // document.write("Queue after removing all elements: " + queue.join(", "));
}

// Call the function when the page loads
window.onload = fifoQueue;
// answer15
// Create an empty array to serve as the stack
let stack = [];

// Function to add an item to the stack
function push(item) {
    stack.push(item);
}

// Function to remove and return the last item from the stack
function pop() {
    if (stack.length > 0) {
        return stack.pop(); // Removes the last item
    } else {
        return null; // Return null if the stack is empty
    }
}

// Adding items to the stack
push("keyboard");
push("mouse");
push("printer");
push("monitor");

// Display the stack
console.log("Current LIFO Stack:", stack);

// Removing items in LIFO order
console.log("Pop:", pop()); // monitor
console.log("Pop:", pop()); // printer
console.log("Pop:", pop()); // mouse
console.log("Pop:", pop()); // keyboard
console.log("Pop:", pop()); // null (stack is empty)
// 15
  // Array of phone manufacturers
  const manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

  // Function to create a dropdown menu
  function createDropdown() {
      // Start the select element
      let dropdown = '<select id="manufacturersDropdown">';

      // Loop through the manufacturers array to create options
      for (let i = 0; i < manufacturers.length; i++) {
          dropdown += `<option value="${manufacturers[i]}">${manufacturers[i]}</option>`;
      }

      // Close the select element
      dropdown += '</select>';

      // Display the dropdown in the browser
      document.write(dropdown);
  }

  // Call the function to create and display the dropdown
  createDropdown();
//   chp 17 chp 20
// a and b
// 1. Declaring and initializing an empty multidimensional array
let emptyMultidimensionalArray = [];
emptyMultidimensionalArray[0] = [];
emptyMultidimensionalArray[1] = [];
emptyMultidimensionalArray[2] = [];

console.log("Empty Multidimensional Array:", emptyMultidimensionalArray);

// 2. Declaring and initializing a multidimensional array representing a matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:", matrix);
// answer 3
let count = 1;
    while (count <= 10) {
        console.log(count);
        count++;
    }
 
    // answer4
    // Function to generate the multiplication table
function generateMultiplicationTable() {
    // Prompt user for the table number
    const tableNumber = parseInt(prompt("Enter a number for the multiplication table:"));
    
    // Prompt user for the length of the table
    const tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

    // Check if inputs are valid numbers
    if (isNaN(tableNumber) || isNaN(tableLength) || tableLength <= 0) {
        console.log("Please enter valid numbers.");
        return;
    }

    // Generate and print the multiplication table
    console.log(`Multiplication Table for ${tableNumber}:`);
    for (let i = 1; i <= tableLength; i++) {
        console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
    }
}

// Call the function to execute the program
generateMultiplicationTable();

// anser6

// Declare and initialize the array of fruits
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Use a for loop to iterate through the array and print each fruit
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// answer 7
 // Function to generate and display the number series
 function generateSeries() {
    // a. Counting
    let counting = "";
    for (let i = 1; i <= 15; i++) {
        counting += i + (i < 15 ? ", " : ""); // Add comma for all but the last number
    }

    // b. Reverse counting
    let reverseCounting = "";
    for (let i = 10; i >= 1; i--) {
        reverseCounting += i + (i > 1 ? ", " : ""); // Add comma for all but the last number
    }

    // c. Even
    let even = "";
    for (let i = 0; i <= 20; i += 2) {
        even += i + (i < 20 ? ", " : ""); // Add comma for all but the last number
    }

    // d. Odd
    let odd = "";
    for (let i = 1; i < 20; i += 2) {
        odd += i + (i < 19 ? ", " : ""); // Add comma for all but the last number
    }

    // e. Series: 2k, 4k, ..., 20k
    let series = "";
    for (let i = 1; i <= 10; i++) {
        series += (i * 2) + "k" + (i < 10 ? ", " : ""); // Add comma for all but the last number
    }

    // Displaying the series in the output div
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <strong>Counting:</strong> ${counting}<br>
        <strong>Reverse Counting:</strong> ${reverseCounting}<br>
        <strong>Even:</strong> ${even}<br>
        <strong>Odd:</strong> ${odd}<br>
        <strong>Series:</strong> ${series}
    `;
}

// Call the function to generate and display the series
generateSeries();

// answer 7
// Predefined array of items
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
function searchItem() {
    // Prompt the user to enter an item to search for
    const userInput = prompt("Enter an item to search for:");

    // Check if the item is in the array
    const itemFound = A.includes(userInput.toLowerCase());

    // Display a message based on whether the item was found
    if (itemFound) {
        alert(`The item "${userInput}" is found in the list.`);
    } else {
        alert(`The item "${userInput}" is not found in the list.`);
    }
}

// Call the function to execute the search
searchItem();

// answer 8
// Given array
const sam = [24, 53, 78, 91, 12];

// Function to find the largest number using a loop
function findLargestNumber(arr) {
    let largest = arr[0]; // Assume the first element is the largest

    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if current element is greater
        }
    }

    return largest;
}

// Call the function and display the result
const largestNumber = findLargestNumber(sam);
console.log(`The largest number in the array is: ${largestNumber}`);
// answer 9
// Given array
const aa = [24, 53, 78, 91, 12];

// Function to find the smallest number using a loop
function findSmallestNumber(arr) {
    let smallest = arr[0]; // Assume the first element is the smallest

    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]; // Update smallest if current element is smaller
        }
    }

    return smallest;
}

// Call the function and display the result
const smallestNumber = findSmallestNumber(aa);
console.log(`The smallest number in the array is: ${smallestNumber}`);
// answer 10
// Function to print multiples of 5 from 1 to 100
function printMultiplesOfFive() {
    console.log("Multiples of 5 from 1 to 100:");

    // Loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        // Check if the number is a multiple of 5
        if (i % 5 === 0) {
            console.log(i); // Print the multiple of 5
        }
    }
}

// Call the function to execute the program
printMultiplesOfFive();


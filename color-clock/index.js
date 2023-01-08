//No need to do any work here.
//If package.json and the proper modules are installed in the correct location, this should display correctly in the browser.
import format from "./node_modules/date-fns/esm/format/index.js";

/* This code is using the import statement to import the format 
function from the date-fns package, which is a library for 
performing operations on dates and times in JavaScript. 
The ./node_modules/date-fns/esm/format/index.js path specifies
the location of the index.js file within the date-fns package. 
The format function is then made available to the code that 
follows the import statement. */

/* This code defines a function called displayTime that displays the 
current time in a specified format on a webpage. 
The time is displayed using the format function that was 
imported from the date-fns library. */


function displayTime() {
  const clock = document.querySelector("#clock");
  clock.textContent = format(new Date(), "MMMM do yyyy, h:mm:ss a");
    //It sets the text content of the clock element to the current time, 
    //formatted using the format function. The current date and 
    // time is obtained using the new Date() constructor, and 
    // the format string specifies how the date and time should be displayed.
  setInterval(function () { // execute anonymous function every 1000 milliseconds
    clock.textContent = format(new Date(), "MMMM do yyyy, h:mm:ss a");
    clock.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    clock.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }, 1000);
  // The text color and background color of the clock element are 
  // also set to random colors, using the Math.random function and 
  // some arithmetic.
}

displayTime();

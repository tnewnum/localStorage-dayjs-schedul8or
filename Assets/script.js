let timeDate = dayjs().format('MMMM DD, YYYY h:mm a');
let description = document.querySelector('.description');
const saveButton = document.querySelector('button');

$('#date-time').text(timeDate);
function timeUpkeep () {
    setInterval()
}



saveButton.addEventListener('click', (event) => {
  event.preventDefault()

  let nine = document.querySelector(".nine").value;

      localStorage.setItem("9am", nine);      

 console.log("this is 9am test")

});

saveButton.addEventListener('click', (event) => {
  event.preventDefault()

    let ten = document.querySelector(".ten").value;
      localStorage.setItem("10am", ten);       

 console.log("this is 10am test")

});



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?




  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

    //an if statement that loops through if time is 
      // if hour on schedule > current hour  make class = future
      // if time < current hour  make class = past
      // if time = current hour  make class = present



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

      // pull info from id = "hour-x"

  //
  // TODO: Add code to display the current date in the header of the page.
});



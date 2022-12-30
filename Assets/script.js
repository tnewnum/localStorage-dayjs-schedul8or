let timeDate = dayjs().format('MMMM DD, YYYY HH:mm a');

$('#date-time').text(timeDate);
function timeUpkeep () {
    setInterval()
}


function changeColor () {
  let currentTime = dayjs().format('HH')
  console.log(currentTime)

  let hour = $('.row')

  console.log(hour)

  for ( let i = 0; i < hour.length; i++){

    let time = $(hour[i]).attr("id")
    console.log(time)

    // for (let i = 0; i < time.length; i++)
      

        if (time < currentTime) {
      
          $(hour[i]).addClass('past')

          // change class  past
        }
        
        if (time > currentTime) {

          $(hour[i]).addClass('future')

          // change class future 
        } 
        
        if (time === currentTime) { 

          $(hour[i]).addClass('present')
        
          // change class present

        }
    }
}
changeColor();

function saveItems (){
let saveButton = document.querySelectorAll('#save');
let description = document.querySelectorAll('.description')

for (let i = 0; i < saveButton.length; i++) {
  
  saveButton[i].addEventListener('click', function(event) {
    event.preventDefault()

    let item = []

    for (let i = 0; i < description.length; i++) {

      item[i] = description[i].value

    } 
     
    localStorage.setItem('item0', JSON.stringify(item))

  })
}};
saveItems()

function writeItems(item) {
  let description = document.querySelectorAll('.description')

  item = JSON.parse(localStorage.getItem('item0'))
    console.log(item)

    for (let i = 0; i < item.length; i++){

    description[i].value = item[i]
    
    }
} ;

writeItems()



// function changeColor () {

//   let currentTime = dayjs().format('HH')
//   console.log(currentTime)

//   let hour = $('.row')

//   for ( let i = 0; i < hour.length; i++){


//     let time = $(hour[i]).attr("id")

//     for (let i = 0; i < time.length; i++)

//       console.log(time)

//         if (time < currentTime) {
      
//           $('.row').addClass('past')

//           // change class  past

//         } else if (time > currentTime) {

//           $('row').addClass('future')

//           // change class future 

//         } else if (time == currentTime) { 

//           $('.row').addClass('present')
        
//           // change class present

//     }
//   }
// }
// changeColor();







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


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // TODO: Add code to display the current date in the header of the page.
});



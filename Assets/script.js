let timeDate = dayjs().format('MMMM DD, YYYY HH:mm a');

$('#date-time').text(timeDate);
function timeUpkeep () {
    setInterval()
}



let saveButton = document.querySelectorAll('#save');
for (let i = 0; i < saveButton.length; i++) {
  
  saveButton[i].addEventListener('click', function(event) {
    event.preventDefault()

    let item = []

    for (let i = 0; i < description.length; i++) {

      item[i] = description[i].value

    } 
     
    localStorage.setItem('item0', JSON.stringify(item))

  })
};

function writeItems(item) {
  let description = document.querySelectorAll('.description')

  item = JSON.parse(localStorage.getItem('item0'))
    console.log(item)

    for (let i = 0; i < item.length; i++){

    description[i].value = item[i]
    
    }
} ;

writeItems()

 //an if statement that loops through if time is 
//       // if hour on schedule > current hour  make class = future
//       // if time < current hour  make class = past
//       // if time = current hour  make class = presen

function changeColor () {

  let currentTime = dayjs().format('HH')
  console.log(currentTime)

  let hour = $('#hour')

  for ( let i = 0; i < hour.length; i++){


  }

}
changeColor();



//  let nine = $('#hour-9')
//  let ten = $('#hour-10')
//  let eleven = $('#hour-11')
//  let twelve = $('#hour-12')
//  let thirteen = $('#hour-13')
//  let fourteen = $('#hour-14')
//  let fifteen = $('#hour-15')
//  let sixteen = $('#hour-16')
//  let seventeen = $('#hour-17')
//  console.log(nine);

//  if(currentTime > 9 ) {
//   nine.classList.remove('present')
//   nine.classList.add('past')
//  } else if (currentTime < 9) {
//   nine.classList.remove('present')
//   nine.classList.add('future')
//  }
//  if(currentTime > 10) {
//   ten.classList.remove('present')
//   ten.classList.add('past')
//  } else if (currentTime < 10) {
//   ten.classList.remove('present')
//   ten.classList.add('future')
//  }
//  if(currentTime > 11) {
//   eleven.classList.remove('present')
//   eleven.classList.add('past')
//  } else if (currentTime < 11) {
//   eleven.classList.remove('present')
//   eleven.classList.add('future')
//  }
//  if(currentTime > 12) {
//   twelve.classList.remove('present')
//   twelve.classList.add('past')
//  } else if (currentTime < 12) {
//   twelve.classList.remove('present')
//   twelve.classList.add('future')
//  }
//  if(currentTime > 13) {
//   thirteen.classList.remove('present')
//   thirteen.classList.add('past')
//  } else if (currentTime < 13) {
//   thirteen.classList.remove('present')
//   thirteen.classList.add('future')
//  }
//  if(currentTime > 14) {
//   fourteen.classList.remove('present')
//   fourteen.classList.add('past')
//  } else if (currentTime < 14) {
//   fourteen.classList.remove('present')
//   fourteen.classList.add('future')
//  }
//  if(currentTime > 15) {
//   fifteen.classList.remove('present')
//   fifteen.classList.add('past')
//  } else if (currentTime < 15) {
//   fifteen.classList.remove('present')
//   fifteen.classList.add('future')
//  }
//  if(currentTime > 16) {
//   sixteen.classList.remove('present')
//   sixteen.classList.add('past')
//  } else if (currentTime < 16) {
//   sixteen.classList.remove('present')
//   sixteen.classList.add('future')
//  }
//  if(currentTime > 17) {
//   seventeen.classList.remove('present')
//   seventeen.classList.add('past')
//  } else if (currentTime < 17) {
//   seventeen.classList.remove('present')
//   seventeen.classList.add('future')
//  }



// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?




//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?


//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?


//   // TODO: Add code to display the current date in the header of the page.
// });



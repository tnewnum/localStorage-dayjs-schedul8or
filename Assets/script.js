//Overall function that fires when the page is loaded using $ jQuery
$(function () {

  //setting time variable then using the time variable along with jQueary to target the header to display the date and time
  let timeDate = dayjs().format('MMMM DD, YYYY HH:mm a');
  $('#date-time').text(timeDate);
    function timeUpkeep () {
      setInterval()
    }

    //function to change the color, variable to use military time establised and then git if statement looping through looking at the id and adding a class to change the color 
  function changeColor () {
    let currentTime = dayjs().format('HH')
      console.log(currentTime)

    //sets hour equal to the class ross
    let hour = $('.row')
      console.log(hour)

      //loops through all 9 hour classes
    for ( let i = 0; i < hour.length; i++){

      //sets time to the id within the 9 hour classes
      let time = $(hour[i]).attr("id")
        console.log(time)
     
        // compares the time variable to the currentTime to change class 
        // changes class to past 
        if (time < currentTime) {
      
          $(hour[i]).addClass('past')
          
        }
        // changes class future 
        if (time > currentTime) {

          $(hour[i]).addClass('future')
          
        } 

         // changes class present
        if (time === currentTime) { 

          $(hour[i]).addClass('present')
                 
        }
    }
  }
  //calls the color change function
  changeColor();

  //funtion to save the user input to the local storage 
  function saveItems (){

    //targets all of the save buttons on the page with the id of save
    let saveButton = document.querySelectorAll('#save');
    //targets alll of the textarea with the class description 
    let description = document.querySelectorAll('.description')

    //loops through the save buttons listening for a click to save information
    for (let i = 0; i < saveButton.length; i++) {  
    saveButton[i].addEventListener('click', function(event) {
      event.preventDefault()
    
      //sets item as an array
    let item = []

    //loops through the user inputed items and saves them to the array
    for (let i = 0; i < description.length; i++) {
      item[i] = description[i].value

    } 
     
    //Sets the array of 'item' to local storage as a string
    localStorage.setItem('item0', JSON.stringify(item))

    })
  }};
  //calls saveItems function
  saveItems()

  //function to pull the items from local storage
  function writeItems(item) {
    let description = document.querySelectorAll('.description')

    //sets the item as the information from local storage again and parses it out 
    item = JSON.parse(localStorage.getItem('item0'))
      console.log(item)

      //loops through those items and puts them back in the schedule at the correct time block
    for (let i = 0; i < item.length; i++){
    description[i].value = item[i]
    
    }
  } ;
//calls the writeItem function
writeItems()
});
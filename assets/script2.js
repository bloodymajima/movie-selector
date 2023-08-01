const homePage = document.querySelector('#homepage');
const GenButton = document.querySelector('#start-button');

GenButton.addEventListener('click', getMovie)



function getMovie() {

}

// Nav bar link for movie quiz takes you to the start page, genre link takes you to movie genres if thats all you want
function myFunction() {
    document.getElementById("dropdownMenu").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropdownBtn')) {
      var dropdown = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdown.length; i++) {
        var openDropdown = dropdown[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


// button pops up with a movie recommendation, a button for a trailer or related video on youtube, then a button to run the function again

document.getElementById("findform").addEventListener("submit", function(event){
    event.preventDefault();

  var genreOptions = document.getElementById("genre");

  var selectedGenre = genreOptions.options[genreOptions.selectedIndex].text;

  var url = "/pick-a-genre/" + selectedGenre;
  getApi(url, appendData);
});

document.getElementById("recommendfilm").addEventListener("submit", function(event){
    event.preventDefault();

  var name = document.getElementById('name').value;
    var location = document.getElementById('location').value;
  var cohortNumber = document.getElementById('cohortnumber').value;
  var movieName = document.getElementById('moviename').value;
  var ratingNumber = document.getElementById('ratingnumber').value;
  var movieDescription = document.getElementById('description').value;

  var arrayLikeCheckboxes = document.getElementsByName('genres[]');
//call pretends that arrayLikeCheckboxes is an array.
  var checkedValue = [].map.call(
    arrayLikeCheckboxes,
    function(checkbox) {
      return checkbox.checked;
    }
  )

console.log(checkedValue);


  var url = "/review-film/";

  getApi(url, appendData);
});

function getApi(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      cb(null, xhr.responseText);
    } else {
      cb("error" + xhr.responseType);
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}

function appendData(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}

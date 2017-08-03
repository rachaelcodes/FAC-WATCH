
document.getElementById("findform").addEventListener("submit", function(event){
    event.preventDefault();

  var genreOptions = document.getElementById("genre");

  var selectedGenre = genreOptions.options[genreOptions.selectedIndex].text;

  var url = "/pick-a-genre/" + selectedGenre;
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

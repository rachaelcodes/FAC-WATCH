var resultsDiv = document.getElementById('filmresults');
var list = document.getElementById('resultslist');

document.getElementById("findform").addEventListener("submit", function(event){
    event.preventDefault();

  var genreOptions = document.getElementById("genre");

  var selectedGenre = genreOptions.options[genreOptions.selectedIndex].text;

  var url = "/pick-a-genre/" + selectedGenre;
  getApi(url, appendData);
});

// document.getElementById("recommendfilm").addEventListener("submit", function(event){
//     event.preventDefault();
//
//   var name = document.getElementById('name').value;
//     var location = document.getElementById('location').value;
//   var cohortNumber = document.getElementById('cohortnumber').value;
//   var movieName = document.getElementById('moviename').value;
//   var ratingNumber = document.getElementById('ratingnumber').value;
//   var movieDescription = document.getElementById('description').value;
//
// //   var arrayLikeCheckboxes = document.getElementsByName('genres[]');
// // //call pretends that arrayLikeCheckboxes is an array.
// //   var checkedValue = [].map.call(
// //     arrayLikeCheckboxes,
// //     function(checkbox) {
// //       return checkbox.checked;
// //     }
// //   )
// //
// // console.log(checkedValue);
//
//
//   var url = "/review-film/";
//
//   postApi(url, appendData);
// });

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

// function postApi(url, cb) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       cb(null, xhr.responseText);
//     } else {
//       cb("error" + xhr.responseType);
//     }
//   }
//   xhr.open("POST", url, true);
//   xhr.send();
// }

function appendData(error, data) {
  if (error) {
    console.log(error);
  } else {
    resultsDiv.classList.remove('invisible');
    console.log(data);
    var results = JSON.parse(data);
    console.log(results);
    results.forEach(function(result){
      var li = document.createElement('li');
      var string = document.createElement("span");
      string.textContent = result.faccer + " from " + result.faclocation + " FAC" + result.cohort + " recommended '"+result.moviename+"'.";
      string.classList.add('string');
      var quote = document.createElement("span");
      quote.textContent = "'"+result.description+"' " + result.rating +'/5';
      quote.classList.add('quote');
      li.appendChild(string);
      li.appendChild(document.createElement('br'));
      li.appendChild(quote);
      li.appendChild(document.createElement('br'));
      list.appendChild(li);

    })

  }
}

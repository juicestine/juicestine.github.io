
var newQuestion = {"title":"What's a good substitute for olive oil?", "index":"4", "injectedResult1":"No Results Yet!"}

var saltResponse = {"injectedResult1":"Mint"}



$(document).ready(function(){
  console.log('ready!');
  myStorage = window.localStorage;

  $('#postButton').click(post);
  $('#saltPost').click(postAnswerSalt);
  $('#beefPost').click(postAnswerBeef)
  $('#celeryPost').click(postAnswerCelery)

});

function post() {
  var item = document.getElementById("question").value;
  //var description = document.getElementById("description").value;

  myStorage = window.localStorage;
  myStorage.setItem('item', item);
  //myStorage.setItem('description', description);

  item = myStorage.getItem("item");
  //description = myStorage.getItem("description");
  var question = "What's a good substitute for " + item + "?";
  console.log(question);
  //console.log(description);

  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  var source = $("#entry-template1").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedQuestion");
  var html=template(newQuestion);
  console.log(html);
  parentDiv.append(html);

}

function postAnswerCelery() {

  var item = document.getElementById("answer2").value;
  myStorage.setItem('html',"<li class='list-group-item'>" + item + "</li>");
  console.log(myStorage.getItem('html'))
  console.log(item)
  console.log("<li class='list-group-item'>")
  $('#celeryList').append(myStorage.getItem('html'));


}
function postAnswerBeef() {

  var item = document.getElementById("answer1").value;
  myStorage.setItem('html',"<li class='list-group-item'>" + item + "</li>");
  console.log(myStorage.getItem('html'))
  console.log(item)
  console.log("<li class='list-group-item'>")
  $('#beefList').append(myStorage.getItem('html'));

}

function postAnswerSalt() {

  var salt = document.getElementById("answer3").value;
  myStorage.setItem('html',"<li class='list-group-item'>" + salt + "</li>");
  console.log(myStorage.getItem('html'))
  console.log(salt)
  console.log("<li class='list-group-item'>")
  $('#saltList').append(myStorage.getItem('html'));

}

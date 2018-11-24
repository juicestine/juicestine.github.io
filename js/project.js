
var newQuestion = {"title": "", "index":"", "injectedResult1":"No Results Yet!"};
var index = 4;
var response = {"injectedResult1":"", "injectedResult2":"", "injectedResult3": "", "injectedResult4":"", "injectedResult5":""};



$(document).ready(function(){
  console.log('ready!');
  myStorage = window.localStorage;

  $('#postButton').click(post);
  $('#saltPost').click(postAnswerSalt);
  $('#beefPost').click(postAnswerBeef);
  $('#celeryPost').click(postAnswerCelery);


});

function post() {
  var item = document.getElementById("question").value;
  //var description = document.getElementById("description").value;

  myStorage = window.localStorage;
  myStorage.setItem('item', item);
  myStorage.setItem('index', index);
  //myStorage.setItem('description', description);

  item = myStorage.getItem("item");
  //description = myStorage.getItem("description");
  var question = "What's a good substitute for " + item + "?";
  //console.log(question);
  //console.log(description);

  var x = document.getElementById("snackbar");
  x.innerHTML = "Question Posted!"
  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  newQuestion["title"] = question;
  newQuestion["index"] = myStorage.getItem("index");

  myStorage.setItem("index", index);


  var source = $("#entry-template1").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedQuestion");
  var html=template(newQuestion);
  //console.log(html);
  parentDiv.append(html);

  newPost = "newPost" + index;
  document.getElementById(newPost).addEventListener("click",function postNew() {
    var index = myStorage.getItem("index");
    answer = "answer" + index;
    console.log(answer);
    var item = document.getElementById(answer).value;
    var newList = "newList" + index;
    console.log(item);
    myStorage.setItem('html',"<li class='list-group-item'>" + item + "</li>"+"<span class='badge badge-primary'>New</span>");
    console.log(myStorage.getItem('html'))
    //console.log(item)
    //console.log("<li class='list-group-item'>")
    noResponse = "noResponse" + index;
    var blah = document.getElementById(noResponse);
    if (blah){
      document.getElementById(newList).innerHTML = myStorage.getItem('html');
      //blah.style.visibility = 'hidden';
    }
    else {
      document.getElementById(newList).insertAdjacentHTML('beforeend',myStorage.getItem('html'));
    }
    var x = document.getElementById("snackbar");
    x.innerHTML = "Response Posted Under 'Results!'"
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    console.log("end of the button function")

    //myStorage.setItem("index", index);
  });
  console.log("outside the button function")
  index = index+1;


}

function postAnswerCelery() {

  var item = document.getElementById("answer2").value;
    myStorage.setItem('html',"<li class='list-group-item'>" + item + "</li>"+"<span class='badge badge-primary'>New</span>");
  //console.log(myStorage.getItem('html'))
  //console.log(item)
  //console.log("<li class='list-group-item'>")
  $('#celeryList').append(myStorage.getItem('html'));
  var x = document.getElementById("snackbar");
  x.innerHTML = "Response Posted Under 'Results!'"
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  //x.innerHTML = "Question Posted!"


}
function postAnswerBeef() {

  var item = document.getElementById("answer1").value;
  myStorage.setItem('html',"<li class='list-group-item'>" + item + "</li>"+"<span class='badge badge-primary'>New</span>");
  console.log(myStorage.getItem('html'))
  console.log(item)
  console.log("<li class='list-group-item'>")
  $('#beefList').append(myStorage.getItem('html'));
  var x = document.getElementById("snackbar");
  x.innerHTML = "Response Posted Under 'Results!'"
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  //x.innerHTML = "Question Posted!"


}

function postAnswerSalt() {

  var salt = document.getElementById("answer3").value;
    myStorage.setItem('html',"<li class='list-group-item'>" + salt + "</li>"+"<span class='badge badge-primary'>New</span>");
  console.log(myStorage.getItem('html'))
  console.log(salt)
  console.log("<li class='list-group-item'>")
  $('#saltList').append(myStorage.getItem('html'));
  var x = document.getElementById("snackbar");
  x.innerHTML = "Response Posted Under 'Results!'"
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  //x.innerHTML = "Question Posted!"

}

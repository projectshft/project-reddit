// var button = document.getElementById('button');
//
// button.addEventListener('click', function () {
//   var name = document.getElementById('name').value;
//   var message = document.getElementById('message').value;
//
//   //uupdate below to take both name and message
//   var messageList = document.createElement('li');
//   var userMessage = document.createTextNode(name);
//   messageList.appendChild(userMessage);
//   document.getElementsByClassName('posts')[0].append(messageList);
//     event.preventDefault();
// });
//
// // button.addEventListener('click', function addItem(){
// //     var ul = document.getElementById("name");
// //     var candidate = document.getElementById("candidate");
// //     var li = document.createElement("li");
// //     li.setAttribute('id',candidate.value);
// //     li.appendChild(document.createTextNode(candidate.value));
// //     ul.appendChild(li);
// //     event.preventDefault();
// // });
//
// //Aaron example
// //Could follow pattern in cart lesson, or:
// //Start in HTML.  Form-group gives inputs, input name, textarea message.  Also button type, class.
// //we want to detect button clicks, so start with that.
// //copy pasted codepen example, user input 2

var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
  var userInputName = document.getElementById('name').value;
  var userInputMessage = document.getElementById('message').value;

  var li = document.createElement('li');
  var userInputElement = document
    .createTextNode(useriInput + ' - ' + userInputMessage);

  li.appendChild(userInputElement);

  document.getElementsByClassName('posts')[0].append(li);
});

//because we have a form element, it wants to submit.  makes a post request when you submit a form.
//so "type=submit" thinks it's going to submit a form request, so it refreshes the page
//do type=button instead, or instead, capture the event as an argument, returns an event object
//"event.preventDefault()" will prevent the default action from happening on click, aka the form submission and request

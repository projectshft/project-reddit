// <ul class="names"></ul>
// <input class="name"/>
// <button>Submit</button>
//
// var button = document.getElementsByTagName('button')[0];
//
// button.addEventListener('click', function () {
//   var userInput = document.getElementsByClassName('name')[0].value;
//   var li = document.createElement('li');
//   var userInputElement = document.createTextNode(userInput);
//
//   li.appendChild(userInputElement);
//
//   document.getElementsByClassName('names')[0].append(li);
// });

// <button id="button1" type="submit" class="btn btn-primary">Post</button>
var posts = [
  { text: 'oh yea', name: 'Sean',
    comments:  [
      {text: 'so what?', name: 'David'}
    ]
  },
  { text: 'no!', name: 'Aaron',
    comments: []
  }
]

var $submitButtom = $('#button1');
var $userName = $('#name');
var $textInput = $('#message');



var postsPrimary = { text: null, name: null, comments: [ {text: null, name: null} ] }
var postsTemplate = postsPrimary.slice()

var dataUpdater = function () {

  $submitButtom.click(function() {
    // alert(posts[0].text);
    postsTemplate.text = $textInput.val()
    postsTemplate.name = $userName.val()
    posts.push(postsTemplate)
  })
};

dataUpdater();

//
// var button = document.getElementsByTagName('button')[0];
//
// button.addEventListener('click', function () {
//   var userName = document.getElementById('name').value;
//   var textInput = document.getElementById('message').value;
//   var li = document.createElement('li');
//   var userNameElement = document.createTextNode(userName);
//   var userTextElement = document.createTextNode(textInput);
//   li.appendChild(userNameElement);
//   li.appendChild(userTextElement);
//   document.getElementById('input-here').append(li);
//
// });
//
// var makePost = function (yourName, theText) {
//   var postTemplate =
//     '<tr class="post-block">'
//   + ' <td class="post-main" data-post-text="' + theText '">'
//   + ' <td class="poster" data-post-name=" 'Posted by: + yourName ' ">'
// }

//
// var createSongRow = function (songNumber, songName, songLength) {
//   var template =
//      '<tr class="album-view-song-item">'
//    + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
//    + '  <td class="song-item-title">' + songName + '</td>'
//    + '  <td class="song-item-duration">' + songLength + '</td>'
//    + '</tr>'
//    ;
//
//    var $row = $(template);
//
//    return $row;
// };

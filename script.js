var postArry = []; /* empty array to store posts */
var commentTemplate = /* template html for post comments */
'<div>'+
  
    '<p>'+
    
      '<a href="#" id="remove">remove</a>'+
      '<a href="#" id="show-comments" > comments</a>'+
    '</p>'+

  '<div class="test-block">'+
    '<form onsubmit="event.preventDefault();">'+
        '<h3>Add a comment</h3>'+
    
        '<div class="form-group">'+
          '<input id="name" type="text" placeholder="Name">'+'</input>'+
          
        '</div>'+
        '<div class="form-group">'+
          '<textarea id="message" type="text"placeholder="Message"></textarea>'+
        '</div>'+

        '<button id="submit-com" class="btn btn-primary">Submit Comment</button>'+
    
    '</form>'+
    '</div>'+
'</div>';



var makePost = function(){ /*function that takes input from html form and adds a new <li> to <div class =".posts"> child <ul id="post-comments"> */
var postName = $('#name').val();
var postTxt = $('#message').val();

if (postName && postTxt) {
  postArry.push('<li>' + '<p>' + postTxt + ' posted by: ' +postName + '<br>' + commentTemplate + '</p>' + '</li>');

  postArry.forEach(function(item){
    $('#post-items').append(item);
  });}
  console.log(postArry);
}


  
var bindClicks = function(){  /*funtcton that runs a click handler on Post button with an id="submit"; and listens for click on "comments" anchor with id="show-comments"*/ 

  $('#submit').click(function(){
  console.log('Post Button is cklicked!');
  makePost();
  $('#show-comments').click(function(){
    console.log('comments anchor is cklicked!');
    $('.test-block').toggle();});
  });
}
bindClicks();  

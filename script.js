var postArry = []; /* empty array to store posts */
var commentTemplate = /* template html for post comments */
'<div class="com-block">'+
  
      '<a href="#" class="remove-com" >remove</a>'+
      '<a href="#" class=" com-block show-com"> comments</a>'+
  
  '<div class="test-block">'+
    '<form onsubmit="event.preventDefault();">'+
        '<h3>Add a comment</h3>'+
    
        '<div class="form-group">'+
          '<input  type="text" placeholder="Name">'+'</input>'+
          
        '</div>'+
        '<div class="form-group">'+
          '<textarea  type="text"placeholder="Message"></textarea>'+
        '</div>'+

        '<button  class="btn btn-primary">Submit Comment</button>'+
    
    '</form>'+
  '</div>'+
'</div>';



var makePost = function(){ /*function that takes input from html form and adds a new <li> to <div class =".posts"> child <ul id="post-comments"> */
var postName = $('#name').val();
var postTxt = $('#message').val();
if (postName && postTxt) {

  postArry.push('<li>' + '<p>' + postTxt + ' posted by: ' +postName + '<br>' +'<ul class="post-comments"></ul>'+ commentTemplate + '</p>' + '</li>');
  var postIndex = postArry.length - 1;
  console.log(`current post index is ${postIndex}`);

  $('#post-items').append(`<li class="index-${postIndex}">` + '<p>' + postTxt + ' posted by: ' +postName + '<br>' + commentTemplate + '</p>' + '</li>');
  // $('.test-block').find('form').hide();

  }
  console.log(postArry);
}


  
var bindClicks = function(){  /*runs click handler on Post button with an id="submit"; and listens for click on "comments" anchor with id="show-comments"*/ 

  $('#submit').click(function(){
    console.log('Post Button is cklicked!');
    makePost();
      $('.show-com').click(function(){
        console.log('comments anchor is cklicked!');
        $('.com-block').find('div').toggle();
      });
     });
  }
bindClicks();  


    // var commentBlock = $('.com-block');
    // var showComments = $('.show-com');
    // function toggleComments(){
    // commentBlock.find('div').toggle();
    // }
    // showComments.click(toggleComments);

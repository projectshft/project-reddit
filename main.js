
$(document).ready(function(){



/************ Data structure to store posts and comments *********************


var post = [

  { postName: 'Alice',
    postMessage: 'Hello World??',
    postComment: [
      {
        commentName: 'Vera',
        commentMessage: 'String of comment'
      },
      {
        commentName: 'Julius',
        commentMessage: 'String of comment'
      }
  },

  { postName: 'Alice',
    postMessage: 'Hello World??',
    postComment: [
      {
        commentName: 'Vera',
        commentMessage: 'String of comment'
      },
      {
        commentName: 'Julius',
        commentMessage: 'String of comment'
      }
  },

];
***************************************************************************/

// Function to create post & comment section
// var createPostCommentSection = function(postName, postMessage,
// commentName, commentMessage){

  // Template to render post and comment section
    //see Edward link for shorthand joining method
  // var template =
  //   //long <tr> <td> lists
  // ;

// PART 1
// Creates posts

    $('form').submit(function(e){
      e.preventDefault();

     var name = $('input#name').val();
     var message = $('textarea#message').val();

      $('ul').append('<li>'+message+'<br>'+'Posted by: '+'<strong>'+name+'</strong>'+'</li>');

    });


/*
// PART 2

  // a) When a user clicks 'comments' (above each post) it should
  // toggle the comments and input box visible/hidden.

  var toggleCommentInputs = function(){
    // $('#btn1').on('click', function(){
    //   // $('.para1').hide();
    //   $('.para1').toggle();
  };


  // b) When a user clicks the 'x' next to a comment, it should delete it.

  var deleteComment = function(){
    // $('#btn1').on('click', function(){
    //   $('.para1').hide();
    // });
  };


  // c) When a user fills out the two comment inputs and clicks 'Post Comment'
  // it should immediately add the comment to the list of comments.

  var addComment = function(){

  };


  // d) Lastly, when a user clicks 'remove' above a post, it should remove the post too.
  // *****remove from data structure***********
  // use .splice()

  var removePost = function(){

  };


// }; /********  var createPostCommentSection  *********/


/**********  Declared global variables  ***********/
// var name = $('input#name').val();
// var message = $('textarea#message').val();


}); /***** $(document).ready(function() *******/

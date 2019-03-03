var postArray = []; //Array where post data is stored as objects. Sample of object template below.

// [{
//   postUser: "Bob",
//   postBody: "This is a sample post.",
//   postNumber: 0,
//     comments: [[commentTxt,userName,0],[commentTxt,userName,1],...]
//   }]

//Post template
var createPost = function(counter) { //Function to create the post and comment template then prepend it to the postBox element. Counter variable tracks post object (postNumber) position in postArray.
  var template =	  '<div class="border-bottom pb-3" data-postNumber="'+postArray[counter].postNumber+'">' //data-postNumber is to tie out array indexes to html for click events.
                    + '<div class="d-inline">'
                      + '<button type="button border-none" id="postRemove" class="btn btn-link p-0">remove </button>'
                      + '<button type="button border-none" id="postComments" class="btn btn-link p-0">comments </button>'
                      + '<h6 mb-0>'+ postArray[counter].postBody +'</h6>'
                    + '</div>'
                    + '<div class="commentBox" style="display: none;">'
                      + '<form class="form-inline">'
                      + '<input type="text" class="form-control w-25" id="commentFormBody" placeholder="Comment Text">'
                      + '<input type="text" class="form-control w-25" id="commentFormName" placeholder="Your Name">'
                      + '<button type="button" class="btn btn-primary w-25" id="postCommentBtn">Post Comment</button>'
                      + '</form>'
                    + '</div>'
                    + '<h6 class="user">Posted By: <strong>'+ postArray[counter].postUser +'</strong></h6>'
                  + '</div>'

  var post = $('.postBox');
  post.prepend(template);
}

//Comment template
var createComments = function(obj, postNumber,commentNumber) { //Function to create the comment template and prepend it to the commentBox element. Obj is the passed in "this" value from the click event.
  var template = '<div data-comment="'+commentNumber +'">' //data-comment is used to tie out array indexes to html for click events.
                  + '<h7>'+ postArray[postNumber]["comments"][commentNumber][0] +' </h7>'
                  + '<h7>Posted By: <strong>'+ postArray[postNumber]["comments"][commentNumber][1] +'</strong></h7>'
                  + '<a class="close float-none" id="commentRemove">×</a>'
                + '</div>'
 
  var comment = $(obj).closest(".commentBox");
  comment.prepend(template);
}

//Click event handler for post button that accepts user input, pushes it to postArray, and invokes createPost.
$(".btn").click(function() {
  var post = $('#postFormBody').val(); 
  var name = $('#postFormName').val();
  if (post != "" && name != "") { //Checking for empty input.
    postArray.push({postBody: post, postUser: name, postNumber: postArray.length});
    $("#postFormBody").val("");
    $("#postFormName").val("");
    createPost(postArray.length-1); //-1 is so data-postNumber and array index will match initially.
  }
});

//Click event handler for posting comments. Takes in user input, pushes to postArray, then invokes createComments.
$(document).on("click", '#postCommentBtn',function() { 
  var postNumber = $(this).closest("[data-postNumber]").attr("data-postNumber"); //This gets the post number.
  var comment = $(this).siblings('#commentFormBody').val(); //This is comment text.
  var name = $(this).siblings('#commentFormName').val(); //This is comment name.

  if(!postArray[postNumber]["comments"]) { //This checks to see if it's the first comment and if so adds the comment key to the post object, then pushes the comment array.
    commentNumber = 0;
    postArray[postNumber]["comments"] = [];
    postArray[postNumber]["comments"].push([comment,name,commentNumber]);  
  } else {
    commentNumber = postArray[postNumber]["comments"].length;
    postArray[postNumber]["comments"].push([comment,name,commentNumber]);
  }

  if (comment != "" && name != "") { //Checking for empty input.
    $(this).siblings("#commentFormBody").val("");
    $(this).siblings("#commentFormName").val("");
    createComments(this, postNumber, commentNumber);
  }
});

//Post removal
$(document).on("click", '#postRemove',function() { //Click handler for removing posts. Gets the post number from the data attribute, splices postArray to remove it, then removes the div.
  var postNumber = $(this).closest("[data-postNumber]").attr("data-postNumber");
  var postDeleteTarget = postArray.findIndex(post => post.postNumber == postNumber);
  postArray.splice(postDeleteTarget,1);
  $(this).closest("[data-postNumber]").remove();
});

//Comment removal
$(document).on("click", '#commentRemove',function() { //Click handler for removing comments. Comments are contained in their own div, so just traverses up one parent and removes the div.
  var postNumber = $(this).closest("[data-postNumber]").attr("data-postNumber"); //Post postNumber attribute to delete comment from.
  var postDeleteTarget = postArray.findIndex(post => post.postNumber == postNumber); //postNumber to delete from. This is required in case any posts are deleted b/c indexes will be off.
  var commentNumber = $(this).closest("[data-comment]").attr("data-comment"); //Comment data-comment to delete.
  var commentDeleteTarget = postArray[postDeleteTarget]["comments"].findIndex(comment => comment[2] == commentNumber);  //Comment index in postArray.
  postArray[postNumber]["comments"].splice(commentDeleteTarget,1);
  $(this).parent('div').remove();

});

//Click handler to toggle show/hide comment elements.
$(document).on("click", '#postComments',function() { 
  $(this).parent().siblings(".commentBox").toggle();
});

$(document).on("click", function() { 
  console.log(postArray);
});
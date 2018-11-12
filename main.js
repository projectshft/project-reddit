// TODO clean up the comment buttons
//add edit feature


// First, I want to listed for a click event on the submit post button
//
// when a click is heard, take the input from the input fields and add to psot data.
//
// take data from post data and create the post based off the template
//
// then update the board with the posts based off the post data

//this will be the module that holds all the functions and dataArray, which prevents unintended manipulation or deletion of the data

var Reddit = function() {

  //Array that will hold all the posts
  var allPostsArray = [];
  var postCount = 1;
  var commentCount = 1;


  //I want to gather the information and create a post using handlebars

  var generatePost = function(postObject) {
    var postSource = $('#post-template').html();
    var postTemplate = Handlebars.compile(postSource);
    var newPostHTML = postTemplate(postObject);
    return newPostHTML;
  }

  //Now I need to generate the comments html

  var generateCommentsHTML = function(commentObject) {
    var commentSource = $('#comment-template').html();
    var commentTemplate = Handlebars.compile(commentSource);
    var newCommentHTML = commentTemplate(commentObject);
    return newCommentHTML;
  }

  //render the comments based on array data

  //******currenty unused*****
  var renderComments = function(thisPost) {

    $('.comments-section').empty();
    var commentsArray = thisPost['postComments']
    commentsArray.forEach(function(commentInArray) {
      var thisCommentHTML = generateCommentsHTML(commentInArray);
      $('.comments-section').prepend(thisCommentHTML)

    });
  };
  // I want to gather the post information and add to database
  var addAndGetPostData = function() {
    var $postAuthor = $('#post-input-name').val();
    var $postMessage = $('#post-input-message').val();
    var postData = {
      uniquePostNumber: postCount,
      postAuthor: $postAuthor,
      postMessage: $postMessage,
      postComments: []
    };
    allPostsArray.push(postData);
    postCount++;
  };

  //This function reads data from the database and returns the post Object
  var getPostObjectFromPostArray = function(dataArray, arrayIndex) {
    var retrievedPostObject = dataArray[arrayIndex];
    return retrievedPostObject;
  }

  //This function clears the board and posts the post based on the array data

  var renderPosts = function() {
    //clear the board
    $postBoard = $('.post-list');
    $postBoard.empty();
    //get data - add to database - create post from data in database
    // for each post in the array, make a post
    allPostsArray.forEach(function(postInArray) {
      var postHTML = generatePost(postInArray);
      //and append it to the (emptied) board of posts
      $postBoard.append(postHTML);
      $('#post-input-name').val("");
      $('#post-input-message').val("");
    });
  };

  //Get the comment data FOR THAT POST and push it to array

  var addCommentDataToArray = function(commentMessage, commentAuthor, postID) {
    //Put comments into an object)
    var commentsObject = {
      uniqueCommentNumber: commentCount,
      commentAuthor: commentAuthor,
      commentMessage: commentMessage
    }
    var correctPostObject = allPostsArray.find(function(postObjects) {
      return postObjects['uniquePostNumber'] == postID;
    });

    correctPostObject['postComments'].push(commentsObject);
    commentCount++;
  };
  //Deletes the post from the main array

  var deletePost = function(postID) {
    var thisPost = allPostsArray.find(function(post) {
      return post["uniquePostNumber"] == postID;
    });
    var thisPostIndex = allPostsArray.indexOf(thisPost);
    allPostsArray.splice(thisPostIndex, 1);

  };

  //delete the comment from the comments array

  var deleteCommentFromArray = function(postID, commentID) {
    //need to get the post object first
    var thisPost = allPostsArray.find(function(post) {
      return post["uniquePostNumber"] == postID;
    });
    //once i get the right post object I need to access the array and then find the comment using the author
    var thisPostComments = thisPost['postComments'];
    var thisCommentObject = thisPostComments.find(function(commentObjects) {
      return commentObjects['uniqueCommentNumber'] == commentID;
    });
    thisCommentIndex = thisPostComments.indexOf(thisCommentObject);
    thisPostComments.splice(thisCommentIndex, 1);
  }

  //this is used to find the current post

  var findThisPost = function(idNumber) {
    var thisPost = allPostsArray.find(function(allPosts) {
      return allPosts['uniquePostNumber'] == idNumber;
    });
    return thisPost;
  }

  return {
    addAndGetPostData: addAndGetPostData,
    renderPosts: renderPosts,
    deletePost: deletePost,
    addCommentDataToArray: addCommentDataToArray,
    generateCommentsHTML: generateCommentsHTML,
    deleteCommentFromArray: deleteCommentFromArray,
    findThisPost: findThisPost
  };


};

var newReddit = Reddit();

$(document).ready(function() {
  $('.submit-post-btn').on('click', function() {
    newReddit.addAndGetPostData();
    newReddit.renderPosts();
  });

  //event delegation to listen for created elements

  $(document).on('click', '.comments-btn', function() {
    var $commentArea = $(this).parent().parent().find('.add-comment');
    $commentArea.toggle()
  });

  $(document).on('click', '.delete-btn', function() {
    //need to remove it from the post database
    var $idNumber = $(this).closest('.post').find('.id-number').html();
    newReddit.deletePost($idNumber)
    newReddit.renderPosts();

  });
  $(document).on('click', '.post-comment-btn', function() {
    //need to have these vars here because this binding is not working how I would like. It is basically grabbing the post-specific data. I don't like it but it is working for now

    var $thisPostCommentsSection = $(this).parent().parent().find('.comments-section');
    var $commentInputMessage = $(this).siblings('.comment-input-message');
    var $commentInputAuthor = $(this).siblings('.comment-input-author');
    var $idNumber = $(this).closest('.post').find('.id-number').html();
    newReddit.addCommentDataToArray($commentInputMessage.val(), $commentInputAuthor.val(), $idNumber);

    //now comment data is on the master array
    // now I need to render the comments onto the page by finding the correct object from the database

    var thisPost = newReddit.findThisPost($idNumber);
// now empty the comment section and re-render it all
    var commentsArray = thisPost['postComments'];
    $thisPostCommentsSection.empty();

    commentsArray.forEach(function(commentInArray) {
      var thisCommentHTML = newReddit.generateCommentsHTML(commentInArray);
      $thisPostCommentsSection.prepend(thisCommentHTML)
      //empty the edit forms
      $commentInputMessage.val("");
      $commentInputAuthor.val("");
    });
  });

  $(document).on('click', '.delete-comment-btn', function() {
    //this uses the post and comment id numbers to delete the comment. again, not pretty
    var $postIdNumber = $(this).closest('.post').find('.id-number').html();
    var $commentIDNumber = $(this).prev().find('.comment-id').html();
    newReddit.deleteCommentFromArray($postIdNumber, $commentIDNumber);

    var $thisCommentSection = $(this).closest('.comments-section');

    var thisPost = newReddit.findThisPost($postIdNumber);

    var commentsArray = thisPost['postComments'];
    $thisCommentSection.empty();
    commentsArray.forEach(function(commentInArray) {
      var thisCommentHTML = newReddit.generateCommentsHTML(commentInArray);
      $thisCommentSection.prepend(thisCommentHTML);
    });
  });
});

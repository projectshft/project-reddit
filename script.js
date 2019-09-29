//Where will posts will be held once submitted

//Post events to page after button has been clicked
//Add posts to the page

//Allow users to comment on posts
//Display comments attached to posts

//render delete button to remove posts

//array to hold all posts as they are submitted
let posts = [];

let $postButton = $('.submit-post');
let $postBoard = $('.post-board');
let $postCard = $('.card-style');
let $cardTitle = $('.card-title');
let $postNumber = $('.post-num');
let $postName = $('.post-name');
let $postText = $('.card-text');
let $cardTemplate = $('.card-style');
let $formText = $('.post-text');
let $myForm = $('.myform');
let $postForum = $('.post-area');
let $cardLink = $('.card-link');
let $cardLink2 = $('.card-link2');
let $cardComments = $('.card-comments');

//teamplate for creating a new post based on entries passed in by the user
let createNewCard = function(postNumber, name, post){
  let newCardTemplate =
      '<div class="card-style">'
    +  '<div class="card" style="width: 50rem;">'
    +   '<div class="card-comments">'
    +   '<div class="card-body">'
    +        '<h5 class="card-title post-name">' + name + '</h5>'
    +        '<h6 class="card-subtitle mb-2 text-muted post-num">Post Number: '  + postNumber + '</h6>'
    +        '<p class="card-text card-text">' + post + '</p>'
    +        '<form class="comment">'
    +            '<div class="form-row">'
    +              '<div class="col">'
    +                '<input type="text" class="form-control comment-name" placeholder="Name">'
    +              '</div>'
    +              '<div class="col">'
    +                '<input type="text" class="form-control comment-remark" placeholder="Comment">'
    +              '</div>'
    +            '</div>'
    +          '</form>'
    +         '<a href="#" class="btn btn-primary card-link">Comment</a>'
    +        '<a href="#" class="btn btn-primary card-link2">Delete</a>'
    +    '</div>'
    +   '</div>'
    +  '</div>'
    return newCardTemplate;
};

//teamplate for creating a new comment based on values passed in by the user
let createNewComment = function(name, post) {
  let newComment =
      '<div class="card-comment">'
    +   '<p>' + post + ' Posted By:<strong> ' + name + '</strong>'
    +   '<button type="button" class="close close-this" aria-label="Close">'
    +     '<span aria-hidden="true" class="close-this">&times;</span>'
    +   '</button></p>'
    + '</div>'

  return newComment;
}


//adds click event to submit post material
$postButton.click(function(event) {
      //prevents html from sending the form via post to ensure it can post on the page
      event.preventDefault();

      //places the information for each post into an object
      let allPosts = {
        name: $('.user-name').val(),
        post: $('.post-text').val(),
        comments: []
      };

      //places each object holding post information into an array
      posts.push(allPosts);
      //loops through the array of posts, posting them and comments
      for (var i = posts.length - 1; i < posts.length; i++) {
        let newPost = createNewCard([i + 1], posts[i].name, posts[i].post);

        //adds post to the page
        $postForum.append(newPost);

  }
      //resets input fields to default
      $('.user-name').val('');
      $('.post-text').val('');
})

//function to add user comments
$postForum.click(function(event) {
  if (event.target.className == 'btn btn-primary card-link') {
    let postComments = {
      name: $('.comment-name').val(),
      comment: $('.comment-remark').val()
    };

    /*
    adds comment object to the comments array for that item, commented out because I was having
    difficulty getting through the object for the right values.
    */
    //posts[0].comments.push(postComments);

    //stores the HTML for adding the comment into a variable
    let userComment = createNewComment(postComments.name, postComments.comment);

    //adds comment to the end of the post
    /*
    I had a lot of trouble trying to target the comment to the correct post. I still haven't figured out what the problem is
    but left some of the code commented out to talk through.
    */
    //$('.card-comments').prepend(userComment)
    $(this).attr('class', '.card-comments').prepend(userComment);
    //removes the post if clicked
  } else if (event.target.className == 'btn btn-primary card-link2'){
    $('.card-style').remove();
  }
});
//function to delete comments
$postForum.click(function(event) {
  if (event.target.className == 'close-this') {
  event.target.closest('div').remove();
  }
  //sets comments input back to default
  $('.comment-name').val('');
  $('.comment-remark').val('');
});

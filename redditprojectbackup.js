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

//teamplate for creating a new post based on entries passed in by the user
let createNewCard = function(postNumber, name, post){
  let newCardTemplate =
      '<div class="card-style">'
    +  '<div class="card" style="width: 50rem;">'
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

let createNewComment = function(name, post) {
  let newComment =
      '<div class="card-comment">'
    +   '<div class="card-header">Comment</div>'
    +     '<div class="card-body">'
    +     '<h5 class="card-title">' + name + '</h5>'
    +     '<p class="card-text">' + post + '</p>'
    +     '<a href="#" class="btn btn-primary delete-comment">Delete</a>'
    +   '</div>'
    + '</div>'
  return newComment;
}


//add click event to submit post material
$postButton.click(function(event) {
      //prevent html from sending the form via post to ensure it can post on the page
      event.preventDefault();

      //places the information for each post into an object
      let allPosts = {
        name: $('.user-name').val(),
        post: $('.post-text').val(),
        comments: []
      };

      console.log(allPosts.name, allPosts.post);
      //places each object holding post information into an array
      posts.push(allPosts);
      //loops through the array of posts, posting them and comments
      for (var i = posts.length - 1; i < posts.length; i++) {
        let newPost = createNewCard([i + 1], posts[i].name, posts[i].post);
        //adds post to the page
        $postForum.append(newPost);
        //new click event for comment button on each post
        $('.card-link').click(function(event) {
          event.preventDefault();
          //creates a new object to store comments on each post
          let postComments = {
            name: $('.comment-name').val(),
            comment: $('.comment-remark').val()
          };
          //adds comment object to the comments array for that item
          posts[i - 1].comments.push(postComments);
          //loops through the comments for each post item
          for (var j = posts[i - 1].comments.length - 1; j < posts[i - 1].comments.length; j++) {
            //creates html string to add comment to the comments section
            let userComment = createNewComment(posts[i - 1].comments[j].name, posts[i - 1].comments[j].comment);
            //adds comment to the end of the post
            $postForum.append(userComment)
          }
          //sets values in comment fields back to default
          $('.comment-name').val(''),
          $('.comment-remark').val('');
          //adds click function to remove posts on delete
          $('.card-link2').click(function() {
            $('.card-style').remove();
          });
          //adds click function to remove comments on delete
          $('.delete-comment').click(function() {
            $('.card-comment').remove();
          });
         });
       }
       $('.user-name').val('');
       $('.post-text').val('');
});

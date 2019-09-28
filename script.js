//Where will posts will be held once submitted

//Post events to page after button has been clicked
//Add posts to the page

//Allow users to comment on posts
//Display comments attached to posts

//render delete button to remove posts

//array to hold all posts as they are submitted


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
let $cardComment = $('.card-link');

let createNewCard = function(postNumber, name, post){
  let newCardTemplate =
    '<div class="card-style">'
    +  '<div class="card" style="width: 50rem;">'
    +   '<div class="card-body">'
    +        '<h5 class="card-title post-name">' + name + '</h5>'
    +        '<h6 class="card-subtitle mb-2 text-muted post-num">' + postNumber + '</h6>'
    +        '<p class="card-text card-text">' + post + '</p>'
    +        '<a href="#" class="card-link">Comment</a>'
    +        '<a href="#" class="card-link">Delete</a>'
    +    '</div>'
    +   '</div>'
    +  '</div>'
    return newCardTemplate;
};

//add click event to submit post material
$postButton.click(function(event) {
  //prevent html from sending the form
  event.preventDefault();

  let posts = [];

  let allPosts = {
     name: $('.user-name').val(),
     post: $('.post-text').val()
   };

   console.log(allPosts.name, allPosts.post);

   posts.push(allPosts);
   console.log(posts);
   for (var i = 0; i < posts.length; i++) {
     let newPost = createNewCard([i+1], posts[i].name, posts[i].post);
      $postForum.append(newPost);
      console.log(newPost);
     // $postName.append(posts[i].name);
     // $postNumber.append('Post Number: ' + [i+1]);
     // $postText.append(posts[i].post);
   };
    $('.user-name').val('')
    $('.post-text').val('')
});

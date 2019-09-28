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
let $myForm = $('.myform')




//add click event to submit post material
$postButton.click(function(event) {
  //prevent html from sending the form
  event.preventDefault();

  let obj = {
     name: $('.user-name').val(),
     post: $('.post-text').val()
   };

   console.log(obj.name, obj.post);

   posts.push(obj);
   console.log(posts);
   for (var i = 0; i < posts.length; i++) {
     $cardTemplate.append();
     $postName.append(posts[i].name);
     $postNumber.append('Post Number: ' + [i+1]);
     $postText.append(posts[i].post);
   };
   $('.user-name').val('')
   $('.post-text').val('')
});


import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'; //https://fakerjs.dev/api/image.html

const postsObject = {
  numberOfPosts: 0,
  posts: {}
};

const $postContainer = $('#post-container');

$(document).ready(function() {

  $('#new-comment-form').submit(function(e) {
    e.preventDefault()

    postsObject.numberOfPosts++
    const $postNumber = postsObject.numberOfPosts

    const $commentName = $(this).find('#comment-name').val()
    const $commentMessage = $(this).find('#comment-message').val()

    postsObject.posts[`post${$postNumber}`] = {
      name: $commentName,
      message: $commentMessage,
      likes: 0, 
      numberOfReplies: 0,
      replies: {}
    }

    const $postId = postsObject.posts[`post${$postNumber}`];

    let $newPost = 
    `<div id="post${postsObject.numberOfPosts}" class="user-post container-fluid text-light mt-5  ">
      <div class="row align-items-center p-1">
        <div class='col-1 p-2'>
          <img src='${faker.image.people('100', '100', true)}' class="rounded-circle img-fluid p-0" >
        </div>
        <div class='col-11'>
          <div class="row justify-content-center bg-secondary rounded">
            <div class="user-name row fw-light justify-content-between align-items-center mb-0 mt-2 pb-0">
              <p class="col-11 px-0 mb-0"><strong>${$postId.name}</strong></p>
              <button type="button" class="remove-comment btn-close col-1" aria-label="Close"></button>
            </div>
            <div class="user-message row fw-light mb-2">
              <p class="col pb-0 mb-0 px-0">${$postId.message}</p>
            </div>
          </div>
        </div>
      </div>
      <div class='row p-1'>  
        <p class="comment-like-button col-1 rounded border border-dark text-secondary text-center p-0 offset-1 mb-0 hover"><small>Like</small></p>
        <p class="reply-button col-1 rounded border border-dark text-secondary text-center p-0 mb-0 hover"><small>Reply</small></p>
        <p class="col-3 rounded border border-dark text-start text-secondary mb-0"><small>${getCurrentTime(new Date)}</small></p>
      </div>  
      <div id='reply-container' class='row justify-content-end d-none p-1'>
      </div>
      <div id="new-reply-form-container" class="row justify-content-end d-none p-1">
        <form id='new-reply-form' class='col-10 p-0'>
          <div class="mb-3">
            <input
              type="name"
              name="reply-name"
              id="reply-name"
              class="form-control form-control-sm my-2"
              placeholder="name"
              required
            />
          </div>
          <div class="mb-3">
            <textarea
              name="reply-message"
              id="reply-message"
              class="form-control form-control-sm my-2"
              placeholder="comment"
              required
            ></textarea>
          </div>
          <button class="btn btn-primary" id="reply-submit" type="submit">
            Reply
          </button>
        </form>
      </div>
    </div>
    `

    $($newPost).hide().appendTo($postContainer).fadeIn(200)

    $(this)[0].reset()
  })

  //SECTION hover over effect on like and reply
  $($postContainer).on('mouseenter', '.hover', function() {
    $(this).addClass('bg-primary text-light')
    $(this).css('cursor', 'pointer')
  }).on("mouseleave", '.hover', function(){
    $(this).removeClass('bg-primary text-light')
  })

  //SECTION like functionality for comments
  $($postContainer).on('click', '.comment-like-button', function(e) {
    const $currentPost = $(this).parentsUntil($postContainer)[1].id;
    postsObject.posts[$currentPost]['likes']++
    const $currentLikes = postsObject.posts[$currentPost]['likes']
    if($(this).parent().children().length === 3) {
      $(this).parent().append('<i class="col-1 text-end text-primary offset-4 pr-0 bi bi-hand-thumbs-up-fill"></i>')
      $(this).parent().append('<p class="col-1 text-start text-primary pl-0 mb-0"><small class="likes-text">1<small></p>')  
    } else {
      $(this).parent().find('.likes-text').text($currentLikes);
    }
  })

    // //SECTION like functionality for replies
    // $($postContainer).on('click', '.reply-like-button', function(e) {
    //   const $currentPost = $(this).parentsUntil($postContainer)[1].id;
    //   postsObject.posts[$currentPost]['likes']++
    //   const $currentLikes = postsObject.posts[$currentPost]['likes']
    //   if($(this).parent().children().length === 3) {
    //     $(this).parent().append('<i class="col-1 text-end text-primary offset-4 bi bi-hand-thumbs-up-fill"></i>')
    //     $(this).parent().append('<p class="col-1 text-start text-primary mb-0"><small class="likes-text">1<small></p>')  
    //   } else {
    //     $(this).parent().find('.likes-text').text($currentLikes);
    //   }
    // })

  //SECTION Show Reply Div
  $($postContainer).on('click', '.reply-button', function() {
    const $replyContainer = $(this).parent().siblings('#reply-container')
    const $newReplyFormContainer = $(this).parent().siblings('#new-reply-form-container')
    $replyContainer.toggleClass('d-none');
    $newReplyFormContainer.toggleClass('d-none');
    const text = $(this).find('small').text();
    $(this).find('small').text(text === 'Reply' ? 'Close' : 'Reply')
    $(this).toggleClass('bg-danger text-secondary')
  })


  //SECTION Add Reply
  $($postContainer).on('submit', '#new-reply-form', function(e) {
    e.preventDefault();

    const $replyName = $(this).find('#reply-name').val()
    const $replyMessage= $(this).find('#reply-message').val()

    const $currentPost = $(this).parentsUntil($postContainer)[1].id;

    postsObject.posts[$currentPost]['numberOfReplies']++
    const $numberOfReplies = postsObject.posts[$currentPost]['numberOfReplies']


    postsObject.posts[$currentPost]['replies'][`reply${$numberOfReplies}`] = {name: $replyName, message: $replyMessage, likes: 0}

    console.log(postsObject);

    const $newReply = 
    `<div id="${postsObject.posts[$currentPost]['numberOfReplies']}" class="user-post col-10 text-light my-3">
    <div class="row align-items-center">
      <div class='col-1 p-2'>
        <img src='${faker.image.cats('100', '100', true)}' class="rounded-circle img-fluid p-0" >
      </div>
      <div class='col-11'>
        <div class="row justify-content-center bg-secondary rounded">
          <div class="user-name row fw-light justify-content-between align-items-center mb-0 mt-2 pb-0">
            <p class="col-11 px-0 mb-0"><strong>${$replyName}</strong></p>
            <button type="button" class="remove-comment btn-close col-1" aria-label="Close"></button>
          </div>
          <div class="user-message row fw-light mb-2">
            <p class="col pb-0 mb-0 px-0">${$replyMessage}</p>
          </div>
        </div>
      </div>
    </div>
    <div class='row text-secondary'>  
      <p class="like-button col-1 rounded border border-dark text-center p-0 offset-1 mb-0 hover"><small>Like</small></p>
      <p class="col-3 rounded border border-dark text-start mb-0"><small>${getCurrentTime(new Date)}</small></p>
    </div>  `


    const $replyContainer = $(this).parentsUntil($postContainer).find('#reply-container')
    $($newReply).hide().appendTo($replyContainer).fadeIn(200);



    $(this)[0].reset();
  })

})


//SECTION Delete Comment on Close Button
$($postContainer).on('click', '.remove-comment', function() {
  $(this).parentsUntil("#post-container").remove();
})


//SECTION Function to get current time and display as HH:MM:SS AM/PM
let getCurrentTime = function(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+seconds : seconds;

  let strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  return strTime;
}     
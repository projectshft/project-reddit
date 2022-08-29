import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'; //https://fakerjs.dev/api/image.html


//object to store state of comments
const commentsObject = {
  numberOfComments: 0,
  comments: {}
};

//overall container to hold all comments
const $commentContainer = $('#comment-container');


$(document).ready(function() {

  //ANCHOR creates new comment when form is submitted
  $('#new-comment-form').submit(function(e) {
    e.preventDefault() //prevents submission from reloading page

    //each comment created adds to the numberOfComments in the commentsObject
    commentsObject.numberOfComments++
    const $commentNumber = commentsObject.numberOfComments

    //retrieving values of Name and Message 
    const $commentName = $(this).find('#comment-name').val()
    const $commentMessage = $(this).find('#comment-message').val()

    //populates commentObject with data on each comment
    commentsObject.comments[`comment${$commentNumber}`] = {
      name: $commentName,
      message: $commentMessage,
      likes: 0, 
      numberOfReplies: 0,
      replies: {}
    }

    //variable to be used to assign IDs to each post
    const $commentId = commentsObject.comments[`comment${$commentNumber}`];

    //HTML template for each new comment
    let $newComment = 
    `<div id="comment${commentsObject.numberOfComments}" class="user-comment container-fluid text-light mt-5  ">
      <div class="row align-items-center p-1">
        <div class='col-1 p-2'>
          <img src='${faker.image.people('100', '100', true)}' class="rounded-circle img-fluid p-0" >
        </div>
        <div class='col-11'>
          <div class="row justify-content-center bg-secondary rounded">
            <div class="user-name row fw-light justify-content-between align-items-center mb-0 mt-2 pb-0">
              <h6 class="col-11 px-0 mb-0"><strong>${$commentId.name}</strong></h6>
              <button type="button" class="remove-comment btn-close col-1" aria-label="Close"></button>
            </div>
            <div class="user-message row fw-light mb-2">
              <p class="col pb-0 mb-0 px-0">${$commentId.message}</p>
            </div>
          </div>
        </div>
      </div>
      <div class='row p-1'>  
        <p class="like-button col-1 rounded border border-dark text-secondary text-center p-0 offset-1 mb-0 hover"><small>Like</small></p>
        <p class="reply-button col-2 rounded border border-dark text-secondary text-center p-0 pl-2 mb-0 hover"><small>Reply<span class="reply-count"></span></small></p>
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
              class="form-control form-control-sm my-2 border-secondary bg-secondary text-light"
              placeholder="name"
              required
            />
          </div>
          <div class="mb-3">
            <textarea
              name="reply-message"
              id="reply-message"
              class="form-control form-control-sm my-2 border-secondary bg-secondary text-light"
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

    //comment will fade in on submission
    $($newComment).hide().appendTo($commentContainer).fadeIn(200)

    $(this)[0].reset() //resets form after submission
  })


  //ANCHOR hover over effect on like and reply
  $($commentContainer).on('mouseenter', '.hover', function() {
    $(this).addClass('bg-primary text-light')
    $(this).css('cursor', 'pointer')
  }).on("mouseleave", '.hover', function(){
    $(this).removeClass('bg-primary text-light')
  })


  //ANCHOR like functionality for comments
  $($commentContainer).on('click', '.like-button', function(e) {

    const $currentCommentId = $(this).closest('.user-comment').attr('id');
    const $currentReplyId = $(this).closest('.user-reply').attr('id');

    //logic to determine whether like being clicked is comment or reply
    if($currentReplyId) {
      //apply likes only to select reply
      commentsObject.comments[$currentCommentId]['replies'][$currentReplyId]['likes'] = commentsObject.comments[$currentCommentId]['replies'][$currentReplyId]['likes'] + 1 || 1
      const $currentLikes = commentsObject.comments[$currentCommentId]['replies'][$currentReplyId]['likes']
      if($(this).parent().children().length ==2 ) {
        $(this).parent().append('<i class="col-1 text-end text-primary offset-5 pr-0 bi bi-hand-thumbs-up-fill"></i>')
        $(this).parent().append('<p class="col-1 text-start text-primary pl-0 mb-0"><small class="likes-text">1<small></p>')  
      } else {
        $(this).parent().find('.likes-text').text($currentLikes);
      }
    } else {
      //apply likes only to selected comment
      commentsObject.comments[$currentCommentId]['likes']++
      const $currentLikes = commentsObject.comments[$currentCommentId]['likes']
      if($(this).parent().children().length === 3) {
        $(this).parent().append('<i class="col-1 text-end text-primary offset-3 pr-0 bi bi-hand-thumbs-up-fill"></i>')
        $(this).parent().append('<p class="col-1 text-start text-primary pl-0 mb-0"><small class="likes-text">1<small></p>')  
      } else {
        $(this).parent().find('.likes-text').text($currentLikes);
      }
    }

  })


  //ANCHOR Show Reply Div
  $($commentContainer).on('click', '.reply-button', function() {
    const $replyContainer = $(this).parent().siblings('#reply-container')
    const $newReplyFormContainer = $(this).parent().siblings('#new-reply-form-container')
    $replyContainer.toggleClass('d-none');
    $newReplyFormContainer.toggleClass('d-none');
    const text = $(this).find('small').text();
    // $(this).find('small').text(text === 'Reply' ? 'Hide' : 'Reply')
    $(this).toggleClass('bg-danger text-secondary')
  })


  //ANCHOR Add Reply
  $($commentContainer).on('submit', '#new-reply-form', function(e) {
    e.preventDefault(); //prevents submission from reloading page

    const $replyName = $(this).find('#reply-name').val()
    const $replyMessage= $(this).find('#reply-message').val()

    const $currentComment = $(this).closest('.user-comment').attr('id');

    //tracks number of replies in each comment
    commentsObject.comments[$currentComment]['numberOfReplies']++
    const $numberOfReplies = commentsObject.comments[$currentComment]['numberOfReplies']

    //populates commentsObject with each reply data
    commentsObject.comments[$currentComment]['replies'][`reply${$numberOfReplies}`] = {name: $replyName, message: $replyMessage, likes: 0}

    //HTML template for new replies
    const $newReply = 
    `<div id="reply${commentsObject.comments[$currentComment]['numberOfReplies']}" class="user-reply col-10 text-light my-3">
      <div class="row align-items-center">
        <div class='col-1 p-2'>
          <img src='${faker.image.cats('100', '100', true)}' class="rounded-circle img-fluid p-0" >
        </div>
        <div class='col-11'>
          <div class="row justify-content-center bg-secondary rounded">
            <div class="user-name row fw-light justify-content-between align-items-center mb-0 mt-2 pb-0">
              <h6 class="col-11 px-0 mb-0"><strong>${$replyName}</strong></h6>
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
      </div>  
    <div>`

    //updates the reply text to show number of replies within each comment
    $(this).closest('.user-comment').find('.reply-count').text(` (${$numberOfReplies})`)

    const $replyContainer = $(this).parentsUntil($commentContainer).find('#reply-container')
    $($newReply).hide().appendTo($replyContainer).fadeIn(200);

    $(this)[0].reset();  //resets form after submission
  })


  //ANCHOR Delete Comment on Close Button
  $($commentContainer).on('click', '.remove-comment', function() {
    $(this).closest(".user-comment").remove();
  })
})


//ANCHOR Function to get current time and display as HH:MM:SS AM/PM
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
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
    const newComment = $('#new-comment-template').html();
    const commentTemplate = Handlebars.compile(newComment);
    const commentHTML = commentTemplate(
      {
        id: `comment${commentsObject.numberOfComments}`,
        faker: `${faker.image.people('100', '100', true)}`,
        name: `${$commentId.name}`,
        message: `${$commentId.message}`,
        date: `${getCurrentTime(new Date)}`
      }
    )

    //comment will fade in on submission
    $(commentHTML).hide().appendTo($commentContainer).fadeIn(200)

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
      
      if($(this).parent().children().length === 2 ) {
        $(this).parent().append('<i class="col-1 text-end text-primary offset-5 pr-0 bi bi-hand-thumbs-up-fill"></i>')
        $(this).parent().append('<p class="col-1 text-start text-primary pl-0 mb-0"><small class="likes-text">1<small></p>')  
      } else {
        $(this).parent().find('.likes-text').text($currentLikes);
      }
    } else {
      //apply likes only to selected comment
      commentsObject.comments[$currentCommentId]['likes']++
      const $currentLikes = commentsObject.comments[$currentCommentId]['likes']
      console.log($currentCommentId)
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

    const newReply = $('#new-reply-template').html();
    const replyTemplate = Handlebars.compile(newReply);
    const replyHTML = replyTemplate({
      id: `reply${commentsObject.comments[$currentComment]['numberOfReplies']}`,
      faker: `${faker.image.cats('100', '100', true)}`, 
      name: `${$replyName}`,
      message: `${$replyMessage}`,
      date: `${getCurrentTime(new Date)}`
    })

    //updates the reply text to show number of replies within each comment
    $(this).closest('.user-comment').find('.reply-count').text(` (${$numberOfReplies})`)

    const $replyContainer = $(this).parentsUntil($commentContainer).find('#reply-container')
    $(replyHTML).hide().appendTo($replyContainer).fadeIn(200);

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
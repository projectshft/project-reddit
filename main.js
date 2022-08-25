
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

    postsObject.posts[`post${$postNumber}`] = {name: $commentName, message: $commentMessage}

    const $postId = postsObject.posts[`post${$postNumber}`];

    let $newPost = 
    `<div class="user-post container-fluid text-light my-3">
      <div class="row align-items-center">
        <div class='col-1 p-2'>
          <img src='${faker.image.abstract()}' class="rounded-circle img-fluid p-0" >
        </div>
        <div class='col-11'>
          <div class="row justify-content-center bg-secondary rounded">
            <div class="user-name row fw-light justify-content-between align-items-center mb-0 mt-2 pb-0">
              <p class="col-11 px-0 mb-0"><strong>${$postId.name}</strong></p>
              <button type="button" class="remove-post btn-close col-1" aria-label="Close"></button>
            </div>
            <div class="user-message row fw-light mb-2">
              <p class="col pb-0 mb-0 px-0">${$postId.message}</p>
            </div>
          </div>
        </div>
      <div class='row'>  
        <p class="col-1 rounded border border-dark text-center p-0 offset-1 mb-0 hover"><small class="like">Like</small></p>
        <p class="col-1 rounded border border-dark text-center p-0 mb-0 hover"><small class="reply">Reply</small></p>
        <p class="col-3 rounded border border-dark text-start mb-0"><small>${getCurrentTime(new Date)}</small></p>
      </div>  
    </div>`

    $($newPost).hide().appendTo($postContainer).fadeIn(500)

    console.log(postsObject)
    $(this)[0].reset()
  })

  //SECTION hover over effect
  $($postContainer).on('mouseenter', '.hover', function() {
    $(this).addClass('bg-primary')
    $(this).css('cursor', 'pointer')
  }).on("mouseleave", '.hover', function(){
    $(this).removeClass('bg-primary')
  })

  //SECTION like functionality
  $($postContainer).click(function(e) {
    if(e.target && e.target.classList.contains('like')) {

    }
  })


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
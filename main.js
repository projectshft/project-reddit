

const form = document.getElementById('new-post-form')
const $postContainer = $('#post-container');

$(document).ready(function() {
  $('#new-post-form').submit(function(e) {
    e.preventDefault();


    
    const $name = $('#name').val();
    const $message = $('#message').val();
    
    //SECTION new post template
    let $newPost = 
    `<div class="container-fluid user-post text-light my-3">
      <div class="row justify-content-center bg-secondary rounded">
        <div class="row justify-content-between align-items-center mb-0 mt-2 pb-0 user-message">
          <p class="col-11 px-0 mb-0"><strong>${$name}</strong></p>
          <button type="button" class="remove-post btn-close col-1" aria-label="Close"></button>
        </div>
        <div class="row user-message mb-2">
          <p class="col pb-0 mb-0 px-0">${$message}</p>
        </div>
      </div>
      <div id="" class="test row mb-2">
        <p data-likes="0" class="col-1 like"><small>Like</small></p>
        <p class="col-1 reply"><small>Reply</small></p>
        <p class="col-3">
        <small>${getCurrentTime(new Date)}</small>
        </p>
      </div>
    </div>`
    
    $($newPost).hide().appendTo($postContainer).fadeIn('500')
    
    form.reset(); //resets form after each submission
  })


  //SECTION adds ability to increase likes
  $($postContainer).on('click', ".like", function() {

    const $numOfLikesTemplate = `<p class="col-1 offset-5 text-white text-end num-likes"><small>0<small></p>`
    const $thumbsUpTemplate = `<i class="col-1 text-start text-success pl-0 bi bi-hand-thumbs-up-fill"></i>`

    let numOfLikes = $(this).data('likes');
    
    //number of likes and icon doesn't show until first like
    if(numOfLikes === 0) {
      $(this).parent().append($numOfLikesTemplate)
      $(this).parent().append($thumbsUpTemplate)
    }
    
    numOfLikes++;

    $(this).data('likes', numOfLikes) //set likes data property to increased number
    $(this).parent().find('.num-likes').text(numOfLikes); //change likes html text
  })

 //SECTION adds ability to delete post
 $($postContainer).on('click', '.remove-post', function() {
  const $userPost = $(this).parentsUntil('#post-container')
  $userPost.remove();
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




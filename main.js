

$(document).ready(function() {
  $('#post-submit').click(function(e) {
    const $postContainer = $('#post-container');

    const $name = $('#name').val();
    const $message = $('#message').val();

    let $newPost = 
    `<div class="container text-light my-4">
    <div class="row bg-secondary rounded">
      <div id="user-name" class="row mb-0 pb-0">
        <p class="col px-3 pt-1 mb-0"><strong>${$name}</strong></p>
      </div>
      <div id="user-message" class="row">
        <p class="col px-3 pt-0 pb-1 mb-0">${$message}</p>
      </div>
    </div>
    <div id="" class="row mb-0 pb-0">
      <p class="col-1"><small>Like</small></p>
      <p class="col-1"><small>Reply</small></p>
      <p class="col-2"><small>${getCurrentTime(new Date)}</small></p>
    </div>
  </div>`
    

    $($postContainer).append($newPost)

    console.log(e, $name, $message)
    e.preventDefault();
  })
})

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
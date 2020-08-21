// let button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function () {
//   let userName = document.getElementById("name").value;
//   let userPost = document.getElementById("message").value;

//   let userNameAndPost = userName.concat(": " + userPost);

//   let userPostElement = document.createTextNode(userNameAndPost);
//   let li = document.createElement("li");
//   li.appendChild(userPostElement);

//   document.getElementById("posts").append(li);
// });
let arrayOfPostsAndNames = [];

$('button').click(function () {
  let userPost = $('#post-text').val();
  let userName = $('#post-name').val();

  if (userPost == 0 || userName == 0) {
    alert('Please add both a post and your name.');
  } else {
    $('.post-list-items').append(
      '<li>' +
        userPost +
        '<br>' +
        'Posted by: ' +
        '<strong>' +
        userName +
        '</strong>' +
        '<hr>' +
        '</li>'
    );

    let userPostAndName = {
      post: userPost,
      name: userName,
    };
    arrayOfPostsAndNames.push(userPostAndName);

    $('#post-text').val('');
    $('#post-name').val('');
  }
  // <li data-id="5">cigar</li>
  // $('li').data().id; // returns {id: 5}
});

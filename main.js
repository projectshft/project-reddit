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
    let userPostAndName = {
      post: userPost,
      name: userName,
    };
    arrayOfPostsAndNames.push(userPostAndName);
    $('.post-list-items').append(
      '<li>' + '<a href="#" class="remover">' + 'remove '  + '</a>'
      + '<a href="#" class="commenter">' + ' comment ' + '</a>' + '<br>' +
      userPostAndName.post +
        '<br>' +
        'Posted by: ' +
        '<b>' +
        userPostAndName.name +
        '</b>' +
        '<hr>' +
        '</li>'
    );

    $('#post-text').val('');
    $('#post-name').val('');
  }
  return arrayOfPostsAndNames;
  // <li data-id="5">cigar</li>
  // $('li').data().id; // returns {id: 5}
  //$(this).closest('.box').children('.something1')

  /*$('selector').click(function(){
    alert($('selector').index(this));*/
});


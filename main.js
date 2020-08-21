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
  let userPostAndName = {
    post: userPost,
    name: userName,
  };
  arrayOfPostsAndNames.push(userPostAndName);

  // $('.candy').append('<strong>Chocolate</strong>'); //how to add to innerHTML of a class

  // <li data-id="5">cigar</li>  
  // $('li').data().id; // returns {id: 5}
  
});


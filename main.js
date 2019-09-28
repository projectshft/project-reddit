let setOfPosts = [];

let $postForm = $('.new-post-form');
let $postDisplay = $('.posts-display');

//when post is submitted successfuly, add to posts and refresh html
var handlePostSubmit = function () {
    //this stops refresh
    event.preventDefault()
    console.log("successful submission");
    let title = $('.title-input')[0].value;
    let text = $('.text-input')[0].value;
    let username = $('.text-input')[0].value;

    setOfPosts.push(new Post(title, text, username));
    console.log('post added: ' + JSON.stringify(setOfPosts[setOfPosts.length - 1]));

    //empty the form
    $postForm[0].reset();
    updatePostDisplay();
  };

var updatePostDisplay = function () {
  $postDisplay.empty();
  
  setOfPosts.forEach((post) => {
    $postDisplay.append(post.contentHTML());
  })
}

$postForm.submit(handlePostSubmit);

var test = new Post("title", "text", "username");
console.log("text: " + test.text); //text: text
console.log("username: " + test.username); //username: username
console.log("contentHTML: " + test.contentHTML()); //titleHTML + textHTML + usernameHTML

var test = new UserContent("text", "username");

console.log("Title: " + test.title); //Title: undefined
console.log("text: " + test.text); //text: text
console.log("username: " + test.username); //username: username
console.log("contentHTML: " + test.contentHTML()); //titleHTML + textHTML + usernameHTML
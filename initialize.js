
var STORAGE_ID = 'project-distillery';

var saveToLocalStorage = function () {
localStorage.setItem(STORAGE_ID, JSON.stringify(posts));
}

var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
  }

var commentCount=0; //counts amount of comments made
var postCount=0; //counts amount of posts submitted

// ------this is the array that stores each post and it's comments as an object------



//If we want to load the page without any pre-loaded content, simply remove newPost(), newComment, and thisPostId from this page. And delete the object in the area

console.log("initial variables are created")
console.log("posts array already contains initial object --> pushing to post skipped")


$( document ).ready(function() {

  let thisPostId = 1; //since the page adds the first post object, I initialized thisPostId since there is no hovering that happens to find the variable.
  renderPosts();
  renderComments(thisPostId);
});

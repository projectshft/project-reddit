let setOfPosts = [];

var test = new Post("title", "text", "username");

console.log("Title: " + test.title); //Title: title
console.log("text: " + test.text); //text: text
console.log("username: " + test.username); //username: username
console.log("contentHTML: " + test.contentHTML()); //titleHTML + textHTML + usernameHTML

var test = new UserContent("text", "username");

console.log("Title: " + test.title); //Title: undefined
console.log("text: " + test.text); //text: text
console.log("username: " + test.username); //username: username
console.log("contentHTML: " + test.contentHTML()); //titleHTML + textHTML + usernameHTML
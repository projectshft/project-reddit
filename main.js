var posts = [];
var $submitPostButton = $('.submit-post');
var $postText = $('.post-text');
var $yourName = $('.post-author');
var $posts = $('.posts');

var createPost = function(author, text) {
    var postObj = {
        author: author,
        text: text
    }
    posts.push(postObj);
}

var addPosts = function() {
    var htmlPosts = posts.reduce(function(htmlString, post, index) {
        htmlString += '<div class="post" data-post="' + index.toString() + '"><p><span role="button" tabindex="0" class="remove-button">remove</span> ' + post.text + ' - Posted By: ' + post.author + '</p><hr></div>';
        return htmlString;
    }, '<hr>')
    $posts.html(htmlPosts)
}

$submitPostButton.on('click', function() {
    createPost($yourName.val(), $postText.val());
    addPosts();
})

$posts.on('click', 'span', function(x) {
    var postNum = $(x.target).closest('.post').data().post;
    posts.splice(postNum,1);
    addPosts();
})


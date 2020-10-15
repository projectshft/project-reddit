//incapsulate the project reddit app into one function 
var redditModule = () => {
    // data scruture to hold all our posts
    var posts = [];
    // push these values to our posts array
    var createPosts = function () {
    //grab input from our html
        var nameInput = $('#name').val();
        var messageInput = $('#message').val();
        if (nameInput && messageInput) {
            console.log('posts should be empty : ' + posts)
            posts.push({nameInput: nameInput, messageInput:messageInput, comments: []})
            console.log('posts array is now: ' + posts.length);
        }
        else {
            alert('You need to enter a name and message before posting.')
        }
    }

    var displayPosts = function () {
        // empty out to prevent duplicates
        $('.posts').empty();
        posts.forEach(function(post) {
        //creates a variable inorder to insure that each new post created is within it's own div element in the DOM
        let commentInfo = '<div class="comment-info"><div class="comment-list"></div><input class="comment-text" type="text" placeholder="Comment Text"></input><input class="comment-name" type="text" placeholder="User Name"></input><button id="submit-comment" class="btn btn-primary">Post Comment</button></div>'
        var redditPostData = '<button id="remove" class="btn btn-link">remove post</button><button id="comment-toggle" class="btn btn-link">comment</button>' + commentInfo + '<p class="post-text">' + post.messageInput + '</p><p>Posted By: <b>' + post.nameInput + '</b></p>'
        $('.posts').append('<div class="new-post">' + redditPostData + '</div>')
        //once text is posted, resets the default value of the form
        $('form').find('input').val('');
        })
    }
    //function to remove a specific post
    var removePost = function (postToRemove) {
        $closestPost = $(postToRemove).closest('.new-post');
        console.log('this is the postToRemove : ' + postToRemove)
        console.log('this is the closest post: ' + $closestPost);
        index = $closestPost.index();
        posts.splice(index, 1);
        $closestPost.remove();
        console.log('this is the posts array after removing: ' + posts.length)
    }
    // toggle comments div on and off 
    var toggleComments = function (currentPost) {
        $closestPost = $(currentPost).closest('.new-post');
        $closestPost.find('.comment-info').toggle();

    }
    // add a comment to our array
    var addComment = function (indexOfPost, text, name) {
        var comment = { text: text, name: name };
  
        // pushes the comment into the correct comments array
        console.log(indexOfPost)
        console.log(comment)
        if (comment.text === '' || comment.name === '') {
            alert('Please fill out all fields before trying to post your comment')
        } else {
            posts[indexOfPost].comments.push(comment);
        }       
        console.log(posts)
    }
    // render comment to a specific post
    var renderComment = function(){
        // find specific post and use its index to find the comment section
        posts.forEach(function(post, index) {
            var $commentList = $('.new-post').eq(index).find('.comment-list')
            // empty out comment list in order to not have multiple comments posted after one another
            $commentList.empty();
            console.log($commentList)
            console.log('post is ' + post)
            for (i = 0; i <post.comments.length; i++) {
                var comment = post.comments[i];
                $('.new-post').find('.comment-list').append('<button id="remove-comment" class="close" aria-label="close"><span aria-hidden="true">&times;</span></button> <p class=commented-text>' + comment.text + '</p>' + '<p class=commented-text>Commented By: <b>' + comment.name + '</b></p>')
            }
        })
    }

    // delete a specific comment 
    var deleteComment = function(commentToRemove) {
        var postIndex = $('.new-post').index(commentToRemove.closest('.new-post'));
        var commentIndex = commentToRemove.closest('.comment-list').find('.comment-info').index(commenToRemove.closest('.comment-info'))
        posts[postIndex].comments.splice(commentIndex, 1)
        console.log(commentIndex);
    }

    return {
        createPosts: createPosts,
        displayPosts: displayPosts,
        removePost: removePost,
        toggleComments: toggleComments,
        addComment: addComment,
        renderComment: renderComment,
        deleteComment: deleteComment
    }
}

var reddit = redditModule();

$('#submit').click( function() {
    reddit.createPosts();
    reddit.displayPosts();
});

$('.posts').on('click', '#remove', function () {
    reddit.removePost(this);
});

$('.posts').on('click', '#comment-toggle', function () {
    console.log('clicked')
    reddit.toggleComments(this);
  });

$('.posts').on('click', '#submit-comment', function () {
    //grab the values from text and username fields of comments
    var text = $(this).siblings('.comment-name').val();
    var name = $(this).siblings('.comment-text').val();
    
    // get index of post inorder to push the correct comment into it
    var indexOfPost = $(this).closest('.new-post').index();

    reddit.addComment(indexOfPost, text, name);
    reddit.renderComment(this);
});

$('.posts').on('click', '#remove-comment', function () {
    console.log('clicked');
    reddit.deleteComment();
});

// //once post button is clicked, the message and name is posted to the page
// $('#submit').click( function() {
//     let nameInput = $('#name').val();
//     let messageInput = $('#message').val();
//     //checks to make sure nameInput and messageInput have a value so user can't blank post
//     if (nameInput == '' || messageInput == '') {
//         alert('You need to enter a name and message before posting')
//     }
//     else {
//     //creates a variable inorder to insure that each new post created is within it's own div element in the DOM
//     let redditPostData = '<button id="remove" class="btn btn-link">remove post</button><button id="comment-toggle" class="btn btn-link">comment</button><p class="post-text">' + messageInput + '</p><p>Posted By: <b>' + nameInput + '</b></p>'
//     $('.posts').append('<div class="new-post">' + redditPostData + '</div>')}
//     //once text is posted, resets the default value of the form
//     $('form').find('input').val('');
// })

// //removes the post that has the class 'selected'
// $('.posts').on('click', '#remove', function () {
//     $(this).parent().addClass('selected')
//     $('.selected').remove();
// })
   
// //toggles the comment section , toggle works but it only works for the first comment and break all the other comments
// //additionally you have to change the other comment toggle function below to .one('click)
// //$('.posts').on( 'click', '#comment-toggle', function (){
// //     $('.comment-div').toggle();
// // })

// //the below adds functionality that when comment is clicked, a box for a comment and username pops up as well as a post comment button
// $('.posts').on( 'click', '#comment-toggle', function (){
//     // creates a variable so that comment and remove buttons are children of the comment div
//     let redditCommentData = '<input id="comment-text" type="text" class="form-control" placeholder="Comment Text"></input><input id="comment-name" type="text" class="form-control" placeholder="User Name"></input><button id="submit-comment" class="btn btn-primary">Post Comment</button>'
//     $(this).parent().addClass('selected')
//     //ensures that the comment div is a child of the original message so the comments show up correctly on the page
//     $('.selected').children('.post-text').append('<div class="comment-div input-group row-center">' + redditCommentData + '</div')
//     $(this).parent().removeClass('selected')
    
// })

// //when post comment button is clicked, comment text and username text appears
// $('.posts').on( 'click', '#submit-comment', function (){
//     let commentMessageInput = $('#comment-tpext').val();
//     let commentNameInput = $('#comment-name').val();
//     //checks to make sure commentNameInput and commentMessageInput have a value so user can't post a blank comment
//     if (commentMessageInput == '' || commentNameInput == '') {
//         alert('You need to enter a user name and message before posting a comment')
//     }
//     else {
//         //if both fields have a value, posts the comment under the original message
//         $(this).parent().addClass('selected')
//         $('.selected').append('<button id="remove-comment" class="close" aria-label="close"><span aria-hidden="true">&times;</span></button> <p class=commented-text>' + commentMessageInput + '</p>' + '<p class=commented-text>Commented By: <b>' + commentNameInput + '</b></p>');
//         $(this).parent().removeClass('selected')
//     }
// }) 

// // removes a comment from a certain post
// $('.posts').on('click', '#remove-comment', function () {
//     $(this).siblings('.commented-text').addClass('selected')
//     $('.selected').remove();
// })



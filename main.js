//incapsulate the project reddit app into one function 
var redditModule = () => {
    // data scruture to hold all our posts
    var posts = [];
    // push these values to our posts array
    var createPosts = function () {
    //grab input from our html
        let nameInput = $('#name').val();
        let messageInput = $('#message').val();
        if (nameInput && messageInput) {
            posts.push({nameInput: nameInput, postUser: postUser, comments: []})
            console.log('posts array is now: ' + posts);
        }
        else {
            alert('You need to enter a name and message before posting.')
        }
    }
}

//once post button is clicked, the message and name is posted to the page
$('#submit').click( function() {
    let nameInput = $('#name').val();
    let messageInput = $('#message').val();
    //checks to make sure nameInput and messageInput have a value so user can't blank post
    if (nameInput == '' || messageInput == '') {
        alert('You need to enter a name and message before posting')
    }
    else {
    //creates a variable inorder to insure that each new post created is within it's own div element in the DOM
    let redditPostData = '<button id="remove" class="btn btn-link">remove post</button><button id="comment-toggle" class="btn btn-link">comment</button><p class="post-text">' + messageInput + '</p><p>Posted By: <b>' + nameInput + '</b></p>'
    $('.posts').append('<div class="new-post">' + redditPostData + '</div>')}
    //once text is posted, resets the default value of the form
    $('form').find('input').val('');
})

//removes the post that has the class 'selected'
$('.posts').on('click', '#remove', function () {
    $(this).parent().addClass('selected')
    $('.selected').remove();
})
   
//toggles the comment section , toggle works but it only works for the first comment and break all the other comments
//additionally you have to change the other comment toggle function below to .one('click)
//$('.posts').on( 'click', '#comment-toggle', function (){
//     $('.comment-div').toggle();
// })

//the below adds functionality that when comment is clicked, a box for a comment and username pops up as well as a post comment button
$('.posts').on( 'click', '#comment-toggle', function (){
    // creates a variable so that comment and remove buttons are children of the comment div
    let redditCommentData = '<input id="comment-text" type="text" class="form-control" placeholder="Comment Text"></input><input id="comment-name" type="text" class="form-control" placeholder="User Name"></input><button id="submit-comment" class="btn btn-primary">Post Comment</button>'
    $(this).parent().addClass('selected')
    //ensures that the comment div is a child of the original message so the comments show up correctly on the page
    $('.selected').children('.post-text').append('<div class="comment-div input-group row-center">' + redditCommentData + '</div')
    $(this).parent().removeClass('selected')
    
})

//when post comment button is clicked, comment text and username text appears
$('.posts').on( 'click', '#submit-comment', function (){
    let commentMessageInput = $('#comment-text').val();
    let commentNameInput = $('#comment-name').val();
    //checks to make sure commentNameInput and commentMessageInput have a value so user can't post a blank comment
    if (commentMessageInput == '' || commentNameInput == '') {
        alert('You need to enter a user name and message before posting a comment')
    }
    else {
        //if both fields have a value, posts the comment under the original message
        $(this).parent().addClass('selected')
        $('.selected').append('<button id="remove-comment" class="close" aria-label="close"><span aria-hidden="true">&times;</span></button> <p class=commented-text>' + commentMessageInput + '</p>' + '<p class=commented-text>Commented By: <b>' + commentNameInput + '</b></p>');
        $(this).parent().removeClass('selected')
    }
}) 

// removes a comment from a certain post
$('.posts').on('click', '#remove-comment', function () {
    $(this).siblings('.commented-text').addClass('selected')
    $('.selected').remove();
})



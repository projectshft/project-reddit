// once post button is clicked, the message and name is posted to the page
$('button').click( function() {
    let nameInput = $('#name').val();
    let messageInput = $('#message').val();
    //checks to make sure nameInput and messageInput have a value so user can't blank post
    if (nameInput == '' || messageInput == '') {
        alert('You need to enter a name and message before posting')
    }
    else {
    //creates a variable inorder to insure that each new post created is within it's own div element in the DOM
    let redditPostData = '<button id="remove" class="btn">remove</button><button id="comment" class="btn">comment</button><p>' + messageInput + '</p><p>Posted By: <b>' + nameInput + '</b></p>'
    $('.posts').append('<div class="new-div">' + redditPostData + '</div>')}
    //once text is posted, resets the default value of the form
    $('form').find('input').val('');
})

// removes the post that has the class 'selected'
$('.posts').on('click', '#remove', function () {
    $(this).parent().addClass('selected')
    $('.selected').remove();
   })
   
// the below adds functionality that when comment is clicked, a box for a comment and username pops up as well as a post comment button
$('.posts').on( 'click', '#comment', function (){
    $(this).parent().addClass('selected')
    $('.selected').append('<input id="comment-text" type="text" class="form-control" placeholder="Comment Text"></input>' + 
    '<input id="comment-name" type="text" class="form-control" placeholder="User Name"></input>' + 
    '<button id="submit-comment" class="btn btn-primary">Post Comment</button>')
    $(this).parent().removeClass('selected')
})










/*

// the below adds functionality that when comment is clicked, a box for a comment and username pops up as well as a post comment button
// need to make this a div child of the original post so it is only associated with that post
$('.posts').on( 'click', '#comment', function (){
    $('.posts').append('<input id="comment-text" type="text" class="form-control" placeholder="Comment Text"></input>' + 
    '<input id="comment-name" type="text" class="form-control" placeholder="User Name"></input>' + 
    '<button id="submit-comment" class="btn btn-primary">Post Comment</button>')
})
// when post comment button is clicked, comment text and username text appears
$(this).on( 'click', '#submit-comment', function (){
    let commentMessageInput = $('#comment-text').val();
    let commentNameInput = $('#comment-name').val();
    //checks to make sure commentNameInput and commentMessageInput have a value so user can't post a blank comment
    if (commentMessageInput == '' || commentNameInput == '') {
        alert('You need to enter a user name and message before posting a comment')
    }
    else {
        $('.posts').append('<p>' + commentMessageInput + '</p>' + '<p>' + commentNameInput + '</p>');
    }
}) 



$('.posts').on('click', '#remove', function () {
 //$(this).remove($('.posts.children'));
 console.log('hi');
})

*/
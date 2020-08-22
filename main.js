// once post button is clicked, the message and name is posted to the page
$('button').click( function() {
    let nameInput = $('#name').val();
    let messageInput = $('#message').val();
    //checks to make sure nameInput and messageInput have a value so user can't blank post
    if (nameInput == '' || messageInput == '') {
        alert('You need to enter a name and message before posting')
    }
    else {
    $('.posts').append('<button id="remove" class="btn">remove</button>' + '<button id="comment" class="btn">comment</button>' + '<p>' + messageInput + '</p>')
    $('.posts').append('<p>' + 'Posted By: <b>' + nameInput + '</b></p>')}
    //once text is posted, resets the default value of the form
    $('form').find('input').val('');
})
// the below adds functionality that when comment is clicked, a box for a comment and username pops up as well as a post comment button
$('.posts').on( 'click', '#comment', function (){
    $('.posts').append('<input id="comment-text" type="text" class="form-control" placeholder="Comment Text"></input>' + 
    '<input id="name" type="text" class="form-control" placeholder="User Name"></input>' + 
    '<button id="submit-comment" class="btn btn-primary">Post Comment</button>')
})
// when post comment button is clicked, comment text and username text appears
$('.posts').on( 'click', '#submit-comment', function (){
    console.log('hi');
} ) 



$('.posts').on('click', '#remove', function () {
 //$(this).remove($('.posts.children'));
 console.log('hi');
})
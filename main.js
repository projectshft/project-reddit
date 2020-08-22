// once post button is clicked, the message and name is posted to the page
$('button').click( function() {
    let nameInput = $('#name').val();
    let messageInput = $('#message').val();
    //checks to make sure nameInput and messageInput have a value so user can't blank post
    if (nameInput == '' || messageInput == '') {
        alert('You need to enter a name and message before posting')
    }
    else {
    $('.posts').append('<p>' + messageInput + '</p>')
    $('.posts').append('<p>' + 'Posted By: <b>' + nameInput + '</b></p>')}
})
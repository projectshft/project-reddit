$('button').click( function() {
    let nameInput = $('#name').val();
    let messageInput = $('#message').val();
    $('.posts').append('<p>' + messageInput + '</p>')
    $('.posts').append('<p>' + 'Posted By: <b>' + nameInput + '</b></p>')
})
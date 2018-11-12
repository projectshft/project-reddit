$('#submit').click(function() {
    const nameInput = $('#name').val();
    const userInput = $('#message').val();
    $('#newPost h3').text(nameInput);
    $('#newPost p').text(userInput);
});
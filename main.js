// Creates post on feed including fake link to user's profile (In <a> tags)
var createFeedPostDiv = function () {
    var $username = $('#username').val();
    var $postText = $('#post-text').val();
    $('.post-feed').append('<div class="user-post">'
        + '<p>' + $postText + '</p>'
        + '<h6> Posted By: <a href="#">' + $username + '</a> <a class="delete-post" href="#">Delete</a></h6>'
        + '<hr>'
        + '</div>'
    );
};

// Submits user post to feed
$('.post-submit-form').submit(function (e) {
    e.preventDefault();
    createFeedPostDiv();
    // Clears input fields
    this.reset();
});

// Deletes user post from feed
$('.post-feed').on('click', '.delete-post', function () {
    $(this).closest('.user-post').remove();
});
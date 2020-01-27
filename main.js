var posts = []

//when the post button gets clicked id="submit-post"
var addNewPost = $('#submit-post').on('click', function(){
    //grab text post info
    var submittedPostText = $('#post-text').val()
    //grab your name info
    var submittedYourName = $('#your-name').val()

    //check to see if both text fields are blank.
    if(submittedPostText === '' && submittedYourName === ''){
        alert('Please fill in all fields before clicking Post.')
        //check to see if post text is blank
    } else if(submittedPostText === '' && submittedYourName){
        alert('Please fill in the Post Text box before clicking Post.')
        //checks to see if your name is blank
    } else if(submittedPostText && submittedYourName === ''){
        alert('Please fill in the Your Name box before clicking Post.')
    } else {
        //store it in an object if ALL fields are filled out, so no objects get made with undefined values.
        var newSubmittedPost = {
            postText: submittedPostText,
            postCreator: submittedYourName,
            commentThread: []
        }
        //push that object ot the posts object
        posts.push(newSubmittedPost)
    }
    renderPosts()
    //Need to invoke render posts
})

var renderPosts = function(){
    //finds the <div> that template or each post will be appended to. 
    // In this case it is the div that has the class of post-thread view.
    var $postThreadView = $('.post-thread-view')
    //This is emptying out the div container so the loop can add each new post and have no dups.
    $postThreadView.empty()

    for(let i = 0; i < posts.length; i++){
        var $template =
        '<div class="post-container" id="' + i + '"> '
        +   '<a class="remove-post" data-remove="' + i + '">' + 'Remove' + '</a> '
        +   '<a class="comment-on-post" data-comment="' + i + '">' + 'Comment' + '</a>'
        +   '<p class="post-text" data-post-number="' + i + '">' + posts[i].postText + '</p>'
        +       '<div class="comment-container" data-number="' + i + '">'
        +           '<ul class="comment-section" style="list-style-type:none" data-comment-container="' + i + '">' + '</ul>'
        +           '<input class="comment-text" type="text" placeholder="Comment Text" data-comment-input="' + i + '">' + '</input>'
        +           '<input class="user-name" type="text" placeholder="User Name" data-user-name="' + i + '">' + '</input>'
        +           '<button type="button" class=" btn btn-primary submit-comment" data-submit="' + i + '">' + 'Post Comment' + '</button>'
        +       '</div>'
        +   '<p class="post-creator">' + 'Post By: ' + posts[i].postCreator  + '</p>'
        +'</div>';

      $postThreadView.append($template)
    }
}

// when the post button gets clicked id="submit-post"
var addNewComment = $('.post-thread').on('click', '.submit-comment', function(){
    var postIndex = $(this).data('submit')
    
    
    //grabs comment text
    var submittedCommentText = $('.comment-text').eq(postIndex).val()
    //grabs user name
    var submittedUserName = $('.user-name').eq(postIndex).val()

    // check to see if both text fields are blank.
    if(submittedCommentText === '' && submittedUserName === ''){
        alert('Please fill in all fields before clicking Post Comment.')
        //check to see if comment text is blank
    } else if(submittedCommentText === '' && submittedUserName){
        alert('Please fill in the Comment Text box before clicking Post Comment.')
        //checks to see if user name is blank
    } else if(submittedCommentText && submittedUserName === ''){
        alert('Please fill in the User Name box before clicking Post Comment.')
    } else {
        //store it in an object if ALL fields are filled out, so no objects get made with undefined values.
        var newCommentPost = {
            commentText: submittedCommentText,
            commentCreator: submittedUserName,
            }
        //need to push object to the posts[correct index].commentThread
        posts[postIndex]['commentThread'].push(newCommentPost)
    }
      renderComments  
});

var renderComments = $('.post-thread').on('click', '.submit-comment', function(){
    var index = $(this).data('submit')
    var $commentThreadView = $('.comment-section').eq(index);

    $commentThreadView.empty();
    
    posts[index]['commentThread'].forEach(function(comment){
        var $commentTemplate =
        '<li class=comments">' + comment.commentText + ' Posted By: ' 
        + comment.commentCreator + '<a class="remove-comment">' + ' x' + '</a>'
        $commentThreadView.append($commentTemplate)
    })
});
 
$(".post-thread").on('click', '.remove-post', function(){
    var removePostIndex= $(this).data('remove')
    console.log(removePostIndex)
    // Need to remove post from the posts array by index
    // re-render posts?
    // delete posts[0]
    posts.splice(removePostIndex, 1)
    // console.log(rem)
    renderPosts()
})

$(".post-thread").on('click', '.comment-on-post', function(){
    var commentOnIndex = $(this).data('comment')
    
    $('.comment-container').eq(commentOnIndex).toggle()

});

$('.post-thread').on('click', '.remove-comment', function(){
    //need to post index
    //need the comment index
    //posts[post index]['commentThread][comment index]
    var commentIndex = $('.remove-comment').index(this);
    var postIndexNumber = $(this).data('post-number')
    console.log(commentIndex)
    console.log(postIndexNumber)
})
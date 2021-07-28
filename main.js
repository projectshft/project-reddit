//initialize posts
var POSTS = getPostsFromLocStrg();

//render posts on page load
renderPosts();
renderComments();

//get posts from local storage
function getPostsFromLocStrg (){
    var posts = JSON.parse(localStorage.getItem("posts"));

    if(!posts){
        posts = localStorage.setItem("posts", "[]")
        return posts;
    }else{
        return posts
    }
}

//save posts to local storage
function savePostsToLocStrg (){
    localStorage.setItem("posts", JSON.stringify(POSTS));
}

//render posts in html
function renderPosts (){
    
    $('.posts').empty();

    POSTS.forEach(function(post){
        var temp = `
        <div class="post card" style="width: 100%;" data-id="${post.id}">
            <div class="card-body">
                <div class="row">
                    <h5 class="card-title col-sm-9">${post.user}</h5>
                    <a href="templates/post.html"
                    class="individual-post-page text-right col-sm-3">
                    edit
                        <i class="fas fa-external-link-alt card-link text-primary" ></i>
                    </a>
                </div>
                <p class="card-text">${post.text}</p>
            </div>
            <div class="card-body border-top">
                <a class="card-link" 
                data-toggle="collapse" href="#collapseCommentsPst_${post.id}" role="button" aria-expanded="false" aria-controls="collapseCommentsPst_${post.id}">
                <i class="far fa-comment-alt"></i>
                    Comments
                </a>
            </div>
            <ul class="collapse list-group list-group-flush" id="collapseCommentsPst_${post.id}">
                <li class="list-group-item">
                    <input
                        type="text"
                        class="form-control form-rounded add-comment"
                        placeholder="Write a comment..."
                    />
                </li>
                <div class="comments"></div>
            </ul>
        </div>`;

        $('.posts').append(temp);
    })
}

//render ALL comments
function renderComments () {
    $('.comments').empty();

    POSTS.forEach(function(post){
        var postHTML = $(`[data-id="${post.id}"]`);
        var commentsHTML = postHTML.find('.comments');

        post.comments.forEach(function(comment){
            var temp = `
                <li class="list-group-item comment-wrapper">
                    <i class="fas fa-user-circle user-avatar"></i>
                    ${comment}
                </li>`

            commentsHTML.append(temp);
        });
    })
}

//render comments for a single post
function renderCommentsForPost (post){

    //define parameters
    var postHTML = $(`[data-id="${post.id}"]`);
    var commentsHTML = postHTML.find('.comments');
    
    //empty comments from specific post's html
    commentsHTML.empty();

    //append this post's comments to this comments in HTML
    post.comments.forEach(function(comment){
        var temp = `
            <li class="list-group-item comment-wrapper">
                <i class="fas fa-user-circle user-avatar"></i>
                ${comment}
            </li>
        `
        commentsHTML.append(temp);  
    })
}

// ### ================== EVENTS ================== ###
//submit a post
$('.submit-post').on('click',function(){

    var post = {
        text: $('.post-text').val(),
        user: $('.user-name').val(),
        id: "pst_" + (POSTS.length + 1).toString(), 
        comments: []
    }

    POSTS.unshift(post);

    //save and render posts
    savePostsToLocStrg();
    renderPosts();

    //clear inputs
    $('.post-text').val('');
    $('.user-name').val('');
})

//remove a post
$('.posts').on('click', '.remove-post', function(){
    //get post id via data attribute inhtml
    var post_id = parseInt($(this).parent().data().id.split("_").pop());

    //remove post from data (the array)
    POSTS.splice(post_id-1, 1);
    
    //save and render posts
    savePostsToLocStrg();
    renderCommentsForPost();
})

//submit a comment
$('.posts').on('keypress', '.add-comment', function(e){
    
    //params
    var post;
    var comment;
    var post_id;
    var enter_key = 13;

    //if user hits enter key, submit comment
    if(e.which == enter_key){

        //get params
        post_id = $(this).closest('.post').data().id;
        post = POSTS.find(function(post){return post.id === post_id});
        comment = $(this);
        
        post.comments.unshift(comment.val());

        //save and render post
        savePostsToLocStrg();
        renderCommentsForPost(post);
        
        
        //clear comments from input
    comment.val("");
    }
});

//edit individual post on separate page
$('.posts').on('click', '.individual-post-page', function(){

var post_id = $(this).closest('.post').data().id;
localStorage.setItem('postToEdit', post_id);

});



//get post to edit 
var POSTS = getPostsFromLocStrg();
var post_id = localStorage.getItem('postToEdit');
var post = POSTS.find(function(post){return post.id === post_id});

renderEditablePost();

//get posts from local storage
function getPostsFromLocStrg (){
    var posts = JSON.parse(localStorage.getItem("posts"));

    if(!posts){
        alert('No posts in local storage! Go back to posts page.')
    }else{
        return posts
    }
}

//save posts to local storage
function savePostsToLocStrg (){
    localStorage.setItem("posts", JSON.stringify(POSTS));
}

//render post in editable mode
function renderEditablePost (){
    var editableTemp = `
        <div class="post card" style="width: 100%;" data-id="${post.id}">
            <div class="card-body">
            
                <input type="text editable-text" class="user-name form-control  editable-text-input editable-user-text" value=""/>
               

                <input type="text" class="post-text form-control editable-text-input" value="${post.text}"/>
            </div>
                <div class="card-body border-top btn-group">
                <button type="button" class="btn btn-success save-post">Save</button>
                <button type="button" class="btn btn-danger delete-post">Delete</button>
            </div>
        </div>`;

    $('.post-container').empty();
    $('.post-container').append(editableTemp);

    //focus
    $('.user-name').focus().val(post.user);
}

//renders post regularly
function renderPost () {

    var template = `
        <div class="post card edited-post" style="width: 100%;" data-id="${post.id}">
            <div class="card-body">
                <div class="row">
                    <h5 class="card-title col-sm-9">${post.user}</h5>
                </div>
                <p class="card-text">${post.text}</p>
            </div>
            <div class="card-body border-top btn-group">
            
            <button type="button" class="btn btn-warning edit-post">Edit</button>
            <button type="button" class="btn btn-danger delete-post">Delete</button>

            
            </div>
           
        </div>`;

    //render post
    $('.post').empty();
    $('.post').append(template);

}

//save post
$('.post-container').on('click', '.save-post', function(){
    var post = POSTS.find(function(post){
        return post.id === post_id;
    });

    post.text = $('.post-text').val();
    post.user = $('.user-name').val();

    //save and render posts
    savePostsToLocStrg(post_id);
    renderPost();
});

//edit post
$('.post-container').on('click', '.edit-post', function(){
    renderEditablePost();
});

//delete post
$('.post-container').on('click', '.delete-post', function(){
    //show pop up
    $('.post-deleted-modal').modal('show');


});

$('.dont-delete').click(function(){
    $('.post-deleted-modal').modal('hide');
});

$('.confirm-delete').click(function(){
    //remove it from POSTS
    POSTS.forEach(function(post, i){
        if(post.id === post_id){
            POSTS.splice(i, 1);
        };
    });
   
    //save in local storage
    savePostsToLocStrg();

    //clear from page
    $('.post-container').empty();

    //go back to home page
    window.location.replace("../index.html");

});

$('.back-to-posts').click(function(){
    window.location.replace("../index.html");
})



var redditApp = function() {

    var posts = [];

    var $posts= $('.posts');

    var renderPosts = function() {
        $posts.empty(); //clears post container so there aren't duplicate posts from the render, unless duplicates exist in the array

        for (i =0; i< posts.length; i++) {
            var post = posts[i];
            console.log("clicked");
            console.log(posts);
            $posts.append('<div class="post">'+post.post+" "+ "<button class='delete btn btn-primary'>X</button><button class='comment btn btn-primary'>Comment</button>"+
            "<br><p>Posted by: "+post.name+"</p><button class='delete btn btn-primary'>Delete Post</button></div>")
        };
    };

    var createPost = function(postName, postMessage) {
        if(!postName || !postMessage) {
            alert('Please fill out the post form completely.');
        }
        else {
            posts.push({
                name: postName,
                post: postMessage,
                comments: []
            }); 
        }
        console.log(posts);
    }   


    // $posts.append("<p>"+ postMessage+" "+ "<button class='delete btn btn-primary'>X</button></p>");
    // $posts.append("<p>Posted by: "+postName+ "</p>");
    // console.log("clicked");
    // $('.posts').append("<input type='text' id='comment' class='comment form-control' placeholder='Comment'></input><button class='comment btn btn-primary'>Post Comment</button><button class='delete btn btn-primary'>X</button>")
    // console.log("clicked");
    // var deletePost = $('.delete').on('click', function (e) {
    //     e.preventDefault();

        // Delete associated message
    var deletePost = function() {
        
        console.log('deleted');
    }

    var createComment = function(name, text) {
        if(!name || !text) {
            alert('Please fill out the comment form completely.')
        }
        else {
            var comment = {name: name, text:text}
            }
        }
        console.log(posts);
 
        
    

    return {
        renderPosts: renderPosts,
        createPost: createPost,
        deletePost: deletePost,
        createComment: createComment
    };
}

var app = redditApp();

app.renderPosts();

$('.add').on('click', function (e) {
    e.preventDefault();

    var postName = $('#name').val();
    console.log(postName);
    var postMessage = $('#message').val();
    console.log(postMessage);
    app.createPost(postName,postMessage);
    app.renderPosts();

});

$('.add').on('click', function (e) {
    e.preventDefault();

    var postName = $('#name').val();
    console.log(postName);
    var postMessage = $('#message').val();
    console.log(postMessage);
    app.createPost(postName,postMessage);
    app.renderPosts();

});

// $('.comment').click(function(){
//         // comment on associated message
//         var commentMessage = $('#comment').val();
//         $('.posts').append("<p>"+commentMessage+" "+"<button class='delete btn btn-primary'>X</button></p>")};
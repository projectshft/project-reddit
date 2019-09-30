var submitPostButton = $('.btn').click(function(){
    var postName = $('#name').val();
    console.log(postName);
    var postMessage = $('#message').val();

    console.log(postMessage);
    $('.posts').append("<p>"+ postMessage+" "+ "<button class='delete btn btn-primary'>X</button></p>");
    $('.posts').append("<p>Posted by: "+postName+ "</p>");
    console.log("clicked");
    $('.posts').append("<input type='text' id='comment' class='comment form-control' placeholder='Comment'></input><button class='comment btn btn-primary'>Post Comment</button><button class='delete btn btn-primary'>X</button>")
    console.log("clicked");
    var deletePost = $('.delete').click(function(){
        // Delete associated message
        $('p').remove();
        $('.comment').remove();
        $('.delete').remove();
        console.log('deleted');
    });
    var commentPost = $('.comment').click(function(){
        // comment on associated message
        var commentMessage = $('#comment').val();
        $('.posts').append("<p>"+commentMessage+" "+"<button class='delete btn btn-primary'>X</button></p>" )
        
    });
});


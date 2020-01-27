var posts = [];
var submittedPostsCounter = 0;

$('#submit').click(function() {
    var userName = $('#name').val();
    var postValue = $('#message').val();
    var countUserName = $("#name").val().length;
    var countPostValue = $("#message").val().length;
    console.log('texarea count ', countPostValue, countUserName);

    console.log('values before test for empty post ', userName, postValue);
    if (countUserName < 2 || countPostValue < 2) {
        console.log('both name and post has to be at least 2 characters long')
    } else {
    posts.push({id: submittedPostsCounter, user: userName, post: postValue, postcounter: submittedPostsCounter, comments: [],});
    renderPosts();
    };
})

// rendering. posting all values from POSTS arr and clearing it on each run
var renderPosts = function () {
    // clear the view before posting new values in.
    $('.posts').empty();
    $('.mainPost').empty();
    var entries = [];
    
    // pushing values from POSTS arr to be rendered on screen
    for (var i=0; i<posts.length; i++) 
   // console.log('posts[i] ',posts[i])
   // check for undefined in posts array. due to the errors can not read undefined
        if (posts[i] != undefined) {
            //console.log('posts before entri method ', posts[i].id);
        entries += '<button id="hide-'+posts[i].id+'" class="viewComment badge badge-primary">comment</button>';
        entries += '<div class="mainPost"><div class="newPost'+posts[i].id+' userPost" style="font-weight: bold">' + posts[i].user + '<spam style="color: black"> posted : </spam>' + posts[i].post + '<button class="deleteButton badge badge-warning" id="'+posts[i].id+'" style="float:right">Delete post</button></div></div>';
        entries += '<form id="f'+posts[i].id+'" class="form" style="display: none"><div class="comments col-10" ><div class="comments"></div><div class="col "><input id="nameComment'+posts[i].id+'" type="text" class="form-control col-4 mb "  placeholder="name"><input id="userComment'+posts[i].id+'" type="text" class="form-control col-8" placeholder="comment"></div></div></form>'
        entries += '<button id="postComment-'+posts[i].id+'" class="submitComment badge badge-success" style="display: none">Post comment</button>';
        // add comments array from main posts array to be render.   
        // sub-loop for adding posts to main comments. looping thru comments array inside POSTS array to display all posts 
        for (var b=0; b<posts[i].comments.length; b++) 
            if (posts[i].comments[b] != undefined ) {
            console.log('comments array itiration ', posts[i].comments[b])
            entries += '<li id="thisComment-'+i +'" class="list-group-item w-75 p-3" style="font-weight: bold">'+posts[i].comments[b] +'<button id="commentButton" class="deleteComment badge badge-danger  mx-auto" style="float:right">X</button></li>'
        }
    };
    
    $('.posts').append(entries);
    submittedPostsCounter ++;

    $(".deleteButton").click(function () {
      // keep track of ID and remove posts. 
        var idValueOfDeletedPost = $(this).attr("id");  
        var integerForIdOfDeletedPost= parseInt(idValueOfDeletedPost);
        console.log('ID of deleted post ', idValueOfDeletedPost);
     // locating          
        var index = posts.map(function(o) { return o.id; }).indexOf(integerForIdOfDeletedPost);
        console.log("index of 'number': " + index)
        delete posts[index];
                
        renderPosts();
    })

    $('.viewComment').click(function () {
    // locate ID number and switch view         
        var idOfCommentClicked = $(this).attr("id");
        console.log('clicked ', idOfCommentClicked)
        var viewIdInteger = idOfCommentClicked.split("-");
        var finalIdValueOfView = parseInt(viewIdInteger[1]);   //console.log('final number for ID identification ', finalIdValueOfView)
        var testOne = 'thisComment-' + finalIdValueOfView;         //console.log('testOne log ', testOne);
    // switch view for posting comments show or hide            
        $("#f"+finalIdValueOfView).toggle();
        $("#postComment-"+finalIdValueOfView).toggle();
    });

// delete comments  *******
      $('.deleteComment').click(function () {
        // itterate thru comments array and remove correct posts
        var idDeletedPost = $(this).attr("id");
        console.log('ID of post to delete', idDeletedPost)
        var parent = $(this).parent().attr('id')
        console.log("parent ", parent)
        // after getting parent ID removing all but integer of the post to use it for identify post to remove in inner array
        var parentSplit = parent.split("-");
        var finalIdValueOfParent = parseInt(parentSplit[1]);     console.log('final parent id number ', finalIdValueOfParent)
        
        var testDiv = $(this).parent().text();
        var parentToString = testDiv.toString() 
        // removing X that was added from delete post button. I know this is not most elegant solution. wont do it again like that
        var withoutLastX = parentToString.slice(0, parentToString.lastIndexOf("X"));
        console.log('without last X ', withoutLastX);
        // finding comment in array and removing it
        var testPostsCommArrayPosition = posts[finalIdValueOfParent].comments.findIndex(postValue => postValue == withoutLastX);
        console.log('targeting comment in parent array ', testPostsCommArrayPosition);
        delete posts[finalIdValueOfParent].comments[testPostsCommArrayPosition];

        renderPosts();
       });  

// submit comments ******    
    $('.submitComment').click(function () {
        
        var idOfPostClicked = $(this).attr("id");
        // console.log('clicked comment button id', idOfPostClicked)
        var idValueOfClickedSplit = idOfPostClicked.split("-");
        var finalIdValueOfComments = parseInt(idValueOfClickedSplit[1]);   // to get integer for ID value
        console.log('finding ID of the post comment button clicked ', finalIdValueOfComments);
                       
        // find index of array with key value pair ID + number
        var indexForIdAssigned = posts.map(function(o) { return o.id; }).indexOf(finalIdValueOfComments);
        console.log("index of 'number': " + indexForIdAssigned);

        // need to get index based off the ID integer. Locate array to add post to
        var postToBeAttachedTo = posts[indexForIdAssigned];     //var postToBeAttachedTo = posts[finalIdValueOfComments];
        console.log(postToBeAttachedTo);
        
        var commentName = $('#nameComment'+finalIdValueOfComments).val();
        var commentPost = $('#userComment'+finalIdValueOfComments).val();
        // check for empty textareas 
        var commentNameLength = $("#nameComment"+finalIdValueOfComments).val().length;
        var commentLength = $("#userComment"+finalIdValueOfComments).val().length;
        console.log('comment lengt and name lengt ', commentNameLength, commentLength)
        
        if (commentNameLength < 1 || commentLength < 1) {
            console.log('name and comment can not be left empty before submitt')
            return;
        } else {
            console.log('name and post in comments submit ',commentName, commentPost.lenght);
            postToBeAttachedTo.comments.push(commentName+ ' posted: ' + commentPost);
            renderPosts();
        };
        
      });
     
};

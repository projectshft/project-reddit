var removeLinkClass = 'remove-link';
var commentsLinkClass = 'comments-link';
var commentsIdCounter = 1;

var clicked = function () {    
    var userName = $('#name').val();
    var post = $('#message').val();     
    
    
    //Post variables for new HTML nodes
    var postsDiv = document.querySelector('.posts');
    var newPostDiv = document.createElement('div');    
    var newPostP = document.createElement('p');
    var newPostSpan = document.createElement('span');      
    var newPostSpan2 = document.createElement('span');   
    
    
    //Assigning class names to post classes
    newPostSpan.className = removeLinkClass;
    newPostSpan2.className = commentsLinkClass;
    
    //Post Variables for new text and links
    var classOneTextNode = document.createTextNode('Remove ');
    var classTwoTextNode = document.createTextNode('Comments ');
    var newPostTextNode = document.createTextNode(post + ' - Posted By: ' + userName);    
    
    //Put text into span(s)
    newPostSpan.appendChild(classOneTextNode);
    newPostSpan2.appendChild(classTwoTextNode);     

    //Put <span> (s) into <p>
    newPostP.appendChild(newPostSpan);
    newPostP.appendChild(newPostSpan2);    
    newPostP.appendChild(newPostTextNode);    
    
    //Add the new post to the div
    newPostDiv.append(newPostP);   
    $('#comments').clone().attr('id', 'comments' + commentsIdCounter++).insertAfter('#comments').appendTo(newPostDiv);

    //Add new div to the HTML file
    postsDiv.append(newPostDiv);       

    //Call click functions for remove and comment links
    $('.remove-link').on('click', removed);
    $('.comments-link').on('click', comments);

}

var commentClick = function () {
    var userName = $('#comment-name').val();
    var comment = $('#comment').val();     
    
    
    //Comment variables for new HTML nodes
    var commentsDiv = $(this).closest('.comments');
    var newCommentDiv = document.createElement('div');
    var newCommentP = document.createElement('p');
    var newCommentSpan = document.createElement('span');

    //Assinging class names to comment class
    newCommentSpan.className = removeLinkClass;

    //Comment Variables for new text and links
    var commentClassText = document.createTextNode('Remove ');
    var commentTextNode = document.createTextNode(comment + ' - Posted By: ' + userName);

    newCommentSpan.appendChild(commentClassText);  


    newCommentP.appendChild(newCommentSpan);    
    newCommentP.appendChild(commentTextNode);

    newCommentDiv.append(newCommentP);  
    
    commentsDiv.append(newCommentDiv); 

    $('.remove-link').on('click', removed);

}

var removed = function () {    
    $(this).parent().parent().remove();
    //not removing comment text boxes as it should
}

var comments = function () {
    if ($(this).closest('.posts').children('.comments').show()) {
        $(this).closest('.posts').children('.comments').hide();
    } else if ($(this).closest('.posts').children('.comments').hide()) { 
        $(this).closest('.posts').children('.comments').show();
    }
}

$('#submit-comment').on('click', commentClick);
$('#submit-post').on('click', clicked);
$('.remove-link').on('click', removed);
$('.comments-link').on('click', comments);




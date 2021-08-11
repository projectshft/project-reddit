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
    $('#template-comment').clone().attr('id', 'comments' + commentsIdCounter++).appendTo(newPostDiv);
    
    
    //Add new div to the HTML file
    postsDiv.append(newPostDiv);       

    //Call click functions for remove and comment links
    $('.remove-link').on('click', removed);
    $('.comments-link').unbind('click').on('click', comments);
    $('#submit-comment').on('click', commentClick);
    
    
}

var commentClick = function () {
    var userName = $(this).closest('.comments').find('#comment-name:first').val();
    var comment = $(this).closest('.comments').find('#comment:first').val();     
    
    
    //Comment variables for new HTML nodes
    var commentsDiv = $(this).closest('.comments').find('.comments-section:first');   
    var newCommentsDiv = document.createElement('div');
    var newCommentP = document.createElement('p');
    var newCommentSpan = document.createElement('span');

    //Assigning class names to comment classes
    newCommentSpan.className = removeLinkClass;

    //Comment Variables for new text and links
    var classOneTextNode = document.createTextNode('Remove ');
    var newCommentTextNode = document.createTextNode(comment + ' - Posted By: ' + userName);

    //Put text into span(s)
    newCommentSpan.appendChild(classOneTextNode);

    //Put <span> into <p>
    newCommentP.appendChild(newCommentSpan);
    newCommentP.appendChild(newCommentTextNode);

    //Add new comment to the div
    newCommentsDiv.append(newCommentP);

    //Add new div to the HTML file
    commentsDiv.append(newCommentsDiv);   

     
       
    $('.remove-link').on('click', removed);

}

var removed = function () {    
    $(this).parent().parent().remove();
    
}

var comments = function () {
     $(this).closest('div').find('.comments:first').toggle();  
     console.log('comment link clicked')    
     
        
}

$('#submit-comment').on('click', commentClick);
$('#submit-post').on('click', clicked);
$('.remove-link').on('click', removed);






var removeClass = 'remove-link';
var commentsClass = 'comments-link';





var clicked = function () {    
    var userName = $('#name').val();
    var post = $('#message').val();

    
    
    
    var postsDiv = document.querySelector('.posts');
    var newPostDiv = document.createElement('div');
    var newPostP = document.createElement('p');
    var newPostSpan = document.createElement('span');      
    var newPostSpan2 = document.createElement('span');

    newPostSpan.className = removeClass;
    newPostSpan2.className = commentsClass;

    var classOneTextNode = document.createTextNode('Remove ');
    var classTwoTextNode = document.createTextNode('Comments ');
    var newPostTextNode = document.createTextNode(post + ' - Posted By: ' + userName);
    
    newPostSpan.appendChild(classOneTextNode);
    newPostSpan2.appendChild(classTwoTextNode);
    newPostP.appendChild(newPostSpan);
    newPostP.appendChild(newPostSpan2)
    newPostP.appendChild(newPostTextNode);

    var newPostHR = document.createElement('hr');    
    
    newPostDiv.append(newPostP);
    newPostDiv.append(newPostHR);

    postsDiv.append(newPostDiv);

}

$('#submit-post').on('click', clicked);


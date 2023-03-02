$('button').on('click', function() { 
    var post = $('#Message').val(); 
    var person = $('#Name').val(); 

    if (post !== "" & person !== "") { 
        $('.remove').append(`<li><button>Remove</button> ${post} - Posted By: <b>${person}</b></li><hr>` ); 
        //$('.comments').append(`<li><u>Comments</u><li>`)
        document.getElementById("Message").value = "";
        document.getElementById("Name").value = "";
        reply(); 
    } else {
        alert(`You must enter your message and name to make a post!`); 
    }
});

//add code to remove the reply button
$('.remove').on('click', 'button', function() {
    //$(this).closest('li').next().remove();
    $(this).closest('li').remove();
    $(this).closest('hr').remove();

});

//PLEASE IGNORE THE FOLLOWING SECTION, I AM STILL WORKING ON THE PART 2 OF THE ASSIGNMENT

// //when comments is click, hide or show following comments
// $('.comments').on('click', 'li', function(){  
// }); 

// //when reply is clicked, open message box
// $('.remove').on('click', 'li', function(){
// }); 

// //if there is a new user comment, create a button for that comment 
// //button allow other user to comment on that comment 
// //reply function is called after a new comment is made
// // let reply = function() { 
// //      let newComment = document.getElementsByClassName("comments"); 
// //     if (newComment.length >= 1){
// //         $('.remove').append(`<div class= subcomments><li><button>Reply</button></li></div>`); 

// //     }
// // }; 

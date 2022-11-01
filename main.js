// 1.get input values from forms
// 2. create a template for a new post and inject the name and comment into it
    // append that to the DOM
//3. handle clicks on the delete buttons
//4. handle clicks on the comments button
    //show the comment section
    //allow for comments to be made
// 5. enable editing
  //on click open up a form that will modify the text of the post

// clear forms on submit

$postComment = $('#post-form-comment');
$postName = $('#post-form-name');
$submit = $('.btn-submit');

function createPost(comment, name) {
  let template = 
  '<div class="row post">' 
  + '<div class="col-xs-11">'
  +  '<div class="row main-post">'
  +    '<div class="col-lg-11">'
  +     '<p class="post-text">'
  +        comment
  +     '</p>'
  +     '<p class="post-info">'
  +        '<span class="delete-post"'
  +          '><i class="fa-solid fa-trash"></i'
  +        '></span> | '
  +        '<span class="make-comment"'
  +          '><i class="fa-solid fa-comment"></i'
  +        '></span> | '
  +        'Posted by:' + name
  +      '</p>'
  +    '</div>'
  +    '<div class="col-xs-1 col-offset-1 edit-post">'
  +      '<i class="fa-solid fa-pen-to-square"></i>'
  +    '</div>'
  +  '</div>'
  +  '<div class="row comment-section">'
  +    '<div class="col-xs-12">'
  +      '<form>'
  +        '<div class="form-group form-comment">'
  +          '<input type="text" class="form-control" id="name" placeholder="Comment Text"/>'
  +        '</div>'
  +        '<div class="form-group form-name">'
  +          '<input type="text" class="form-control" id="name" placeholder="Your Name" />'
  +        '</div>'
  +        '<button type="submit" class="btn btn-post pull-left">Submit Comment</button>'
  +      '</form>'
  +    '</div>'
  +  '</div>'
  +'</div>'
  +'</div>'
  ;

let $post = $(template);

return $post;
}

function createComment(comment, name) {
  let template =  
         '<div class="row comment">'
  +        '<div class="col-md-11">'
  +          '<p class="comment-text">' + comment +  '</p>'
  +          '<p class="comment-info">'
  +            '<span class="delete-comment"'
  +              '><i class="fa-solid fa-trash"></i'
  +            '></span> | '
  +             'Posted by: ' + name
  +          '</p>'
  +        '</div>'
  +        '<div class="edit-comment col-md-1">'
  +          '<i class="fa-solid fa-pen-to-square"></i>'
  +        '</div>'
  +      '</div>'
  ;

  let $comment = $(template);

  return $comment;
}


function handleSubmitClick(e) {
  let commentInput = $postComment.val();
  let nameInput = $postName.val();

  e.preventDefault()

  let $post = createPost(commentInput, nameInput);

  $('.posts-container')[0].append($post[0])
  clearForm();
}


$submit.click(function (e) {
  handleSubmitClick(e);
})


$('.posts-container').on('click', '.make-comment', function (e) {
    let $mainPost = $(e.target.closest('.main-post'))
    let $commentSection = $mainPost.next()
    // debugger;

    $commentSection.toggle();
})


$('.posts-container').on('click', '.delete-post', function (e) {
  $(e.target).closest('.post').remove();
})


$('.posts-container').on('click', '.delete-comment', function (e) {
  $(e.target).closest('.row').remove();
})


$('.posts-container').on('click', '.btn-post', function (e) {
  let commentInput = $(e.target).prevAll('.form-comment').children().val();
  let nameInput = $(e.target).prev().children().val();
  let $commentSection = $(e.target).closest('.comment-section')
  
  e.preventDefault();

  let $comment = createComment(commentInput, nameInput)

  $commentSection.prepend($comment);

  clearForm();
})


$('.posts-container').on('click', '.edit-post', function (e) {
  $('.edit-form').show();
  let $postText = $(e.currentTarget).prev().find('.post-text');

  
  $('.edit-btn').on('click', function(e) {
    e.preventDefault();
    
    let editInput = $('#edit-form-comment').val();
    $postText.text(editInput);

    $(e.currentTarget).off();
    $('.edit-form').hide();

  }) 

  clearForm();
})

$('.posts-container').on('click', '.edit-comment', function (e) {
  $('.edit-form').show();
  let $commentText = $(e.currentTarget).prev().find('.comment-text');

  
  $('.edit-btn').on('click', function(e) {
    e.preventDefault();
    
    let editInput = $('#edit-form-comment').val();
    $commentText.text(editInput);

    $(e.currentTarget).off();
    $('.edit-form').hide();

    clearForm();
  }) 
})

function clearForm() {
  let $formsArr = $('.form-control');
  
  
  $formsArr.each((input) => {
    $($formsArr[input]).val('')
  })
}
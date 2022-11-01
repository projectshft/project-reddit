// 1.get input values from forms
// 2. create a template for a new post and inject the name and comment into it
    // append that to the DOM
//3. handle clicks on the delete buttons
//4. handle clicks on the comments button
    //show the comment section
    //allow for comments to be made
// 5. enable editing
  //on click open up a form that will modify the text of the post

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
  +    '<div class="col-xs-1 col-offset-1">'
  +      '<i class="fa-solid fa-pen-to-square"></i>'
  +    '</div>'
  +  '</div>'
  +  '<div class="row comment-section">'
  +    '<div class="col-xs-12">'
  +      '<div class="row comment">'
  +        '<div class="col-md-11">'
  +          '<p class="comment-text">Comment 1</p>'
  +          '<p class="comment-info">'
  +            '<span class="delete-comment"'
  +              '><i class="fa-solid fa-trash"></i'
  +            '></span>'
  // comment posted by
  +          '</p>'
  +        '</div>'
  +        '<div class="edit col-md-1">'
  +          '<i class="fa-solid fa-pen-to-square"></i>'
  +        '</div>'
  +      '</div>'

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


function handleSubmitClick(e) {
  let commentInput = $postComment.val();
  let nameInput = $postName.val();

  e.preventDefault()

  let $post = createPost(commentInput, nameInput);

  $('.posts-container')[0].append($post[0])
}


$submit.click(function (e) {
  handleSubmitClick(e);
})

$('.posts-container').click(function (e) {//listen for clicks on trash and comment buttons
  let $clickedElement = $(e.target)

  if($clickedElement.attr('class').includes('trash')){
    $clickedElement.closest('.post').remove();
  }

  if($clickedElement.attr('class').includes('comment')){
    let $mainPost = $(e.target.closest('.main-post'))
    let $commentSection = $mainPost.next()

    $commentSection.toggle();
  }
})


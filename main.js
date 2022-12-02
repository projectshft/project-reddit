let $button = $('#button')
let postID = 0;
let nameID = 0;
let columnBreak = 'a';
let buttonID = 'b';
let emptier = 'c';
let emptier2 = 'd';



let createRow = function(postID, nameID, columnBreak){
  let template = 
  '<div class="container" id="' + columnBreak + '">' +
  '<div class="row justify-content-center">' +
    '<div class="col-md-9 col-lg-9">' +
          '<div class="d-flex flex-start">' +
            '<div>' +
              '<h6 class="fw-bold mb-1 name" id="' + nameID + '"></h6>' +
            '<div class="row justify-content-center">' +
              '<h6 class="badge fw-bold mb-1" id="remove-comment" data-remove-number="' + columnBreak + '"><small>Remove</small></h6>' +
              '<div>&nbsp</div>' +
              '<h6 class=" badge fw-bold mb-1" id="make-comment" data-post-number="' + postID + '"><small>Comment</small></h6>' +
            '</div>' +
            '</div>' +
          '</div>' +
      '<div class="card text-dark" id="' + postID + '">' +
        '<div class="card-body p-4"' +
          '<div class="d-flex flex-start">' +
            '<div class="d-flex align-items-center mb-3 text-wrap">' +
              '<p class="mb-0 post ' + postID + '"></p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</div>' 

  let makeComment = function(){
    buttonID = buttonID + 'y';
    emptier = emptier + 'x';
    emptier2 = emptier2 + 'w';

    let clickedCommentNumber = $(this).attr('data-post-number');
    $newComBox = createCommentBox(buttonID, emptier);

    $('#' + clickedCommentNumber + '').after($newComBox);
  };

  let removePost = function(){
    let clickedRemoveNumber = $(this).attr('data-remove-number');
    $('#' + clickedRemoveNumber + '').remove();

  };

  var $row = $(template);

  $row.find('#make-comment').click(makeComment);
  $row.find('#remove-comment').click(removePost);


  
  return $row;
};

let createCommentBox = function (buttonID, emptier){
  let templateText = 
  '<div class="p-2">' +
    '<div class="d-flex flex-row align-items-start" id="' + emptier + '">' + 
      '<textarea class="form-control ml-1 shadow-none textarea" id="' + buttonID + '"></textarea></div>' +
    '<div class="mt-0 text-right" id="' + emptier2 + '">' +
      '<button class="btn btn-primary btn-sm shadow-none" type="button" data-button="' + buttonID + '">Post comment</button>' +
      '<button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>' +
  '</div>';

  let postComment = function(){
    let clickedButton = $(this).attr('data-button');

    let $commentText = $('#' + clickedButton + '').val();

    $('#' + emptier + '').empty();
    $('#' + emptier2 + '').empty();

    $('#' + emptier + '').append('<div class="card-body p-4"><p class="card bg-dark text-white">' + $commentText + '</p></div>');

  };
  

   let $commentBox = $(templateText);

   $commentBox.find('.btn').click(postComment);
 
   return $commentBox;
};


$('#button').click(function(){

  let $post = $('#post-here').val();
  let $name = $('#name-here').val();
  
  if($post && $name){
    postID = postID + 1;
    nameID = nameID - 1;
    columnBreak = columnBreak + 'z';
    

    let $newRow = createRow(postID, nameID, columnBreak);

    $('.post-section').append($newRow);

    $('.' + postID + '').append($post);
    $('#' + nameID + '').append('Posted By:' + '<span>&nbsp</span>' + $name);
  }

});

  







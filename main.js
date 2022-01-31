var commentHtml = '<div class="hidden"><br /><textarea type="text" placeholder="Comment Text" class="text"></textarea><br /><input type="text" placeholder="Your Name" class="name" /><br /><button class="comment">Submit Comment</button><br /></div>'

//submit 1
$('.submit').click(function() {
  var postText = $(this).siblings('.text').val();
  var postName = $(this).siblings('.name').val();
  var comments = '<div class="comments1 plzWork">comments</div>';
  var remove = '<span class="remove1 plzWork">remove</span>';
  var userInput = '<div class="posts plzWork">' + " " + postText + ' - Posted By: ' + postName +'</div>';
  $('.post').append('<div class="listener">' + remove + comments + userInput + '</div>');
  $('.posts').append(commentHtml);     
})

//remove 1
$('.post').on('click', '.remove1', function () {
  $(this).parent().remove();
})

//comments
$('.post').on('click', '.comments1', function () {
  var $target = $('.hidden')
  if ($target.css('display') == 'none') {
    $target.css('display', 'unset');
  } else {
    $target.css('display', 'none');
  };
})

//post 2
$('.post').on('click', '.comment', function() {
  var postText = $(this).siblings('.text').val();
  var postName = $(this).siblings('.name').val();
  var remove = '<br /><span class="remove">remove</span>';
  var userInput = '<div class="posts">' + " " + postText + ' - Posted By: ' + postName +'</div>';
  $(this).parent().prepend('<div>' + remove + userInput + '</div>');

})

//remove 2
$('.post').on('click', '.remove', function() {
  $(this).parent().remove();
})

















































// const plzWork = function() {
//   func1();
//   func2();
// }

// // post name + post comment + remove button
// var func1 = function() {
  // $('button').click(function() {
  //   var postText = $(this).siblings('.text').val();
  //   var postName = $(this).siblings('.name').val();
  //   var comments = '<div class="comments">comments</div>';
  //   var remove = '<div class="remove">remove </div>';
  //   var userInput = '<div class="posts">' + " " + postText + ' - Posted By: ' + postName +'</div><br  />';
  //   if($(this).hasClass('submit')) {
  //     $('.post').append(remove + comments + userInput);
  //     $('.posts').append(commentHtml);     
  //     plzWork(); 
  //   } else {
  //     $('.posts').append(remove + userInput);
  //     plzWork();
  //   }
//   })
// }



// var func2 = function() {
//   // removing
  // $('.remove').click(function() {
  //   $(this).parent('div').remove();
//   //   func1();
//   // })

//   $('.remove').click(function() {
//     if($(this).parent('div')) {
//       var $target = [$(this), $(this).next(), $(this).next().next()]
//       $target[0].remove();
//       $target[1].remove();
//       $target[2].remove();
//     } else {
//       var $target1 = [$(this), $(this).next()]
//       $target1[0].remove();
//       $target1[1].remove();
//     }
//   })

//   //comments
//   $('.comments').click(function () {
// //     var $target = $(this).next().children('span');
//     if ($target.css('display') == 'none') {
//       $target.css('display', 'unset');
//     } else {
//       $target.css('display', 'none');
//     };
//   });
// };
// plzWork();















var name = $('#postname')
var post = $('#posttext')

var deletePost = $('<button type="button" class="btn-close" aria-label="Close"></button>')



$("#postbtn").on('click', function () {
  console.log('click')


  var deletePost = $('<button type="button" class="btn-close" aria-label="Close"></button>').addClass("deletebtn")

  var name = $("#postname").val();
  var post = $("#posttext").val();
  var box = $('.newname')
  var delBtn = $('.btn-close')
  var postFunc = function () {

    
    $('<h4 class="newname">' + name + '</h4>').append('<p class="newpost">' + post + '</p>').append(deletePost).appendTo('#post')
    $("#postname").val('')
    $("#posttext").val('')

    }
    postFunc();
    $('.btn-close').on('click', '.newname', function () {
      $(this).remove();
  });
  })
 



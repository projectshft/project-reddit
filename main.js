var form = document.getElementsByClassName('post-form')[0];
var i = 0

form.addEventListener('submit', function(event1) {
  event.preventDefault()
  var userName = $('#name').val();
  var post = $('#message').val();

  // create a new cell in the table with the name and post content and add a quality column and a editing column
  var newDiv = document.createElement('div');
  newDiv.id = i
  newDiv.className = "Rtable message"
  $('.posts')[0].append(newDiv)
  var postName = "<div class='Rtable-cell Rtable-cell-medium Rtable-cell-content'><span class='cell-content'>" + userName + "</span></div>"
  var postContent = "<div class='Rtable-cell Rtable-cell-wide Rtable-cell-content'><span class='cell-content'>" + post + "</span><span><a class='comment-button' role='button'>comments</a></span><span class='comments'></span><span class='post-comment'></span></div>"
  var postQuality = "<div id=qualCell" + i + " class='Rtable-cell Rtable-cell-content Rtable-cell-medium'><button id=upBtn" + i + " class='btn btn-xs btn-default quality-up'><span class='glyphicon glyphicon-thumbs-up'></span></button><button id=dwnBtn" + i + " class='btn btn-default btn-xs quality-down'><span class='glyphicon glyphicon-thumbs-down'></span></button><span class='q-content'><p>0</p></span></div>"
  var postEdit = "<div class='Rtable-cell Rtable-cell-narrow Rtable-cell-empty'><button type='button' id=trash" + i +
    " class='btn btn-default btn-xs pull-left trash'><span class='glyphicon glyphicon-trash'></span></button><button type='button' id=edit" + i +
    " class='btn btn-default btn-xs edit'><span class='glyphicon glyphicon-pencil'></span></button></div>"
  var tableData = postName + postContent + postQuality + postEdit
  $('#' + i).html(tableData)

  // set the inital quality attribute to zero - it can be changed by clicking thumbs up and thumbs down
  $('#' + i).attr('qual', 0);
  //reset the form
  $('#message').val('')
  $('#name').val('')

  //add a comment submission form to each new post
  $('.comment-button').parent().siblings().last().html('<input id=comment' + i + '  type="text" class="form-inline" placeholder="Comment Text"></input><input id=comment-name' + i + ' type="text" class="form-inline" placeholder="Your Name"></input><button type="button" class="btn btn-primary btn-xs	submit-comment">Post Comment</button>')

  //hide the comments and submission form to start out and then toggle them on when "comments" is pressed
  $('.comment-button').parent().nextAll().hide()
  var hide = true
  $('.comment-button').on('click', function() {
    $(this).parent().nextAll().toggle(hide)
    hide = !hide
  })

  $('.submit-comment').on('click', function(event1) {
    event1.stopImmediatePropagation();
    var commentName = $(this).prev().val();
    var commentContent = $(this).prev().prev().val()
    var commentData = "<span class='comments'><span>" + commentContent + "</span><strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posted by:</strong> " + commentName + "&nbsp;&nbsp;&nbsp;<a class='delete-comment'><i class='fa fa-times text-primary' aria-hidden='true'></i></a>&nbsp;<a class='edit-comment'><i class='fa fa-pencil text-primary' aria-hidden='true'></i></a></span>"
    $(this).parent().prev().append(commentData)
    $(this).prev().val("");
    $(this).prev().prev().val("")

    $('.delete-comment').on('click', function(event1) {
      event1.stopImmediatePropagation();
      $(this).parent().remove()
    })

    $('.edit-comment').on('click', function(event1) {
      event1.stopImmediatePropagation();
      result = window.prompt("Update your comment", $(this).prev().prev().prev().html());
      if (result === null) {
        return;
      }
      $(this).prev().prev().prev().html(result)
    })

  })
  clickTools(i, post);
  i++
});



clickTools = function(rowId, post) {
  // provides upvote, downvote, edit, and delete buttons and reorders comments if needed based on up/down vote
  var qualityUpButton = document.getElementById('upBtn' + i);
  var qualityDownButton = document.getElementById('dwnBtn' + i);
  var trashButton = document.getElementById('trash' + i);
  var editButton = document.getElementById('edit' + i);
  var row = document.getElementById(rowId)
  var qualityUpButtons = document.getElementsByClassName('quality-up');
  var buttonsCount = qualityUpButtons.length;
  qualityUpButton.addEventListener('click', function() {
    trQual = parseInt(row.getAttribute('qual')) + 1
    row.setAttribute('qual', trQual)
    $('#qualCell' + rowId + ':nth-child(3)').contents().last().replaceWith("<span class='q-content'><p>" + trQual + "</p></span>");
    reorderPosts()
  });
  qualityDownButton.addEventListener('click', function() {
    trQual = parseInt(row.getAttribute('qual')) - 1
    if (trQual >= 0) {
      row.setAttribute('qual', trQual)
    } else {
      trQual = 0
      row.setAttribute('qual', 0)
    }
    $('#qualCell' + rowId + ':nth-child(3)').contents().last().replaceWith("<span class='q-content'><p>" + trQual + "</p></span>");
    reorderPosts()
  });
  trashButton.addEventListener('click', function() {
    row.style.display = 'none'
  });
  editButton.addEventListener('click', function() {
      result = window.prompt("Update your post", post);
      if (result === null) {
        return;
      }
      row.children[1].children[0].innerHTML = result
      post = result

  })

reorderPosts = function() {
  var qualObj = {}
  var items = []
  for (var j = 0; j < buttonsCount; j++) {
    qualObj["id"] = j
    if (document.getElementsByClassName("message")[j]) {
      qualObj["quality"] = document.getElementsByClassName("message")[j].getAttribute('qual')
    } else qualObj["quality"] = 0

    items[j] = Object.assign({}, qualObj)
  }
  items.sort(function(a, b) {
    return parseInt(b.quality) - parseInt(a.quality);
  });
  orderOfQuality = 0
  for (var k = 0; k < buttonsCount; k++) {
    if (document.getElementById(items[k].id)) {
      document.getElementById(items[k].id).style.order = orderOfQuality
      orderOfQuality++
    }
  }
}
reorderPosts()

}

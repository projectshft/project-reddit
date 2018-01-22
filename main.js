var button = document.getElementsByClassName('submit')[0];
var i = 0

button.addEventListener('click', function() {
  var userName = $('#name').val();
  var post = $('#message').val();
  var newDiv = document.createElement('div');
  newDiv.id = i
  newDiv.className = "Rtable message"
  $('.posts')[0].append(newDiv)
  var tableData = "<div class='Rtable-cell Rtable-cell-narrow Rtable-cell-content'><span class='cell-content'>" + userName +
    "</span></div><div class='Rtable-cell Rtable-cell-wide Rtable-cell-content'><span class='cell-content'>" + post +
    "</span><span class='comment-button'><a role='button' href='#'>comment</a></span></div><div id=qualCell" + i + " class='Rtable-cell Rtable-cell-content Rtable-cell-narrow'><button id=upBtn" + i +
    " class='btn btn-xs btn-default quality-up'><span class='glyphicon glyphicon-thumbs-up'></span></button><button id=dwnBtn" + i +
    " class='btn btn-default btn-xs quality-down'><span class='glyphicon glyphicon-thumbs-down'></span></button><span class='q-content'><p>0</p></span></div><div class='Rtable-cell Rtable-cell-narrow Rtable-cell-empty'><button type='button' id=trash" + i +
    " class='btn btn-default btn-sm pull-left trash'><span class='glyphicon glyphicon-trash'></span></button><button type='button' id=edit" + i +
    " class='btn btn-default btn-sm edit'><span class='glyphicon glyphicon-pencil'></span></button></div>"
  $('#'+i).html(tableData)
  $('#'+i).attr('qual', 0);

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
    row.setAttribute('qual',trQual)
    $('#qualCell'+rowId+ ':nth-child(3)').contents().last().replaceWith("<span class='q-content'><p>"+trQual+"</p></span>");
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
    $('#qualCell'+rowId+ ':nth-child(3)').contents().last().replaceWith("<span class='q-content'><p>"+trQual+"</p></span>");
    reorderPosts()
  });
  trashButton.addEventListener('click', function() {
    row.remove()
  });
  editButton.addEventListener('click', function() {
    result = window.prompt("Update your post", post);
    row.children[1].innerHTML = result
  })

  reorderPosts = function() {
    var qualObj = {}
    var items = []
    for (var j = 0; j < buttonsCount; j++) {
      qualObj["id"] = j
      qualObj["quality"] = document.getElementsByClassName("message")[j].getAttribute('qual')
      items[j] = Object.assign({}, qualObj)
    }
    items.sort(function(a, b) {
      return parseInt(b.quality) - parseInt(a.quality);
    });
    for (var k = 0; k < buttonsCount; k++) {
      document.getElementById(items[k].id).style.order = (k)
    }
  }
reorderPosts()

}

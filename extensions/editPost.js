//this function toggles post edit bar.
var toggleEditBar = function() {
  //hides all comments when editing main message
  $('.commentsData').addClass('hide');
  // 1st remove all other editbar, then add it's own editbar IF it doesn't have one. Preventing multiple editBar and commentBar open at the same time.
  if ($(this).parent().siblings('.postMessage').find('.editData').length === 0) {
    $('.editData').remove();
    $('.commentBar').remove();

    var editTemplateStart = '<div class="row editData">';
    var editTemplateInput = '<textarea type="text" class="editPostInput col-md-10" placeholder="New Message" style="color: black;background-color: ##6997e0;"></textarea>';
    var editTemplateButton = '<button type="button" class="editPostButton btn btn-custom">Edit</button></div>';
    var $completeEdit = $(editTemplateStart + editTemplateInput + editTemplateButton);

    //add click function to the edit button, when clicked replace message to input value, then remove edit bar
    $completeEdit.find(".editPostButton").click(editButtonFunction);
    //append bar to postMessage div
    $(this).parent().siblings('.postMessage').append($completeEdit);
  } else { // if it already has an edit bar, then remove it, effectively toggle on and off.
    $('.editData').remove();
    $('.commentBar').remove();
  }
};

//this function allows the edit button to replace msg with new one.
var editButtonFunction = function() {
  //if edit input is blank, alert user, return 0;
  if ($('.editPostInput').val().length === 0) {
    alert("New message can't be blank, but you can delete post.");
    return 0;
  } else {
    // delete original msg and place in new message, and close edit bar.
    $(this).parent().parent().find($('.msg')).empty();
    $(this).parent().parent().find($('.msg')).text($('.editPostInput').val());
    $('.editData').remove();
  }
};

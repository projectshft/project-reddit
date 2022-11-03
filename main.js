// Event listener on the submit post button.

$(".btn-primary").click(function () {
  var $name = $("#name").val();
  var $message = $("#message").val();

  // The input fields for message and name will be appended into a new <post>
  $(".post-area").append(
    `<post> ${$message} - Posted By: <strong>${$name}
    <section class='button-container'>
    <button class='btn' id='delete-btn'>delete</></button>
    <button class='btn' id='comments-btn'>comments</class=></button>
    </section>
    <div class="row comments-row"><div class="col-md-6 col-md-offset-3">
    <div class="comments">
    </div>
    <form style="margin-top:30px;" class="form-show" onsubmit="event.preventDefault();">
    
    <div class="form-group">
    
    <input id="commenter-name" type="text"class="form-control"placeholder="Your Name"></input>
    
    </div>
    
    <div class="form-group">
    
    <textarea id="commenter-message" type="text"class="form-control"placeholder="Post Comment"></textarea></div><button id="submit-comment" class="btn btn-secondary">Post Comment</button></form>
    
    </div>
    </post>`
  );

  // Clears the input field for a new post.
  $("#name").val("");
  $("#message").val("");

  // This function should delete the post entirely.
  $("post").on("click", "#delete-btn", function () {
    $(this).closest("post").remove();
  });

  // This function will append a comment to the post and populate a remove button
  $(document).ready(function () {
    $(".post-area").on("click", "#submit-comment", function () {
      var $commenterName = $("#commenter-name").val();
      var $commenterMessage = $("#commenter-message").val();

      $("#commenter-name").val("");
      $("#commenter-message").val("");

      $(".comments").append(
        `<p><button class='btn' id='remove-btn'>remove</button> ${$commenterMessage} 
        
        - Posted By: <strong>${$commenterName}</p>`
      );
    });

    // This function will remove the comment from a post.
    $(document).ready(function () {
      $(".posts").on("click", "#remove-btn", function () {
        $(this).parent().remove();
      });
    });
  });
});

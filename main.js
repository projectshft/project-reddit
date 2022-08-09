$(".btn").on('click', function () {
    var name = $('#name').val();
    var post = $('#postInput').val();
    var deleteInput = `<div class = "removeClick">Remove</div>`;
    var showComments = `<div class ="expandComments">Show Comments</div>`;
    
    
    $('.posts').append(`<li style="list-style-type:none" class ='userPost'>` + showComments + deleteInput +
    post + ' - Posted by: ' + name + '</li>');

    $('.userPost').on(`click`, '.removeClick', function (e) {
        var $element = $(e.target.parentElement);
        console.log($element);
        $element.remove();
        console.log('click');
    });

    $('.userPost').on(`click`, '.expandComments', function () {

        var commentForm =`<form>
        <div class="form-group">
          <input type="text" class="form-inline" id="commentInput" placeholder="Your comment here...">
        </div>
        <div class="form-group">
          <input type="text" class="form-inline" id="nameForComments" placeholder="Your name here...">
        </div>
        <button type="button" class="btn-success">Submit Comment</button>
      </form>`;   

     $('.userPost').append(commentForm);

    $('.btn-success').on(`click`, function () {
         var commentName = $(`#nameForComments`).val();
     
     var userCommentInput = $(`#commentInput`).val();

     $('.userPost').append(`<li style="list-style-type:none" class ='userComment'>` + deleteInput +
        userCommentInput + ' - Posted by: ' + commentName + '</li>');
        });
    });

});
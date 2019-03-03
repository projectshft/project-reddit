$(document).ready(function(){


  var $post = [];
  var $postObject = {};


  $('.btn-post').click(function(){


      var $postName = $('input#postName').val();
        //console.log($postName);

      var $postText = $('textarea#postText').val();
        //console.log($postText);

      $post.push($postObject);

      $(function(){

        $postObject = {
          postName: $postName,
          postText: $postText,
          init: function(){
              //console.log(this.postName);
              $('ul').append(
                               '<li>'+this.postName+'</li>');
          }
        };
        $postObject.init();
      });
  });


});

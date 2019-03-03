
  
  $('.btn-primary').on('click', function(event){
        event.preventDefault();

        //get user input
        var $userName = $('#name').val();
        var $userPost = $('#message').val();
        var fullPost = $userPost + "<br> Posted by: <strong>" + $userName + "</strong> <br>";
     
        //post user input above the user input area so that posts are on top.
        $('.posts').append("<p>"+fullPost+"</p><hr>");

        $('#name').placeholder = "Name";
        $('#message').placeholder = "Message";

         
    });
  
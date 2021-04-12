var button = document.getElementById('submit');
var commentsBlock = document.getElementsByClassName('comments-block')[0];

button.addEventListener('click', function () {

  
  
  var text = document.getElementById('message').value;
  var name = document.getElementById('name').value;
    
  var p = document.createElement('p');
  var b = document.createElement('button')
  var a = document.createElement('a')
  var userInputText = document.createTextNode(text + ' - ');
  var userInputName = document.createTextNode('Posted by: ' + name);
  var userComment = document.createTextNode('comment');
  var userRemove = document.createTextNode('remove');


    
  p.appendChild(userInputText);
  p.appendChild(userInputName);
  b.appendChild(userComment);
  a.appendChild(userRemove);

  
  document.getElementsByClassName('posts')[0].append(a)
  document.getElementsByClassName('posts')[0].append(b)
  document.getElementsByClassName('posts')[0].append(p)

  
  $('.posts').on('click', 'a', function(e) {
    var $element = $(e.target);
    $element.remove();
    $('p').remove( ":contains('Posted')" );
    $('button').remove( ":contains('comment')" );
  })
 

    
  var viewCommentsButton = document.getElementsByTagName('button')[0];
  

    viewCommentsButton.addEventListener('click', function () {
      if (commentsBlock.classList.contains('show')) {
        commentsBlock.className = 'comments-block';
      } else {
        commentsBlock.className += ' show';
      }

        var commentButton = document.getElementById('submit-comment');
        commentButton.addEventListener('click', function () {
      
        var commentsText = document.getElementById('comments-message').value;
        var commentsName = document.getElementById('comments-name').value;
          
        var p = document.createElement('p');
        var a = document.createElement('a')
        var userInputText = document.createTextNode(commentsText + ' - ');
        var userInputName = document.createTextNode('Commented by: ' + commentsName);
        var userRemove = document.createTextNode('remove');
            
        
        a.appendChild(userRemove);
        p.appendChild(userInputText);
        p.appendChild(userInputName);
        
    

  
        document.getElementsByClassName('comments')[0].append(a)
        document.getElementsByClassName('comments')[0].append(p)
  
        $('.comments').on('click', 'a', function(e) {
          var $element = $(e.target);
          $element.remove();
          $('p').remove( ":contains('Commented')" );
          
        });
        
        
  

        });
    
        
      
   });

 
  
});



 



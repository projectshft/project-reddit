
  
$('#submit').on('click', function () {
  var name = $('#name').val();
  var post = $('#post').val();


  

$('.posts').append('<p>' +  name + '</p>' + '<p>' + post + '</p>');

});

$('.posts').on('click', function () {
 $(this).remove();
 });




  var postsDiv = document.querySelector('.posts');
  
  var newPostDiv = document.createElement('div');
  
  var newPostTextP = document.createElement('p');
  var newPostTextNode = document.createTextNode(text);
  newPostTextP.appendChild(newPostTextNode);
  
  var newPostNameP = document.createElement('p');
  var newPostNameNode = document.createTextNode('Posted By: ' + name);
  newPostTextP.appendChild(newPostNameNode);
  
  
  var newPostHR = document.createElement('hr');
  
  newPostDiv.append(newPostTextP);
  newPostDiv.append(newPostNameP);
  newPostDiv.append(newPostHR);
  
  postsDiv.append(newPostDiv);
  
  
  
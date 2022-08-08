let posts = [{text: 'First post', name: 'Alfie'}]

//get access to user input, name and submit button
var postSubmit = $('#post-sub-button')
var commentsDiv = $('.comments-div')


const postHandler = function (posts){
  commentsDiv.empty()
  posts.forEach(element => {
  
  commentsDiv.append('<h3>' + element['text'] + '</h3>')
  commentsDiv.append('<h4>' + element['name'] + '</h4>')
  commentsDiv.append('<p class="remove">'+ 'Delete Post' + '</p>')
  commentsDiv.append('<p class="comment">'+'Add comment' +'</p>')
  commentsDiv.append('<hr>')
});
}


postSubmit.on('click', function(){
  var postText = $('#post-text').val()
  var postName = $('#post-name').val()
  
  // e.preventDefault()
  posts.push({text: postText, name: postName })
  postHandler(posts)
})

postHandler(posts)
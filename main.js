var posts = []


var postSubmit = $('#post-sub-button')
var postsDiv = $('.posts-div')
var deleteBtn = $('.remove')


const postHandler = function (posts){
  postsDiv.empty()
  if(posts.length > 0){
    
    posts.forEach(element => {
      postsDiv.append(`<div class="post-card" id="${element['id']}"><h3>${element['text']}</h3> <h4>Posted by: ${element['name']}</h4>
      <h4>${element['id']}</h4><p class="remove ${element['id']}">'Delete Post'</p><p class="comment">'Add comment'</p><hr></div>`)
      
    });

  } else {
    postsDiv.append('No posts here. Post something new and intersting?')
  }
}

const deletePostHandler = function (targetId){

  var resultArray = posts.filter(post => parseInt(post['id']) !== parseInt(targetId))
  console.log(posts)
  posts = resultArray
  postHandler(posts)

}

postsDiv.on('click', function(e){
  if((e.target).classList[0] === 'remove'){ 
 

    var $element = $(e.target.parentElement)
    console.log((e.target).classList[0])
    
    var $postId = $element[0].attributes.id.nodeValue
    deletePostHandler($postId)
  } else {
    console.log('oops!')
  }

})


postSubmit.on('click', function(){
  var postText = $('#post-text').val()
  var postName = $('#post-name').val()
  var postId = Math.trunc(Math.random() * 100000)

  posts.push({text: postText, name: postName, id: postId })
  
  postHandler(posts)
})

postHandler(posts)
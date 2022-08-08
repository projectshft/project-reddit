
var posts = []
var postSubmit = $('#post-sub-button')
var postsDiv = $('.posts-div')

const postHandler = function (posts){
  postsDiv.empty()
  if(posts.length > 0){
    
    posts.forEach(element => {
      postsDiv.append(`
      <div class="card">
        <div class="card-body" id="${element['id']}">
          <h2>${element['head']}</h2> 
          <h6>Posted by:<em> ${element['name']}</em></h6>
          <p>${element['text']}</p>
          <hr>
          <p class="remove ${element['id']} post-btn">Delete Post</p>
       </div>
      </div>`)
      
    });

  } else {
    postsDiv.append('No posts here. Post something new and interesting?')
  }
}

const deletePostHandler = function (targetId){

  var resultArray = posts.filter(post => parseInt(post['id']) !== parseInt(targetId))
  console.log(posts)
  posts = resultArray
  postHandler(posts)

}

const clickHandler = postsDiv.on('click', function(e){
  
  if((e.target).classList[0] === 'remove'){ 
  var $element = $(e.target.parentElement)
  var $postId = $element[0].attributes.id.nodeValue
  console.log($postId)
    deletePostHandler($postId)
  } else {
    console.log('oops!')
  }

})


postSubmit.on('click', function(){
  var postTextEntry = document.querySelector('#post-text')
  var postHeadEntry = document.querySelector('#post-name')
  var postNameEntry = document.querySelector('#post-head')
  var postText = $('#post-text').val()
  var postName = $('#post-name').val()
  var postHead = $('#post-head').val()
  var postId = Math.trunc(Math.random() * 100000)
  if((postText.trim() === "") || (postHead.trim() === "") || (postName.trim() === "") ){
    alert('Please fill out all of the required fields')
  } else {
    posts.push({text: postText, name: postName, head: postHead, id: postId })
    postHandler(posts)
    
    postHeadEntry.value = ""
    postNameEntry.value = ""
    postTextEntry.value = ""
  }
    
})

postHandler(posts)
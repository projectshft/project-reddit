const getResetValue = (identifier) => {
  let returnVal = ""
  $(identifier).val(function(_,value){
    returnVal = value
    return ""
  })
  return returnVal
}

$('#submit').click (function(){
  const $post = $('.posts')
  const inputMessage = getResetValue("#message")
  const inputName = getResetValue("#name")
  const newPost= '<div class="post">'
  + '<p>'
  + '<span><a id="remove" > remove </a>'
  + '<a id="comment" role="button" data-toggle="collapse" data-target="#post-comments" aria-expanded="false" aria-controls="collapseExample">'
  + 'comments </a></span>'
  + `<div class="collapse" id="post-comments" onclick="${clickComment}">`
  + comment
  +`</div>`
  + inputMessage 
  +' - Posted by : ' 
  + inputName 
  + '</p>' 
  + '<hr>'
  + "</div>"  
  $post.append(newPost)

  function clickComment () { 
    $(this).forEach((el,i)=>{
    el.setAttribute('data-comment-number', i)
    })
   }
   var comment = `<div class="well">` +
   `<form style="margin-top:20px;" style='' onsubmit="event.preventDefault();">
   <div class="form-group">
   <textarea id="comment-input" type="text" class="form-control" placeholder="Post Comment">
   </textarea>
   </div>
   <div class="form-group"><input id="name-comment" type="text" class="form-control" placeholder="Your Name">
   </input>
   </div>
   <button id="submit-comment" class="btn btn-primary">Submit Comment</button></form>`
   +'</div></div>'
  
})

$('body').on('click', '#remove', function () {
  $(this).parents('.post').remove()
});

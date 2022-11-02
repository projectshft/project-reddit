$(document).ready(function () {
    
    $posts = $('.posts')
    $submit = $('.submit-comment')
    $submitRemark = $('.submit-remark')
    
    
    function addPost(e){
        const $name = $('.name').val()
        const $comment = $('.comment').val()
        const postTime = Math.floor(e.timeStamp.toString())
        console.log(postTime)
        $posts.append('<div class="parent"><p><a class="remove">remove post </a>| <a id="'+ postTime +'"class="toggle-comments">comments </a>' + $comment + '<strong> - Posted by: </strong>' + $name +'</p> ' + '<div id="comment-'+ postTime +'" class="form-group hide-thing"><input type="text" class="remark form-control" placeholder="Comment here"/><input type="text" class="remark-name form-control" placeholder="Your name"/><button id="'+postTime+'" class="btn btn-info submit-remark">Submit</button><div id="remark-'+postTime+'" class="comment-section"></div></div></div>')
    }
    
    function removePost(e){
        const $elem = $(e.target)
        if($elem.hasClass('remove'))
        $elem.closest('div').remove()
    }
    function toggleComments(e){
        const postId = e.target.id
        if($(e.target).hasClass('toggle-comments') && $('#comment-'+postId).hasClass('hide-thing')){
            $('#comment-'+postId).removeClass('hide-thing')
        }
        else if($(e.target).hasClass('toggle-comments') && !$('#comment-'+postId).hasClass('hide-thing')){
            $('#comment-'+postId).addClass('hide-thing')
        }
    }
    
    function addComment(e){
        if($(e.target).hasClass('submit-remark')){
        const $remark = $('.remark').val()
        const $remarkName = $('.remark-name').val()
        const postId = e.target.id
        $('#remark-'+postId).append('<div><p><span><a id="'+postId+'"class="remove-comment ion-close"></a></span> '+ $remark +' - <strong>Posted by: </strong>'+$remarkName+'</p></div>')
    }
    }
    function removeComment(e){
        const $elem = $(e.target)
        if($elem.hasClass('remove-comment'))
        $elem.closest('div').remove()
    }
    $posts.click(toggleComments)
    $posts.click(removePost)
    $submit.click(addPost)
    $posts.click(addComment)
    $posts.click(removeComment)
    
    });
    
    
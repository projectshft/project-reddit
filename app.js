// Project Reddit - wk2 

const posts = [];
let JSONposts = '';
let postsDivEl = $('#posts')[0];
let postTextEl = $('#post-text')[0];
let postNameEl = $('#post-name')[0];
let buttonEl = $('button')[0];

// prevent default entry on form
const checkIfFormReturnIsPressed = (event) => {
  if (event.keyCode === 13) {
    buttonEl.click();
    return false;
  }
};

// add new posts
buttonEl.addEventListener('click', function () {
  // add to posts if not blank text
  if (postTextEl.value) {
    if (postNameEl.value == '') postNameEl.value = 'Anonymous';
    posts.unshift({ name: postNameEl.value, text: postTextEl.value, id: postNameEl.value + postTextEl.value, comments: [] });
    sessionStorage['posts'] = JSON.stringify(posts);
    renderPosts(posts);
    postTextEl.value = '';
    postNameEl.value = '';
    buttonEl.blur();
  }
});

function renderPosts(posts) {

  postsDivEl.innerHTML = '';
  for (let idx = 0; idx < posts.length; ++idx) {
    const post = posts[idx];

    // create container for individual post
    let postContainerDiv = document.createElement('div');
    postContainerDiv.setAttribute('id', `${idx}${post.id}`);
    console.log(postContainerDiv);

    // create top lone of post
    let firstLineOfPostRemove = document.createElement('span');
    firstLineOfPostRemove.setAttribute('style', "color: blue");
    firstLineOfPostRemove.innerText = 'remove';
    firstLineOfPostRemove.addEventListener('click', function () {
      removePost(`${idx}`);
    })

    function removePost(idx) {
      posts.splice(idx, 1);
      let postEl = $('div[id*="' + idx + post.name + post.text + '"]');
      postEl.remove();
    }

    postContainerDiv.append(firstLineOfPostRemove);

    let firstLineOfPostComments = document.createElement('span');
    firstLineOfPostComments.setAttribute('style', 'color: blue');
    firstLineOfPostComments.innerText = ' comments';
    firstLineOfPostComments.addEventListener('click', function () {

      if (commentsSection.style.display === 'none' || commentsSection.style.display == '') commentsSection.style.display = 'block';
      else commentsSection.style.display = 'none';
    })

    postContainerDiv.append(firstLineOfPostComments);

    let firstLineOfPostText = document.createElement('span');
    firstLineOfPostText.innerText = ` ${post.text}`;
    postContainerDiv.append(firstLineOfPostText);

    // create COMMENTS section
    let commentsSection = document.createElement('div');
    commentsSection.setAttribute('name', `${post.id}`);
    commentsSection.setAttribute('style', "display: block");
    commentsSection.innerHTML = `<div name="comments-${post.id}"></div>`;
    postContainerDiv.append(commentsSection);


    // create comments form and button for section
    const commentFormText = createCommentForm('Comment Text');
    commentFormText.setAttribute('onkeypress', "return checkIfFormReturnIsPressed(event)");
    const commentFormName = createCommentForm('User Name');
    commentFormText.setAttribute('onkeypress', "return checkIfFormReturnIsPressed(event)");

    const commentsButton = document.createElement('button');
    commentsButton.setAttribute('class', "btn btn-primary");
    commentsButton.setAttribute('style', 'margin-left: 5px')
    commentsButton.innerText = 'Post Comment';
    commentsButton.addEventListener('click', function (e) {
      let commentsParagraphs = $('p');
      if (commentsParagraphs.length > 0) commentsParagraphs.remove();

      // add to post comments if not blank text
      if (commentFormText.value || post.comments.length > 0) {
        if (commentFormName.value == '' && commentFormText.value) {
          commentFormName.value = 'Anonymous';
          post.comments.unshift({ name: commentFormName.value, text: commentFormText.value, id: post.id + commentFormName.value + commentFormText.value });
        } else if (commentFormText.value) { post.comments.unshift({ name: commentFormName.value, text: commentFormText.value, id: post.id + commentFormName.value + commentFormText.value }); }
        commentFormText.value = '';
        commentFormName.value = '';

        // render comments
        posts.forEach((post) => {
          for (let index = 0; index < post.comments.length; ++index) {
            const comment = post.comments[index];
            let commentEl = document.createElement('p');
            commentEl.setAttribute('name', comment.id);
            commentEl.setAttribute('style', "list-style-type:none");

            commentEl.innerHTML = comment.text + ' Posted By: ' + `<strong>${comment.name}</strong>` + `<strong style="color: blue"> x</strong>`;
            commentEl.children[1].addEventListener(('click'), function (e) {

              e.target.parentNode.remove();

              post.comments.splice(index, 1);
            })

            let lineBreakEl = document.createElement('br');
            let commentsDiv = $('div[name="comments-' + post.id + '"]')[0];
            if (commentsDiv) commentsDiv.append(commentEl);

          }
        })
      }
    })

    commentsSection.appendChild(commentFormText);
    commentsSection.appendChild(commentFormName);
    commentsSection.appendChild(commentsButton);

    // create post posted-by section
    let postPostedBySection = document.createElement('div');
    postPostedBySection.innerHTML = 'Posted By: ' + `<strong>${post.name}</strong>`;
    postContainerDiv.append(postPostedBySection);
    let horizontalLine = document.createElement('hr');
    postContainerDiv.append(horizontalLine);


    // append post to main posts container
    postsDivEl.appendChild(postContainerDiv);

    // render comments for each post
    post.comments.forEach((comment) => {
      let commentsDiv = $('div[name*="comments-' + post.id + '"]')[0];
      if (commentsDiv) {
        let commentEl = document.createElement('p');
        commentEl.setAttribute('name', comment.id);
        commentEl.setAttribute('style', "list-style-type:none");

        commentEl.innerHTML = comment.text + ' Posted By: ' + `<strong>${comment.name}</strong>` + `<strong style="color: blue"> x</strong>`;
        commentEl.children[1].addEventListener(('click'), function (e) {

          e.target.parentNode.remove();

          post.comments.splice(index, 1);
        })
        commentsDiv.append(commentEl);
        commentsDiv.parentNode.style.display = 'block';
        commentsDiv.style.display = 'block';
      }
    });
  }
}



const createCommentForm = (placeholder) => {
  const commentInputEl = document.createElement('input');
  commentInputEl.setAttribute('placeholder', placeholder);
  return commentInputEl;
};
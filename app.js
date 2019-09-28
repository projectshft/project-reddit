const posts = [];
const postTextEl = $('#post-text')[0];
const postNameEl = $('#post-name')[0];
const buttonEl = $('button')[0];


// create/append DOM elements 
const renderPosts = (posts) => {
  // debugger;
  
  // clear posts container before rendering
  let postEl = $('#posts');
  postEl.remove();

  // set up posts container
  postEl = document.createElement('div');
  postEl.setAttribute('id', 'posts');
  postContainer = document.querySelector('#post-container');
  postContainer.append(postEl);
 
  // create elements
  posts.forEach((post, idx) => {
    // debugger;
    
    // create container for each post
    const postContainer = document.createElement('div');
    postContainer.setAttribute('id', idx);

    // set up post elements
  
    const textEl = document.createElement('p');
    textEl.setAttribute('id', 'text');
    textEl.setAttribute('class', 'posts');
    textEl.innerHTML = post.text;

    const postedByEl = document.createElement('span');
    postedByEl.setAttribute('class', 'posts');
    postedByEl.innerHTML = 'Posted By: ';

    const divEl = document.createElement('div');
    divEl.setAttribute('class', `${post.name}: ${post.text}`);
    divEl.setAttribute('style', 'display: none');
    postedByEl.prepend(divEl);

    const commentFormText = createCommentForm('Comment Text', `${post.name}: ${post.text}`);
    const commentFormName = createCommentForm('User Name', `${post.name}: ${post.text}`);
    divEl.appendChild(commentFormText);
    divEl.appendChild(commentFormName);

    const commentsEl = document.createElement('a');
    commentsEl.setAttribute('class', 'posts');
    commentsEl.setAttribute('class', 'comments');

    // toggle comment input forms
    commentsEl.addEventListener('click', function() {
      if (divEl.style.display === 'none') divEl.style.display = 'block';
      else divEl.style.display = 'none';
    });
    commentsEl.innerText = 'comments';

    const commentsButton = document.createElement('button');
    commentsButton.setAttribute('class', "btn btn-primary");
    commentsButton.setAttribute('style', 'margin-left: 5px')
    commentsButton.innerText = 'Post Comment';

    // add event listener to comments button
    commentsButton.addEventListener('click', function () {
      // debugger;
      // add to posts if not blank text
      if (commentFormText.value) {
        if (commentFormName.value == '') commentFormName.value = 'Anonymous';
        if (!post.hasOwnProperty('comments')) var comments = [];
        else comments = post.comments;
        comments.unshift({ name: commentFormName.value, text: commentFormText.value });
        post.comments = comments;
        renderComments(comments, post, idx, textEl);
        commentFormText.value = '';
        commentFormName.value = '';
        commentsEl.click();
      }
    })
    
    const renderComments = (comments, post, idx, textEl) => {
      //debugger;
      // clear current comments container
      
      let container = document.querySelector(`#${CSS.escape(idx+post.text)}`);
      console.log(container)

      if (container) container.remove();
      
      // create comments container for rendering comments
      const commentsSection = document.createElement('div');
      commentsSection.setAttribute('id', idx+post.text);
      textEl.append(commentsSection);
      
      console.log(Array.isArray(comments));
      for (let i=0; i < comments.length; i++) {
        let text = comments[i].text;
        let name = comments[i].name;
    
        let commentLine = document.createElement('p');
        commentLine.setAttribute('id', idx);
        commentLine.innerText = `${text} Posted By: ${name}`;
    
        commentsSection.append(commentLine);
      }
      // comments.forEach((comment, idx) => {
      //   let text = comment.text;
      //   let name = comment.name;
    
      //   let commentLine = document.createElement('p');
      //   commentLine.setAttribute('id', idx);
      //   commentLine.innerText = `${text} Posted By: ${name}`;
    
      //   commentsSection.append(commentLine);
    
      // })

      const postTextEl = $('#post-text')[0];
      const postNameEl = $('#post-name')[0];
      postTextEl.value = '';
      postNameEl.value = '';
    };

    divEl.append(commentsButton);


    const nameEl = document.createElement('strong');
    nameEl.setAttribute('class', 'posts');
    nameEl.innerText = post.name;
  
    const horizontalLine = document.createElement('hr');
    horizontalLine.setAttribute('class', 'posts');
  
    postContainer.append(textEl);
    textEl.prepend(commentsEl);
    postContainer.append(postedByEl);
    postContainer.append(nameEl);
    postContainer.append(horizontalLine);
    postEl.append(postContainer);
    renderComments(post.comments, post, idx, textEl);
    
  })
}

// prevent default behavior on forms
const checkIfFormReturnIsPressed = (event) => {
  if (event.keyCode === 13) {
    buttonEl.click();
    return false;
  }
};

buttonEl.addEventListener('click', function () {
  // select form text and name
  const postTextEl = $('#post-text')[0];
  const postNameEl = $('#post-name')[0];

  // add to posts if not blank text
  if (postTextEl.value) {
    if (postNameEl.value == '') postNameEl.value = 'Anonymous';
    posts.push({ name: postNameEl.value, text: postTextEl.value });
    renderPosts(posts);
    postTextEl.value = '';
    postNameEl.value = '';
  }
});

const createCommentForm = (placeholder, id) => {
  const commentInputEl = document.createElement('input');
  commentInputEl.setAttribute('id', id);
  commentInputEl.setAttribute('placeholder', placeholder);  
  return commentInputEl;
};











  // Create from peg form
  // const fromPegFormEl = document.createElement('form');
  // const fromPegInputEl = document.createElement('input');
  // const fromPegInputSubmitEl = document.createElement('input');
  // fromPegFormEl.setAttribute('id', 'fromPeg');
  // fromPegInputEl.placeholder = 'enter peg to move from';
  // fromPegInputEl.name = 'fromPeg';
  // fromPegInputSubmitEl.setAttribute('type', 'submit');
  // fromPegFormEl.appendChild(fromPegInputEl);
  // fromPegFormEl.appendChild(fromPegInputSubmitEl);
  // document.body.appendChild(fromPegFormEl);
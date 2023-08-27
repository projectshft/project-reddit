const postsDiv = document.querySelector('.posts');

const button = document.getElementById("submit");

button.addEventListener('click', function(){
    const name = document.getElementById('yourName').value;
    const text = document.getElementById('message').value;
    console.log(name + text);
  
    // const postsDiv = document.querySelector('.posts');
  
    const newPostDiv = document.createElement('div');
    const newPostTextP = document.createElement('p');
    const newPostTextNode = document.createTextNode(text);
    newPostTextP.appendChild(newPostTextNode);
  
    const newPostNameP = document.createElement('p');
    const newPostNameNode = document.createTextNode('Posted By: ' + name);
    newPostNameP.appendChild(newPostNameNode);
  
    const newPostRemove = document.createElement('p');
    const newPostRemoveNode = document.createTextNode('remove |');
    newPostRemove.appendChild(newPostRemoveNode);

    const newPostComments = document.createElement('p');
    const newPostCommentsNode = document.createTextNode('comments');
    newPostComments.appendChild(newPostCommentsNode);
    // newPostRemove.appendChild(newPostComments);

    newPostComments.classList.add("post-comments");
    newPostRemove.classList.add("post-remove");
    const newPostHR = document.createElement('hr');
    newPostDiv.appendChild(newPostTextP);
    newPostDiv.appendChild(newPostNameP);
    newPostDiv.appendChild(newPostRemove);
    newPostDiv.appendChild(newPostComments);
    newPostDiv.appendChild(newPostHR);
    newPostDiv.className = "postDiv col-md-6 offset-md-3";
    postsDiv.append(newPostDiv);
    document.getElementById('yourName').value = "";
    document.getElementById('message').value = "";
  });


postsDiv.addEventListener("click", function (e)
{
  if (e.target.classList.contains("post-remove"))
    {
      // const remove = e.target.closest('.post-remove');
      const postDiv = e.target.closest('.postDiv')
      postDiv.style.display = "none";
    }
})
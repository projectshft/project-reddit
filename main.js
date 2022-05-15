/*
document.getElementById('submit').addEventListener('click', function () {
  const target = document.getElementsByClassName('posts')[0];
  const div = document.createElement('div');
  const author = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  div.innerHTML = 
    `<p>${message}</p>
    <p>Posted by: <strong>${author}</strong></p>
    <hr>`;

  target.appendChild(div);
});
*/
const postState = {
  posts: [
    {
      author: 'Andrew',
      text: 'What an amazing post!',
      comments: [
        {
          author: 'Eliza',
          text: 'Yes, it is!',
        },
        {
          author: 'Alecia',
          text: "Couldn't agree more!"
        }
      ]
    },
    {
      author: 'Eliza',
      text: 'But mine is even better.',
      comments: [
        {
          author: 'Drew',
          text: 'My post!',
        },
      ]
    },
    {
      author: 'Alecia',
      text: 'But what about mine?',
      comments: []
    }
  ],
};
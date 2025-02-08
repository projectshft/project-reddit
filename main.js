import { addPost, deletePost } from './postMethods.js';
import { showComments, addComment } from './commentMethods.js';

const main = document.querySelector('.main');
const posts = document.querySelector('.posts');

main.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('add-post')) {
    addPost(e.target, posts);
  }
  if (e.target.classList.contains('delete-btn')) {
    deletePost(e.target);
  }
  if (e.target.classList.contains('show-comments')) {
    showComments(e.target);
  }
  if (e.target.classList.contains('add-comment')) {
    addComment(e.target);
  }
});

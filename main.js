// $(document).ready(function () {
var $postContainer = $('#posts');
var postCounter = 0;
var postData = [
  {
    name: 'Andres',
    post: 'Cool post yall...',
    comments: [
      {
        author: 'Luis',
        content: 'this sucks...'
      },
      {
        author: 'Bob',
        content: 'what she said'
      }
    ]
  },
  {
    name: 'Andres',
    post: 'Cool post yall...',
    comments: []
  },
  {
    name: 'Andres',
    post: 'Cool post yall...',
    comments: {
      author: 'Luis',
      comment: 'man this post sucks...',
    }
  }
];

/** Handle submitting form */
function submitForm() {
  var postObj = {};
  var postBody = $('#post-body').val();
  var name = $('#post-name').val();
  postObj.name = name;
  postObj.post = postBody;

  postData.push(postObj);
  $postContainer.append(`<p>${postData[postCounter].post} - Posted by: <strong>${postData[postCounter].name}</p></strong>`);
  postCounter++;

}

console.log(postData);
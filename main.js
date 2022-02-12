var createPost = function (textPost, namePost) {
  var $submitPost = $("#button");
  var $postMessage = $('#message');
  var $postName = $('#name');



  var template = 
    '<tr class="post">'
      '<td class="text-of-post">' + textPost + '</td>'
      '<td class="name-of-post"> Posted by: ' + namePost + '</td>'
    '</tr>'
    ;

    var $row = $(template);

    $row.click(createPost);
    console.log($row);
    return $row;

};

var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
  
  createPost();
  console.log('click');
});
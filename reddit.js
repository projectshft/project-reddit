//add post
var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
  var userInput = document.getElementsByClassName('name')[0].value;
  var li = document.createElement('li');
  var userInputElement = document.createTextNode(userInput);
  
  li.appendChild(userInputElement);
  
  document.getElementsByClassName('names')[0].append(li);
});

$('button').on('click', function () {
    $('#newPostForm').val()
  });

  

   



/*<input type="text" id="userInput"=> give me input</input>
<button onclick="test()">Submit</button>

<!-- add this line for function to write into -->
<p id="demo"></p>   

<script type="text/javascript">
function test(){
    var userInput = document.getElementById("userInput").value;
    document.getElementById("demo").innerHTML = userInput;
}
</script>//


// Display Post
// Display all post
// Add comment
// Delete Comment
//Receive name and post-text inputs and output them to the "new post viewer" section of the html.
$('#post-button').on('click', function() {
  var $nameOutput = $('#name-input').val();
  var $textOutput = $('#post-body-input').val();
  console.log('$nameOutput is: ', $nameOutput);
  console.log('$textOutput is: ', $textOutput);
  // var $outPut = ()

  // Append $postIt html output variable to the post-viewer
  $('#post-viewer').append(
    `<p>${$textOutput}</p><p align="right"><i>Posted by: <b>${$nameOutput}</b></i></p><div class="border-bottom my-3"></div>`
  );

  // Empty the the name and post-body input fields
  // Use empty() ??? I *think* emptying the value is more comprehensive
  $('#name-input').val('');
  $('#post-body-input').val('');
});

//////////////////////////////////////////////////////////////////////////////
// Create an array to contain post data that includes comments and commenters (from a separately built array yet to be designed)

// This array will be used/referenced to make the output manipulatible (edit, delete/remove, post a comment to, etc.).

// This array may also be used to populate the comments viewer 

var postEntity = [
  {
    nameOfPoster: '',
    textOfPost: '',
    commentsMadeUpon: [{ nameOfCommenter: '', textOfComment: '' }]
  }

  // Create an object that contains a key-value pair for posts and comments
  {
    // Create an array of individual posts
    posts: [
      // Create an object for each individual post that contains 1) the name of the poster 2) the associated text of their post, and 3) an array of associated comments
      {
        nameOfPoster: 'John Lennon',
        textOfPost: 'Ob la di, Ob la da',
        // Create an array of comments that contains each individual comment as an object with commenter
        commentsMadeUpon: [
          {
            nameOfCommenter: 'George Harrison',
            textOfComment: 'Life goes on'
          },
          {
            nameOfCommenter: 'Ringo',
            textOfComment: 'BRAH!!!'
          },
          {
            nameOfCommenter: 'Paul McCartney',
            textOfComment: 'la la la la la la'
          },
          {
            nameOfCommenter: 'George Harrison',
            textOfComment: 'Life goes on'
          }
        ]
      },
      {
        nameOfPoster: 'Kyrie Irving',
        textOf:
          'Rebound... behind-the-back-dribble... through the legs... racing up the court... like I was born to do',
        commentsMadeUpon: [
          {
            nameOfCommenter: 'Jason Tatum',
            textOfComment: 'Yo, pass it here, flat-earther.... SLAM!!!!'
          },
          {
            nameOfCommenter: 'Harrison Barnes',
            textOfComment:
              'Ky, come on now, do you *really* believe the world is flat?'
          }
        ]
      },
      {
        nameOfPoster: 'J. Query',
        textOf: 'Write less, do more!',
        commentsMadeUpon: []
      }
    ]
  }
];

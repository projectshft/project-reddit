const postState = [];

const text = $('#text-box').val();
const name = $('#name-box').val();

const formatter = (text, name) => {
  return `<p>${text} - Posted by: ${name}</p>`
}

const arrayPusher = (array, formattedElement) => {
  array.push(formattedElement);
}

const mapper = (array) => {
  array.map(arr => arr)
  return array;
}

const appender = (toAppend, location) => {
  $(`${location}`).append(toAppend)
}

const emptyer = (location) => {
  $(`${location}`).empty();
}


const submitPost = (array, location, text, name) => {
  emptyer(location);

  const formatted = formatter(text, name);

  arrayPusher(array, formatted);

  appender(array, location)

}

submitPost(postState, '#content-post', text, name);

//create post test
//use input values


//clear appended
//re-append









// var text = $('#text-box').val();

// const click = (comment) => {
//   $('#content-post').append(`<p>${comment}</p>`);
// }

// $('.btn').click(() => {
//   click(text)
// })




// var clickFunction = function () {
  
//   var text = $('textarea').val();

//   var name = $('input').val();

//   $('.table').append(`<tr class="row">
//   <td><a id="remove">remove<a></td>
//   <td id="comment"><a>comment</a></td>
//   <td>${text}</td>
//   <td>–Posted by: ${name}</td>
//   </tr>`);

//   $('.table').append(`<textarea rows="1" class="col" placeholder="Comment Text" id="comment-box"></textarea>`);

//   $('.table').append(`<input class="col" id="comment-name-box" placeholder="Your Name"/>`);

//   $('.table').append(` <button class="btn btn-primary" id="comment-submit-button">Submit Comment</button>`);


//   $('#message').val('');
//   $('#name-box').val('');

//   var commentClick = function () {

//     $('#comment-box').css('display', 'inline');
//     $('#comment-name-box').css('display', 'inline');
//     $('#comment-submit-button').css('display', 'inline');
//   };
//   $('#comment').click(commentClick);


//   var commentSubmitButtonClick = function () {

//     var text2 = $('#comment-box').val();

//     var name2 = $('#comment-name-box').val();

//     $(`<tr class="row">
//     <td><a id="remove">remove<a></td>
//     <td>${text2}</td>
//     <td>–Comment by: ${name2}</td>
//     </tr>`).insertBefore('#comment-box');

    
//   };
//   $('#comment-submit-button').click(commentSubmitButtonClick);

//   var removeClick = function () {
//     $('.table').children("tr").remove();
//   };
//   $('#remove').click(removeClick);
//   // consider $(this).remove();
//   // consider populating with objects


// };

// $('.btn').click(clickFunction);


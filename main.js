const postState = [];




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


const submitPost = (array, location) => {
  const text = $('#text-box').val();
  const name = $('#name-box').val();

  emptyer(location);

  const formatted = formatter(text, name);

  arrayPusher(array, formatted);

  appender(array, location)

  $('#text-box').val('');
  $('#name-box').val('');
}

$('.btn').click(() => submitPost(postState, '#content-post'))


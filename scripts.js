
//create an object that houses both the posts and the comments
// var Postings = {
//     originalPost: { },

//     comments: [
//         {},
//     ]
// };

//var Postings = [];

var createPost = function () {
    var post = {
        text: $('#text').val(),
        name: $('#name').val()
    }
    $('.post-list').append('<li>' + post.text +  '<br>' + '<b>'+ " Posted by: " + '</b>' + post.name + '</li>')
    //Postings['originalPost'].push(post);

};


// console.log(Postings);

//get the name and post text from the form when they click the Post button
$('.btn-primary').click(function (event) {
    event.preventDefault();
    createPost();
});


/*
//Handlebars template compile and execute
var source = $('#comments-template').html();
var template = Handlebars.compile(source);
//pass in OJBECT as argument
var html = template({ Postings });
$('#new-post').append(html);
*/
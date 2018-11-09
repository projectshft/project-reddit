//Handlebars template compile and execute
var source = $("comments-template").html();
var template = Handlebars.compile(source);
//var context = {post-text:"", post-name:""};
var html = template(context);
$('.post-list').append(html);
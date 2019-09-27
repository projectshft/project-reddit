var UserContent = function (text, username) {
    this.text = text;
    this.username = username;
};

//object helper functions for adding HTML
UserContent.prototype = {
    textHTML: function () {
        return '<div class="post-text">' + this.text + '</div>';
    },
    userHTML: function () {
        return '<div class="post-body">Posted By: <b>' + this.username + '</b></div>';
    },
    contentHTML: function () {
        return '<div>' + this.textHTML() + this.userHTML() + '</div>';
    }
};

//Post object that contains Title in addition to UserContent properties and functions
function Post(title, text, username) {
    UserContent.call(this, text, username);
    this.title = title;
}

Post.prototype = new UserContent;

Post.prototype.titleHTML = function () {
    return '<h4 class="post-title"><u>' + this.title + '</u></h4>';
};

//overriding Post's contentHTML to add Title
Post.prototype.contentHTML = function () {
    return '<div>' + this.titleHTML() + this.textHTML() + this.userHTML() + '</div>';
};
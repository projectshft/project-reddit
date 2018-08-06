# project-reddit

Notes:  
Basic structure, posting, commenting, show/hide comment section, remove comments/posts functional.  

Issues:  
Buggy.  Can only comment on or remove first post (first li).  Can only remove first comment.  Can only remove first post/li, and that removes all of the posts.  Comments are dynamic html and should be rewritten to use an array of objects.  Possibly do the same for the main posts.  That would be key to several things like a) keeping state after a page refresh, b) getting jquery working as intended with picking specific items (maybe?), making it scalable.  

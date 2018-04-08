const assert = require('assert');
const User = require('../src/user.js');
const Comment = require('../src/comment.js');
const BlogPost = require('../src/blogPost.js');

describe('Assiciatons', ()=>{
    let joe, blogPost, comment;
    beforeEach((done)=>{
        joe = new User({name:'Joe'});
        blogPost = new BlogPost({title:'JS is great', content:'Yep it really is'});
        comment = new Comment({content:'Congrats on great post'});

        joe.blogPosts.push(blogPost);
        blogPost.comments.push(comment);
        comment.user = joe;
    })
});
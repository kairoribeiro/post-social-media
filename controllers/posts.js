import { Post } from '../models/post.js'

function index(req, res) {
  Post.find({})
  .then(posts => {
    res.render('posts/index', {
      posts,
      title: "Home Page",
      user: req.user,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res) {
  req.body.author = req.user.profile._id
  Post.create(req.body)
  .then(post => {
    res.redirect('/posts')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}


function show(req, res) {
  Post.findById(req.params.id)
  .then(post => {
    res.render('posts/show', { 
      title: 'Post Details', 
      post: post,
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}



export {
  index,
  create,
  show,
}
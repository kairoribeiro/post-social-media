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

function deletePost(req, res) {
  req.body.author = req.user.profile._id
  Post.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/posts")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createComment(req, res) {
  req.body.author = req.user.profile._id
  Post.findById(req.params.id)
  .then(post => {
    post.comments.push(req.body)
    post.save()
    .then(() => {
      res.redirect(`/posts/${post._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  })
}


function editComment(req, res) {
  // req.body.author = req.user.profile._id
  Post.findById(req.params.postId)
  .then(post => {
    const comment = post.comments.id(req.params.commentId)
    // post.save()
  // .then(post => {
    res.render("posts/edit", {
      post, 
      comment,
      title: "Edit Comment"
    })
  // })

  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


 function deleteComment(req, res) {
req.body.author = req.user.profile._id
  Post.findById(req.params.postId)
  .then(post => {
    post.comments.remove({_id: req.params.commentId})
    post.save()
    .then(() => {
      res.redirect(`/posts/${req.params.postId}`)
    })
  })
  
    .catch(err => {
      console.log(err)
      res.redirect(`/posts/${req.params.postId}`)
    })
}


export {
  index,
  create,
  show,
  deletePost as delete,
  createComment,
  editComment,
  deleteComment,
}
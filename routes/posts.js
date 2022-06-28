import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/posts
router.get('/', postsCtrl.index)

// POST localhost:3000/posts
router.post('/', isLoggedIn, postsCtrl.create)

// POST localhost:3000/posts/:id/comments
router.post('/:id/comments', isLoggedIn, postsCtrl.createComment)

// GET localhost:3000/posts/:id
router.get('/:id', postsCtrl.show)

//DELETE localhost:3000/posts/:id
router.delete("/:id", isLoggedIn, postsCtrl.delete)

//GET localhost:3000/posts/:id/edit
router.get("/:id/edit", isLoggedIn, postsCtrl.edit)

//PUT localhost:3000/posts/:id
router.put("/:id", isLoggedIn, postsCtrl.update)





// GET localhost:3000/postsId/comments/commentId/edit
// router.get('/:postId/comments/:commentId/edit', isLoggedIn, postsCtrl.editComment)

//DELETE localhost:3000/postsId/comments/commentIdv (delete commnet)
router.delete('/:postId/comments/:commentId', isLoggedIn, postsCtrl.deleteComment)


export {
  router,
}
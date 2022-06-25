import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/posts
router.get('/', postsCtrl.index)

// POST localhost:3000/posts
router.post('/', isLoggedIn, postsCtrl.create)





export {
  router,
}
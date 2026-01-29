const express = requiere("express")
const router = express.Router()


router.post("/create", postController.createPost)
router.get("/", postController.getAllposts)
router.get("/id/:_id", postController.getPostById)
router.get("/title/:title", postController.getPostByTitle)
router.put("/id/:_id", postController.updatePost)
router.delete("/id/:_id", postController.deletePost)

router.get("/getPostWithPagination")



module.exports = router







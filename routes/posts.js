const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");



router.post("/create", postController.createPost);

router.get("/", postController.getAllPosts);

router.get("/id/:_id", postController.getPostById);

router.get("/title/:title", postController.getPostByTitle);

router.put("/id/:_id", postController.updatePost);

router.delete("/id/:_id", postController.deletePost);

router.get("/postsWithPagination", postController.postWithPagination);

module.exports = router;
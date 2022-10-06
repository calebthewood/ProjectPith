
/* Routes for Blog Posts */

const express = require("express");

const { BadRequestError } = require("../expressError");
const BlogPosts = require("../models/blogPosts");
const Notion = require("../notionAPI");

const router = new express.Router();

/**
 * POST /posts/[id]
 *
 * Upload Pipeline for moving post form notion to DB
 * */
router.post("/posts", async (req, res, next) => {
  const pageId = req.query.id;
  const newPost = await Notion.buildBlogPost(pageId); // fetch from notion
  const response = await BlogPosts.create(newPost); // upload to db
  return res.json({response}) // reply with confirmation
});

router.get("/posts/:id", async (req, res, next) => {
  const blogId = req.params.id;
  // const response = await BlogPosts.getById(blogId);
  // return res.json({response})
  return res.json({message: `blog id: ${blogId}`})
});

router.get("/", (req, res, next) => {
  return res.json({message: "Project Pith's Blog Endpoint"})
})

module.exports = router;
/* Routes for Blog Posts */
const express = require("express");

const { BadRequestError } = require("../expressError");
const BlogPosts = require("../models/blogPosts");
const Notion = require("../notionAPI");

const router = new express.Router();

/** GET /posts
 *
 * Returns All Posts
 */
router.get("/posts", async (req, res, next) => {
  const response = await BlogPosts.getAll();
  return res.json({response});
});

/** GET /posts[id]
 *
 * Queries for Post by ID
 */
router.get("/posts/:id", async (req, res, next) => {
  const response = await BlogPosts.getById(req.params.id);
  return res.json({ response });
});

/** POST /posts/[id]
 *
 * Upload Pipeline for moving post form notion to DB
 */
router.post("/posts", async (req, res, next) => {
  const newPost = await Notion.buildBlogPost(req.query.id); // fetch from notion
  const response = await BlogPosts.create(newPost); // upload to db
  return res.json({ response }); // reply with confirmation
});

/** Can Ping the Server here without also hitting the db */
router.get("/", (req, res, next) => {
  return res.json({ message: "Project Pith's Blog Endpoint" });
});

module.exports = router;

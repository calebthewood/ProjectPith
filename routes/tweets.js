/* Route(s) for Getting Tweets */
const TwitterAPI = require("../twitterAPI")
const express = require("express");

const router = new express.Router();

/** GET /tweets/:tags
 *
 * Returns All Posts
 */
router.get("/:tag", async (req, res, next) => {
  const myTwitter = new TwitterAPI();
  let response = await myTwitter.filterByHashtag(req.params.tag);
  console.log("Twitter Res: ",response);
  return res.json({response: response});
});

module.exports = router;

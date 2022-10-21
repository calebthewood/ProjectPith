const client = require("../db.js");
const { DATABASE } = require("../config");
const { BadRequestError, NotFoundError } = require("../expressError");
require("colors");


class BlogPosts {
  static db = client.db(DATABASE).collection("blog_posts");

  static async create(post) {
    const result = BlogPosts.db.insertOne(post);
    if (!result) throw new BadRequestError(`Duplicate Entry: ${post}`);
    console.log(`New listing created with the following id: ${result.insertedId}`.yellow);
    return result;
  }

  static async createMany(posts) {
    const result = await BlogPosts.db.insertMany(posts);
    if (!result) throw new BadRequestError(`Duplicate Entry: ${posts}`);
    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`.yellow);
    console.table(result.insertedIds);
    return result;
  }

  static async getById(pageId) {
    try {
      const result = await BlogPosts.db.findOne({ "_id": pageId });
      if (!result) throw new NotFoundError(`No listings found with the ID:  ${pageId}`);
      console.log("Found a record for: ".yellow, pageId);
      console.log(result);
      return result;
    } catch (e) {
      console.error("Bad Notion Request: ", e)
    }
  }

  static async getAll() {
    try {
      const result = await BlogPosts.db.find({}).toArray();
      //.sort({ _id: -1 }).limit(10) -- set it up to query all and get the 10 most recent
      if (!result) throw new NotFoundError("No listings found");
      console.log("Found posts:  ".yellow);
      console.log(result);
      return result;
    } catch (e) {
      console.error("Error: ",e)
    }

  }

  static async close() {
    await client.close();
  }

}

const testPost = {
  _id: "testID-9999-8888-7777-6666",
  author: "Frodo Baggins",
  date: "2022-10-4",
  tags: ["React", "JavaScript", "Test"],
  project: "myPersonalSite",
  title: "Testing MongoDB",
  blocks: [
    {
      id: "block-id-1111",
      type: "paragraph",
      content: {
        rich_text: [{
          type: 'text',
          text: {},
          annotations: {},
          plain_text: 'test content',
          href: null
        }]
      }
    }, {
      id: "block-id-2222",
      type: "paragraph",
      content: {
        rich_text: [{
          type: 'text',
          text: {},
          annotations: {},
          plain_text: 'test content',
          href: null
        }]
      }
    }, {
      id: "block-id-3333",
      type: "paragraph",
      content: {
        rich_text: [{
          type: 'text',
          text: {},
          annotations: {},
          plain_text: 'test content',
          href: null
        }]
      }
    },
  ],

};

module.exports = BlogPosts;
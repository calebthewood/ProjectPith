const MongoDB = require("../db.js")
const { BadRequestError, NotFoundError } = require("../expressError");

// await MongoDB.close(); use in controller

class BlogPosts {
  constructor() { //confirm this works, might switch to static
    this.database = "project_pith";
    this.collection = "blog_posts";
  }

  static async create(post) {
      const result = await MongoDB.db(this.database).collection(this.collection).insertOne(post);
      if (result) {
        console.log(`New listing created with the following id: ${result.insertedId}`.yellow);
        return result;
      } else {
        throw new BadRequestError(`Duplicate Entry: ${post}`)
      }

  }

  static async createMany(posts) {
      const result = await MongoDB.db(this.database).collection(this.collection).insertMany(posts);
      if (result) {
        console.log(`${result.insertedCount} new listing(s) created with the following id(s):`.yellow);
        console.table(result.insertedIds);
        return result;
      } else {
        throw new BadRequestError(`Duplicate Entry: ${posts}`)
      }
  }

  static async getById(pageId) {
      const result = await MongoDB.db(this.database).collection(this.collection).findOne({ _id: pageId });
      if (result) {
        console.log(`Found a listing'${pageId}':`.yellow);
        console.table(result);
        return result;
      } else {
        throw new NotFoundError(`No listings found with the name '${pageId}'`);
      }
  }

  static async getAll(options = {}) {
      const result = await MongoDB.db(this.database).collection(this.collection).find(options)
      if (result) {
        console.log(`Found a listings'${nameOfListing}':`.yellow);
        return result;
      } else {
        throw new NotFoundError("No listings found");
      }
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
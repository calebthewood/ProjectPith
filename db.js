const { DATABASE_URI } = require("./config");
const { MongoClient, ServerApiVersion } = require('mongodb');

const dbName = "project_pith";
const dbCollection = "blogPosts";

// async function main() {
//   const client = new MongoClient(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//   await client.connect();
// }

class BlogDB {
  constructor() {
    this.database = "project_pith";
    this.collection = "blog_posts";
    this.client = new MongoClient(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1
    });
  }

  async addPost(data) {
    try {
      await this.client.connect();
      const result = await this.client.db(this.database).collection(this.collection).insertOne(data);
      console.log(`New listing created with the following id: ${result.insertedId}`.yellow);
    } catch (e) {
      console.error(e);
    } finally {
      await this.client.close();
    }
  }

  async addPostsArray(blogPosts) {
    try {
      await this.client.connect();
      const result = await this.client.db(this.database).collection(this.collection).insertMany(blogPosts);
      console.log(`${result.insertedCount} new listing(s) created with the following id(s):`.yellow);
      console.table(result.insertedIds);
    } catch (e) {
      console.error(e);
    } finally {
      await this.client.close();
    }
  }

  async getPostById(pageId) {
    try {
      const result = await this.client.db(this.database).collection(this.collection).findOne({ _id: pageId });
      if (result) {
        console.log(`Found a listing'${nameOfListing}':`.yellow);
        console.log(result);
      } else {
        console.log(`No listings found with the name '${nameOfListing}'`.red);
      }
    } catch (e) {
      console.error(e);
    } finally {
      await this.client.close();
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

const db = new BlogDB();
// db.addPost(testPost);
module.exports = BlogDB;
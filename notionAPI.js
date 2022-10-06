const { Client, APIErrorCode } = require("@notionhq/client");
const { NOTION_DATABASE_ID, NOTION_TOKEN } = require("./config");

const canvasPageId = '184f3a9e62c74f15871e114bd1b256ea';
const post1 = '047de6519c934c38ba46728227a5e77a';

/* I would like to confirm whether this better to initialize
client inside a class or outside. Leaving sample here for now.

Initializing a client
const notion = new Client({
  auth: NOTION_TOKEN,
}); */

class Notion {
  static notion = new Client({
    auth: NOTION_TOKEN,
  });

  /** Adds Item to Notion Workspace */
  static async addItem(text) {
    try {
      const response = await this.notion.pages.create({
        parent: { database_id: NOTION_DATABASE_ID },
        properties: {
          title: {
            title: [
              {
                "text": {
                  "content": text
                }
              }
            ]
          }
        },
      });
      console.log(response);
      console.log("Success! Entry added.");
    } catch (error) {
      console.error(error.body);
    }
  }

  /**
   * Accepts page ID and retrieves Page Object
   * containing the db properties of a page. To
   * fetch page content use fetch block children.
   */
  static async getPageObject(pageId) {
    const response = await this.notion.pages.retrieve({ page_id: pageId });
    return response;
  };

  /**
   * Accepts block ID and returns all child blocks
   * representing the content of a page. For this
   * app I will use a page ID, but it could be used
   * to fetch nested data from a page, db, etc.
   * */
  static async getBlockChildren(blockId) {
    const response = await this.notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
    });
    return response.results;
  };

  static parseBlockChildren(list) {
    const blocks = list.map(block => {

    });
  }
  // block.code.rich_text[0].plain_text


  /**
   * Not in use. Allows for querying of a Notion DB.
   *  */
  static async queryDatabase(databaseId) {
    const response = await this.notion.databases.query({
      database_id: databaseId,
      //filtering
      filter: {
        and: [
          {
            property: 'Done',
            checkbox: {
              equals: true,
            }
          },
          {
            property: 'Uploaded',
            checkbox: {
              equals: false,
            }
          },
        ]
      },
      //sorting
      sorts: [
        {
          property: 'Posts',
          direction: 'descending',
        },
      ],
    });
    console.log(response.results[0].properties.Posts.title);
  };

  static async buildBlogPost(pageId) {
    const goodBlocks = new Set([
      'paragraph', 'heading_1', 'heading_2', 'heading_3', 'code']);
    const pageObject = await this.getPageObject(pageId);
    const blocks = await this.getBlockChildren(pageId);
    const parsedBlocks = blocks.filter(block => {
      if (goodBlocks.has(block.type)) {
        return {
          id: block.id,
          type: block.type,
          content: [block.type]
        };
      }
    });
    // This extracts only the data from the notion sdk that I want to keep.
    // As I add more features, notion has lots more data to use.
    return {
      id: pageObject.id,
      author: pageObject.properties.author.rich_text[0].plain_text,
      date: pageObject.properties.date.date.start,
      tags: pageObject.properties.tags.multi_select,
      project: pageObject.properties.project.rich_text[0].plain_text,
      title: pageObject.properties.post.title[0].plain_text,
      blocks: parsedBlocks,
    };
  }

}

/** For Exploring Notion Data, edit as needed */
async function printData(postId) {
  let pageObject = await Notion.getPageObject(postId);
  let blocks = await Notion.getBlockChildren(postId);
  console.log("data:  ".red,blocks);
}

// printData();

module.exports = Notion;
const { Client, APIErrorCode } = require("@notionhq/client");
const { NOTION_DATABASE_ID, NOTION_TOKEN } = require("./config");
const { today } = require("./helpers/helpers");

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

  /**
   * Accepts page ID and retrieves Page Object
   * containing the db properties of a page. To
   * fetch page content use fetch block children.
   */
  static async getPageObject(pageId) {
    console.log("In getPageObject:          ", pageId);
    const response = await this.notion.pages.retrieve({ page_id: pageId });
    return response;
  };

  /**
   * Accepts block ID and returns all child blocks
   * representing the content of a page. For this
   * app I will use a page ID, but it could be used
   * to fetch nested data from a page, db, etc.
   */
  static async getBlockChildren(blockId) {
    const response = await this.notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
    });
    return response.results;
  };

  /**
     * Accepts a page ID and returns blog post object by fetching,
     * and filtering page data from notion database.
     *
     * @param {*} pageId
     * @returns {} blog post object
     */
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
          content: block[block.type]
        };
      }
    });

    // Extracting only the data I'm currently using, may expand this later.
    // posterity, how to get page object date: pageObject.properties.date?.date.start
    let title = pageObject.properties.post.title[0].plain_text;

    let slug = title.split(" ").join("-").toLowerCase() + "-" + today; // for client routing and filtering.
    return {
      _id: pageObject.id,
      slug: slug,
      title: title,
      author: pageObject.properties.author.rich_text[0].plain_text,
      date: today, // may do the date myself?
      tags: pageObject.properties.tags.multi_select || [],
      project_id: pageObject.properties.project_id.rich_text[0].plain_text || false,
      blocks: parsedBlocks,
    };
  }

  /** Not in use. Adds Item to Notion Workspace */
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
   * Not in use. Allows for querying of a Notion DB.
   */
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

}

/** For Exploring Notion Data, edit as needed */
async function printData(postId) {
  let pageObject = await Notion.getPageObject(postId);
  let blocks = await Notion.getBlockChildren(postId);
  console.log("data:  ".red, blocks);
}
// printData();

module.exports = Notion;
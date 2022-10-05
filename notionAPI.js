const { Client, APIErrorCode } = require("@notionhq/client");
const { NOTION_DATABASE_ID, NOTION_TOKEN } = require("./config");

const canvasPageId = '184f3a9e62c74f15871e114bd1b256ea';

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
  static async getPageObject(pageId){
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
    //gets code block out.
    response.results.forEach(block => {
      if (block.type === 'code') {
        console.log(block.code.rich_text[0].plain_text);
      }
    });

    // console.log(response);
  };

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

}

// REMINDER for how to properly interact with Notion API
async function printData(){
  let data = await Notion.getPageObject(canvasPageId)
  console.log(data)
}



module.exports = Notion;
// Notion Block
// https://developers.notion.com/reference/block
// notion.blocks.children.list(...options) from Notion page for Canvas - JS
const response = {
  object: 'list',
  results: [
    {
      object: 'block',
      id: 'b6940466-f5de-488e-ae01-92191c394ed5',
      parent: [Object],
      created_time: '2022-09-18T23:55:00.000Z',
      last_edited_time: '2022-09-19T00:16:00.000Z',
      created_by: [Object],
      last_edited_by: [Object],
      has_children: false,
      archived: false,
      type: 'paragraph',
      paragraph: {
        rich_text: [
          {
            type: 'text',
            text: [Object],
            annotations: [Object],
            plain_text: 'There are three ways to render “graphics” in the browser. The first is with HTML elements. You can do quite a lot with a div and some css, but the limitations become apparent, when you want to start doing shapes that don’t conform to the parameters of a square or circle, and good luck drawing a triangle in HTML. Another other option is SVG, Scalable Vector Graphics. It’s like a markup language to describe shapes rather than text. It can be embedded directly in an HTML document or in an img tag. Lastly, we have canvas.',
            href: null
          }
        ],
        color: 'default'
      }
    },
    {
      object: 'block',
      id: 'b2f0bcd7-1a18-4654-90b6-375170aca62c',
      parent: [Object],
      created_time: '2022-09-19T00:17:00.000Z',
      last_edited_time: '2022-09-19T00:17:00.000Z',
      created_by: [Object],
      last_edited_by: [Object],
      has_children: false,
      archived: false,
      type: 'paragraph',
      paragraph: { rich_text: [], color: 'default' }
    },
    {
      object: 'block',
      id: '0fd36fa5-8ee1-4e08-aef3-92738bb5bef1',
      parent: [Object],
      created_time: '2022-09-19T00:17:00.000Z',
      last_edited_time: '2022-09-19T00:17:00.000Z',
      created_by: [Object],
      last_edited_by: [Object],
      has_children: false,
      archived: false,
      type: 'paragraph',
      paragraph: { rich_text: [], color: 'default' }
    },
    {
      object: 'block',
      id: '0b0d52db-92a1-421a-b220-e1f7ac88f49a',
      parent: [Object],
      created_time: '2022-09-19T00:17:00.000Z',
      last_edited_time: '2022-09-19T00:18:00.000Z',
      created_by: [Object],
      last_edited_by: [Object],
      has_children: false,
      archived: false,
      type: 'paragraph',
      paragraph: {
        rich_text: [
          {
            type: 'text',
            text: [Object],
            annotations: [Object],
            plain_text: 'SVG',
            href: null
          }
        ],
        color: 'default'
      }
    },
    {
      object: 'block',
      id: '71a8652a-4c68-4e77-8861-238c5954d78b',
      parent: [Object],
      created_time: '2022-09-19T00:18:00.000Z',
      last_edited_time: '2022-09-19T00:20:00.000Z',
      created_by: [Object],
      last_edited_by: [Object],
      has_children: false,
      archived: false,
      type: 'bulleted_list_item',
      bulleted_list_item: [Object]
    },
    {
      object: 'block',
      id: '6f52373e-c837-4955-b941-c56a7f07460c',
      parent: [Object],
      created_time: '2022-09-19T00:20:00.000Z',
      last_edited_time: '2022-09-19T00:20:00.000Z',
      created_by: [Object],
      last_edited_by: [Object],
      has_children: false,
      archived: false,
      type: 'bulleted_list_item',
      bulleted_list_item: [Object]
    },
    {
      object: 'block',
      id: '310dbdb0-7ab7-4ada-bee7-4fae9059c868',
      parent: [Object],
      created_time: '2022-09-19T00:17:00.000Z',
      last_edited_time: '2022-09-19T00:22:00.000Z',
      created_by: [Object],
      last_edited_by: [Object],
      has_children: false,
      archived: false,
      type: 'code',
      code: {
        "type": "code",
        //...other keys excluded
        "code": {
          "rich_text": [{
            "type": "text",
            "text": {
              "content": "const a = 3"
            }
          }],
          "language": "javascript"
        }
      }
    },
    {
      object: 'block',
      id: '1a8ddf9f-1725-4e9f-83cc-ea1391220117',
      parent: [Object],
      created_time: '2022-09-19T00:21:00.000Z',
      last_edited_time: '2022-09-19T00:22:00.000Z',
      created_by: [Object],
      last_edited_by: [Object],
      has_children: false,
      archived: false,
      type: 'paragraph',
      paragraph: {
        rich_text: [
          {
            type: 'text',
            text: [Object],
            annotations: [Object],
            plain_text: 'One way to color in the shapes',
            href: null
          }
        ],
        color: 'default'
      }
    },
    {
      object: 'block',
      id: '4c9b0b91-34e4-4417-ae68-189dadebf11c',
      parent: [Object],
      created_time: '2022-09-19T00:22:00.000Z',
      last_edited_time: '2022-09-19T00:22:00.000Z',
      created_by: [Object],
      last_edited_by: [Object],
      has_children: false,
      archived: false,
      type: 'code',
      code: [Object]
    },
    {
      object: 'block',
      id: '1bae5453-9257-4804-8ee3-333a6185092d',
      parent: [Object],
      created_time: '2022-09-19T00:21:00.000Z',
      last_edited_time: '2022-09-19T00:21:00.000Z',
      created_by: [Object],
      last_edited_by: [Object],
      has_children: false,
      archived: false,
      type: 'paragraph',
      paragraph: { rich_text: [], color: 'default' }
    },
    {
      object: 'block',
      id: '3b641e7e-0d71-4309-a19e-3c1d631bc3cf',
      parent: [Object],
      created_time: '2022-09-19T00:21:00.000Z',
      last_edited_time: '2022-09-19T00:21:00.000Z',
      created_by: [Object],
      last_edited_by: [Object],
      has_children: false,
      archived: false,
      type: 'paragraph',
      paragraph: {
        rich_text: [
          {
            type: 'text',
            text: [Object],
            annotations: [Object],
            plain_text: 'Canvas',
            href: null
          }
        ],
        color: 'default'
      }
    }
  ],
  next_cursor: null,
  has_more: false,
  type: 'block',
  block: {}
};

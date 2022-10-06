// Notion Block
// https://developers.notion.com/reference/block
// notion.blocks.children.list(...options) from Notion page for Canvas - JS
const blockChildren = {
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
            plain_text: 'There are three ways to render “graphics” in the browser. The first is with HTML elements. You can do quite a lot with a div and some css, but the limitations become apparent, when you want to start doing shapes that don’t conform to the parameters of a square or circle, and good luck drawing a triangle in HTML. Another other option is SVG, Scalable Vector Graphics. It’s like a markup language to describe shapes rather than text. It can be embedded directly in an HTML document or in an img tag. ',
            href: null
          },
          {
            type: 'text',
            text: {
              content: 'Lastly',
              link: {
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes'
              }
            },
            annotations: [Object],
            plain_text: 'Lastly',
            href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes'
          },
          {
            type: 'text',
            text: { content: ', we have canvas.', link: null },
            annotations: [Object],
            plain_text: ', we have canvas.',
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


let pageObject = {
  object: 'page',
  id: '184f3a9e-62c7-4f15-871e-114bd1b256ea',
  created_time: '2022-09-18T23:55:00.000Z',
  last_edited_time: '2022-10-05T23:21:00.000Z',
  created_by: { object: 'user', id: '0ddc0653-d3bb-4ea3-a223-894597d5bffe' },
  last_edited_by: { object: 'user', id: '0ddc0653-d3bb-4ea3-a223-894597d5bffe' },
  cover: {
    type: 'external',
    external: {
      url: 'https://www.notion.so/images/page-cover/rijksmuseum_vermeer_the_milkmaid.jpg'
    }
  },
  icon: { type: 'emoji', emoji: '🎨' },
  parent: { type: 'workspace', workspace: true },
  archived: false,
  properties: { title: { id: 'title', type: 'title', title: [Array] } },
  url: 'https://www.notion.so/Canvas-JS-184f3a9e62c74f15871e114bd1b256ea'
};


let pageObjectforPost1 = {
  object: 'page',
  id: '047de651-9c93-4c38-ba46-728227a5e77a',
  created_time: '2022-10-04T20:22:00.000Z',
  last_edited_time: '2022-10-06T00:07:00.000Z',
  created_by: { object: 'user', id: '0ddc0653-d3bb-4ea3-a223-894597d5bffe' },
  last_edited_by: { object: 'user', id: '0ddc0653-d3bb-4ea3-a223-894597d5bffe' },
  cover: null,
  icon: null,
  parent: {
    type: 'database_id',
    database_id: 'a2dd6919-5e49-4b5b-9b2e-89dc1b4345e0'
  },
  archived: false,
  properties: {
    Author: {
      id: '%3D%5Ebf',
      type: 'rich_text',
      rich_text: [
        {
          type: 'text',
          text: [Object],
          annotations: [Object],
          plain_text: 'Caleb Wood',
          href: null
        }
      ]
    },
    Date: {
      id: 'HtY%7D',
      type: 'date',
      date: { start: '2022-10-05', end: null, time_zone: null }
    },
    Tags: {
      id: 'Iwvi',
      type: 'multi_select',
      multi_select: [
        {
          id: '1b7409cd-326b-426d-89f8-2088f53e6e59',
          name: 'React',
          color: 'blue'
        },
        {
          id: '06704676-7e65-4b90-bc73-6be9372c10b1',
          name: 'JavaScript',
          color: 'red'
        }
      ]
    },
    Done: { id: 'Vcgg', type: 'checkbox', checkbox: true },
    Uploaded: { id: 'Wlre', type: 'checkbox', checkbox: true },
    project_id: {
      id: '%60YFz',
      type: 'rich_text',
      rich_text: [
        {
          type: 'text',
          text: [Object],
          annotations: [Object],
          plain_text: 'associated project?',
          href: null
        }
      ]
    },
    Posts: {
      id: 'title',
      type: 'title',
      title: [
        {
          type: 'text',
          text: [Object],
          annotations: [Object],
          plain_text: '1-js-2022-10-4',
          href: null
        }
      ]
    }
  },
  url: 'https://www.notion.so/1-js-2022-10-4-047de6519c934c38ba46728227a5e77a'
};


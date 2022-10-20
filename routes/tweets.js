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
  // let response = await myTwitter.filterByHashtag(req.params.tag);
  return res.json({response: response});
});

const response = [
		{
			"id": "1579214593565421568",
			"entities": {
				"hashtags": [
					{
						"start": 234,
						"end": 248,
						"tag": "100DaysOfCode"
					},
					{
						"start": 249,
						"end": 260,
						"tag": "JavaScript"
					},
					{
						"start": 261,
						"end": 266,
						"tag": "Node"
					},
					{
						"start": 267,
						"end": 273,
						"tag": "React"
					}
				],
				"urls": [
					{
						"start": 274,
						"end": 297,
						"url": "https://t.co/QySqIfvUKs",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1579214593565421568/video/1",
						"display_url": "pic.twitter.com/QySqIfvUKs",
						"media_key": "7_1579214319517999104"
					}
				],
				"annotations": [
					{
						"start": 126,
						"end": 132,
						"probability": 0.7895,
						"type": "Product",
						"normalized_text": "Twitter"
					}
				]
			},
			"text": "Day 79: Getting faster! I was able to build out the basic tweet list functionality in a couple hours. Server gets tweets from Twitter api, Client gets them from server, React maps them to components. One day soon promise to add css 😅\n#100DaysOfCode #JavaScript #Node #React https://t.co/QySqIfvUKs",
			"edit_history_tweet_ids": [
				"1579214593565421568"
			]
		},
		{
			"id": "1578614233134403584",
			"entities": {
				"hashtags": [
					{
						"start": 222,
						"end": 236,
						"tag": "100DaysOfCode"
					},
					{
						"start": 237,
						"end": 248,
						"tag": "JavaScript"
					},
					{
						"start": 249,
						"end": 257,
						"tag": "ReactJS"
					},
					{
						"start": 258,
						"end": 265,
						"tag": "NodeJS"
					}
				],
				"urls": [
					{
						"start": 266,
						"end": 289,
						"url": "https://t.co/RnVwGSfzxu",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1578614233134403584/video/1",
						"display_url": "pic.twitter.com/RnVwGSfzxu",
						"media_key": "7_1578607957134127104"
					}
				]
			},
			"text": "Day 78: Got to fine-tune the client-side routing and frontend filtering options for the posts. They can be sorted by date, tag, or whether they have a corresponding project. Tomorrow I'll be adding a whole lot of CSS. 1/4\n#100DaysOfCode #JavaScript #ReactJS #NodeJS https://t.co/RnVwGSfzxu",
			"edit_history_tweet_ids": [
				"1578614233134403584"
			]
		},
		{
			"id": "1578255413513883648",
			"entities": {
				"hashtags": [
					{
						"start": 190,
						"end": 204,
						"tag": "100DaysOfCode"
					},
					{
						"start": 205,
						"end": 216,
						"tag": "JavaScript"
					},
					{
						"start": 217,
						"end": 225,
						"tag": "ReactJS"
					},
					{
						"start": 226,
						"end": 233,
						"tag": "NodeJS"
					}
				]
			},
			"text": "Day 77: Worked out most of the kinks in my workflow. The database, notion, server, and react all communicate now. I had a lot of fun building the class to parse the notion blocks into jsx. \n#100DaysOfCode #JavaScript #ReactJS #NodeJS",
			"edit_history_tweet_ids": [
				"1578255413513883648"
			]
		},
		{
			"id": "1577900052357447683",
			"entities": {
				"hashtags": [
					{
						"start": 39,
						"end": 46,
						"tag": "Notion"
					},
					{
						"start": 219,
						"end": 229,
						"tag": "fullstack"
					},
					{
						"start": 231,
						"end": 245,
						"tag": "100DaysOfCode"
					},
					{
						"start": 246,
						"end": 257,
						"tag": "JavaScript"
					},
					{
						"start": 258,
						"end": 266,
						"tag": "ReactJS"
					},
					{
						"start": 267,
						"end": 274,
						"tag": "NodeJS"
					}
				]
			},
			"text": "Day 76: Built a class to interact with #Notion's SDK, and built another class to interact with my database. Very productive day! Uploaded my first few records, and tomorrow I'm expecting to have this app all hooked up. #fullstack!\n#100DaysOfCode #JavaScript #ReactJS #NodeJS",
			"edit_history_tweet_ids": [
				"1577900052357447683"
			]
		},
		{
			"id": "1577443136086810624",
			"entities": {
				"hashtags": [
					{
						"start": 192,
						"end": 199,
						"tag": "Notion"
					},
					{
						"start": 216,
						"end": 230,
						"tag": "100DaysOfCode"
					},
					{
						"start": 231,
						"end": 239,
						"tag": "ReactJS"
					},
					{
						"start": 240,
						"end": 247,
						"tag": "NodeJs"
					},
					{
						"start": 248,
						"end": 259,
						"tag": "JavaScript"
					}
				]
			},
			"text": "Day 75: Finished the skeleton for my frontend, still needs styling, content, and a few features, but I have to build out the backend before I can get back to that. Started by diving deep into #Notion's NodeJS SDK! \n\n#100DaysOfCode #ReactJS #NodeJs #JavaScript",
			"edit_history_tweet_ids": [
				"1577443136086810624"
			]
		},
		{
			"id": "1577005078694674432",
			"entities": {
				"hashtags": [
					{
						"start": 223,
						"end": 237,
						"tag": "100DaysOfCode"
					},
					{
						"start": 238,
						"end": 246,
						"tag": "ReactJS"
					},
					{
						"start": 247,
						"end": 258,
						"tag": "JavaScript"
					},
					{
						"start": 259,
						"end": 271,
						"tag": "Programming"
					}
				],
				"urls": [
					{
						"start": 272,
						"end": 295,
						"url": "https://t.co/rc8CJ98jOw",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1577005078694674432/video/1",
						"display_url": "pic.twitter.com/rc8CJ98jOw",
						"media_key": "7_1577004760426696705"
					}
				]
			},
			"text": "Day 74: I wrote the bulk of my components for the About Me and Portfolio sections for v2 of my site. Really happy with how the portfolio cards are turning out. I'm using bootstrap classes, but doing the javascript myself.\n\n#100DaysOfCode #ReactJS #JavaScript #Programming https://t.co/rc8CJ98jOw",
			"edit_history_tweet_ids": [
				"1577005078694674432"
			]
		},
		{
			"id": "1576756786962440192",
			"entities": {
				"hashtags": [
					{
						"start": 165,
						"end": 176,
						"tag": "leetcode75"
					},
					{
						"start": 232,
						"end": 246,
						"tag": "100DaysOfCode"
					},
					{
						"start": 247,
						"end": 258,
						"tag": "JavaScript"
					},
					{
						"start": 259,
						"end": 271,
						"tag": "Programming"
					}
				]
			},
			"text": "Day 73: Made some progress on the personal site. I wrote the navbar and react router routes so I can click around the skeleton of a site. Also knocked out another 2 #leetcode75 challenges.\n  1) IsomorphicStrings\n  2) IsSubsequence\n\n#100DaysOfCode #JavaScript #Programming",
			"edit_history_tweet_ids": [
				"1576756786962440192"
			]
		},
		{
			"id": "1575972494636244993",
			"entities": {
				"hashtags": [
					{
						"start": 223,
						"end": 237,
						"tag": "100Daysofcode"
					},
					{
						"start": 238,
						"end": 247,
						"tag": "leetcode"
					},
					{
						"start": 248,
						"end": 259,
						"tag": "JavaScript"
					},
					{
						"start": 260,
						"end": 272,
						"tag": "programming"
					}
				]
			},
			"text": "Day 72: Getting back in the groove of daily leetcoding. It's not as fun as writing a real program, but it is a muscle you gotta keep strong 💪. I did 3 today:\n  1) Merge Sorted Linked List\n  2) Running Sum\n  3) Pivot Index\n\n#100Daysofcode #leetcode #JavaScript #programming",
			"edit_history_tweet_ids": [
				"1575972494636244993"
			]
		},
		{
			"id": "1575280856993738753",
			"entities": {
				"hashtags": [
					{
						"start": 179,
						"end": 187,
						"tag": "gitinit"
					},
					{
						"start": 189,
						"end": 203,
						"tag": "100DaysOfCode"
					},
					{
						"start": 204,
						"end": 212,
						"tag": "ReactJS"
					},
					{
						"start": 213,
						"end": 224,
						"tag": "JavaScript"
					}
				]
			},
			"text": "Day 71: Started work on V2 of my personal site. Hoping to improve the portfolio, add a React Component Library, and create a blog to publish all the notes I write on my projects. #gitinit\n\n#100DaysOfCode #ReactJS #JavaScript",
			"edit_history_tweet_ids": [
				"1575280856993738753"
			]
		},
		{
			"entities": {
				"mentions": [
					{
						"start": 26,
						"end": 36,
						"username": "TwitterSF",
						"id": "172020392"
					}
				],
				"hashtags": [
					{
						"start": 200,
						"end": 214,
						"tag": "100DaysOfCode"
					},
					{
						"start": 215,
						"end": 226,
						"tag": "JavaScript"
					},
					{
						"start": 227,
						"end": 236,
						"tag": "PixelArt"
					},
					{
						"start": 237,
						"end": 248,
						"tag": "EloquentJS"
					}
				],
				"urls": [
					{
						"start": 249,
						"end": 272,
						"url": "https://t.co/z1SfhRN8fV",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1573384018569183233/video/1",
						"display_url": "pic.twitter.com/z1SfhRN8fV",
						"media_key": "7_1573383360017498114"
					}
				]
			},
			"id": "1573384018569183233",
			"text": "Day 70: Doing day 70 from @TwitterSF! This one is cheating, because it took me much more than a day to do, and I'm still grokking. It's a JavaScript pixel art editor, with drawing tools AND hotkeys! \n#100DaysOfCode #JavaScript #PixelArt #EloquentJS https://t.co/z1SfhRN8fV",
			"edit_history_tweet_ids": [
				"1573384018569183233"
			]
		},
		{
			"id": "1572989084779573248",
			"entities": {
				"hashtags": [
					{
						"start": 221,
						"end": 235,
						"tag": "100Daysofcode"
					},
					{
						"start": 236,
						"end": 247,
						"tag": "JavaScript"
					},
					{
						"start": 248,
						"end": 260,
						"tag": "programming"
					},
					{
						"start": 261,
						"end": 266,
						"tag": "cgol"
					},
					{
						"start": 267,
						"end": 271,
						"tag": "gol"
					}
				],
				"urls": [
					{
						"start": 272,
						"end": 295,
						"url": "https://t.co/8zdgDFFudk",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1572989084779573248/video/1",
						"display_url": "pic.twitter.com/8zdgDFFudk",
						"media_key": "7_1572984479811260417"
					}
				]
			},
			"text": "Day 69: Stepped it up slightly! See any patterns? if I make the game any bigger, it starts to stutter so I'm considering optimizing to only rerender the cells that change. Read on for some background on the game of life.\n#100Daysofcode #JavaScript #programming #cgol #gol https://t.co/8zdgDFFudk",
			"edit_history_tweet_ids": [
				"1572989084779573248"
			]
		},
		{
			"id": "1572768793587494918",
			"entities": {
				"hashtags": [
					{
						"start": 190,
						"end": 204,
						"tag": "100DaysOfCode"
					},
					{
						"start": 205,
						"end": 216,
						"tag": "JavaScript"
					},
					{
						"start": 217,
						"end": 229,
						"tag": "programming"
					},
					{
						"start": 230,
						"end": 241,
						"tag": "GameOfLife"
					},
					{
						"start": 242,
						"end": 253,
						"tag": "opentowork"
					}
				],
				"urls": [
					{
						"start": 254,
						"end": 277,
						"url": "https://t.co/qn0ine1j7p",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1572768793587494918/video/1",
						"display_url": "pic.twitter.com/qn0ine1j7p",
						"media_key": "7_1572768188097777664"
					}
				]
			},
			"text": "Day 68: Developed my very own Game of Life this afternoon! It's very simple, but a stable pattern emerged even in a 10x10 grid. Next step is to automate, scale up, and then make it pretty!\n\n#100DaysOfCode #JavaScript #programming #GameOfLife #opentowork https://t.co/qn0ine1j7p",
			"edit_history_tweet_ids": [
				"1572768793587494918"
			]
		},
		{
			"id": "1571995872845766656",
			"entities": {
				"hashtags": [
					{
						"start": 155,
						"end": 169,
						"tag": "100DaysOfCode"
					},
					{
						"start": 170,
						"end": 181,
						"tag": "JavaScript"
					},
					{
						"start": 182,
						"end": 194,
						"tag": "programming"
					}
				],
				"urls": [
					{
						"start": 195,
						"end": 218,
						"url": "https://t.co/wVRUhkSKqh",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1571995872845766656/video/1",
						"display_url": "pic.twitter.com/wVRUhkSKqh",
						"media_key": "7_1571994875519991809"
					}
				],
				"annotations": [
					{
						"start": 39,
						"end": 48,
						"probability": 0.431,
						"type": "Product",
						"normalized_text": "JavaScript"
					}
				]
			},
			"text": "Day 67: Messing around with canvas and JavaScript today! Check out the video to see the difference between a tree with 7 nodes and one with over 30,000 🤯\n\n#100DaysOfCode #JavaScript #programming https://t.co/wVRUhkSKqh",
			"edit_history_tweet_ids": [
				"1571995872845766656"
			]
		},
		{
			"id": "1571228695385481216",
			"entities": {
				"hashtags": [
					{
						"start": 155,
						"end": 169,
						"tag": "100DaysOfCode"
					},
					{
						"start": 170,
						"end": 181,
						"tag": "JavaScript"
					},
					{
						"start": 182,
						"end": 194,
						"tag": "programming"
					},
					{
						"start": 195,
						"end": 204,
						"tag": "webgames"
					},
					{
						"start": 205,
						"end": 212,
						"tag": "webdev"
					},
					{
						"start": 213,
						"end": 226,
						"tag": "webdeveloper"
					}
				],
				"urls": [
					{
						"start": 227,
						"end": 250,
						"url": "https://t.co/STvtMFbKWv",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1571228695385481216/video/1",
						"display_url": "pic.twitter.com/STvtMFbKWv",
						"media_key": "7_1571227908815073280"
					}
				]
			},
			"text": "Day 66: I added 2 new behaviors to the baddies! \n1) They won't chase you until you've gotten close.\n2) They're removed from state when they hit lava.\n1/2\n\n#100DaysOfCode #JavaScript #programming #webgames #webdev #webdeveloper https://t.co/STvtMFbKWv",
			"edit_history_tweet_ids": [
				"1571228695385481216"
			]
		},
		{
			"id": "1570876092084551682",
			"entities": {
				"hashtags": [
					{
						"start": 65,
						"end": 79,
						"tag": "100DaysofCode"
					}
				],
				"urls": [
					{
						"start": 80,
						"end": 103,
						"url": "https://t.co/faw6QF7zn3",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1570876092084551682/photo/1",
						"display_url": "pic.twitter.com/faw6QF7zn3",
						"media_key": "16_1570876085956677633"
					}
				]
			},
			"text": "Day 65: I had my first FAANG interview today. It was... great...\n#100DaysofCode https://t.co/faw6QF7zn3",
			"edit_history_tweet_ids": [
				"1570876092084551682"
			]
		},
		{
			"id": "1570193632313090051",
			"entities": {
				"hashtags": [
					{
						"start": 29,
						"end": 38,
						"tag": "LeetCode"
					},
					{
						"start": 215,
						"end": 229,
						"tag": "100DaysOfCode"
					},
					{
						"start": 230,
						"end": 241,
						"tag": "JavaScript"
					},
					{
						"start": 242,
						"end": 254,
						"tag": "Programming"
					},
					{
						"start": 255,
						"end": 271,
						"tag": "100daysofcoding"
					},
					{
						"start": 272,
						"end": 279,
						"tag": "webdev"
					}
				]
			},
			"text": "Day 64: Worked on a few more #LeetCode challenges today! I figured out a nice MinStack class that runs in constant time, O(1). One of those solutions where the answer is much simpler than it seems at first glance.\n\n#100DaysOfCode #JavaScript #Programming #100daysofcoding #webdev",
			"edit_history_tweet_ids": [
				"1570193632313090051"
			]
		},
		{
			"id": "1569893762733842433",
			"entities": {
				"hashtags": [
					{
						"start": 23,
						"end": 32,
						"tag": "Dijkstra"
					},
					{
						"start": 127,
						"end": 141,
						"tag": "PriorityQueue"
					},
					{
						"start": 151,
						"end": 159,
						"tag": "MinHeap"
					},
					{
						"start": 168,
						"end": 174,
						"tag": "Graph"
					},
					{
						"start": 198,
						"end": 212,
						"tag": "100DaysOfCode"
					},
					{
						"start": 213,
						"end": 224,
						"tag": "Javascript"
					},
					{
						"start": 225,
						"end": 237,
						"tag": "programming"
					},
					{
						"start": 238,
						"end": 248,
						"tag": "fullstack"
					}
				]
			},
			"text": "Day 63: Got to explore #Dijkstra's algorithm inside and out today! To write the algorithm I first had to write a Node class, a #PriorityQueue (type of #MinHeap), and a #Graph with weighted edges. \n\n#100DaysOfCode #Javascript #programming #fullstack",
			"edit_history_tweet_ids": [
				"1569893762733842433"
			]
		},
		{
			"id": "1569562657526812672",
			"entities": {
				"hashtags": [
					{
						"start": 77,
						"end": 88,
						"tag": "JavaScript"
					},
					{
						"start": 264,
						"end": 278,
						"tag": "100DaysOfCode"
					}
				],
				"urls": [
					{
						"start": 279,
						"end": 302,
						"url": "https://t.co/D5QoQvZEv8",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1569562657526812672/photo/1",
						"display_url": "pic.twitter.com/D5QoQvZEv8",
						"media_key": "3_1569561525358297089"
					}
				]
			},
			"text": "Day 62: I'm on a data structures streak! Today I wrote a hash table class in #JavaScript. It's basically just a really crappy object/map. This is the super simple hashing function I used to hash my keys. It uses a prime number to help reduce collisions b/c math 🤖\n#100DaysOfCode https://t.co/D5QoQvZEv8",
			"edit_history_tweet_ids": [
				"1569562657526812672"
			]
		},
		{
			"id": "1569067436057722882",
			"entities": {
				"hashtags": [
					{
						"start": 261,
						"end": 275,
						"tag": "100DaysOfCode"
					}
				],
				"urls": [
					{
						"start": 276,
						"end": 299,
						"url": "https://t.co/nsU08H2RM8",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1569067436057722882/photo/1",
						"display_url": "pic.twitter.com/nsU08H2RM8",
						"media_key": "3_1569063895058501632"
					}
				]
			},
			"text": "Day 61: So I finally got around to studying max heaps late last night, and I decided to figure out just how ordered this partially ordered data structure is. Being a programmer, I generated 10k random 100 node heaps to compare against their sorted counterparts\n#100DaysOfCode https://t.co/nsU08H2RM8",
			"edit_history_tweet_ids": [
				"1569067436057722882"
			]
		},
		{
			"id": "1568780443956441088",
			"entities": {
				"hashtags": [
					{
						"start": 105,
						"end": 114,
						"tag": "LeetCode"
					},
					{
						"start": 214,
						"end": 228,
						"tag": "100DaysOfCode"
					},
					{
						"start": 229,
						"end": 240,
						"tag": "JavaScript"
					},
					{
						"start": 241,
						"end": 253,
						"tag": "programming"
					}
				],
				"urls": [
					{
						"start": 254,
						"end": 277,
						"url": "https://t.co/gaaHUCjr7x",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1568780443956441088/photo/1",
						"display_url": "pic.twitter.com/gaaHUCjr7x",
						"media_key": "3_1568780227530338304"
					}
				]
			},
			"text": "Day 60: Continued the data structures review with Binary Search Trees and Traversal today, then did some #LeetCode. I wrote a pretty lame intToRoman implementation, then discovered this absolute gem of a function.\n#100DaysOfCode #JavaScript #programming https://t.co/gaaHUCjr7x",
			"edit_history_tweet_ids": [
				"1568780443956441088"
			]
		},
		{
			"id": "1568374137290395649",
			"entities": {
				"hashtags": [
					{
						"start": 104,
						"end": 113,
						"tag": "LeetCode"
					},
					{
						"start": 181,
						"end": 195,
						"tag": "100DaysOfCode"
					},
					{
						"start": 196,
						"end": 207,
						"tag": "JavaScript"
					},
					{
						"start": 208,
						"end": 220,
						"tag": "programming"
					}
				],
				"urls": [
					{
						"start": 221,
						"end": 244,
						"url": "https://t.co/74Ss0kvwF6",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1568374137290395649/photo/1",
						"display_url": "pic.twitter.com/74Ss0kvwF6",
						"media_key": "3_1568373404226699264"
					}
				]
			},
			"text": "Day 59: Kept up with the data structures review, by writing Queue and Stack classes, then knocked out 4 #LeetCode problems. Used a set and sliding window approach to get this one.\n\n#100DaysOfCode #JavaScript #programming https://t.co/74Ss0kvwF6",
			"edit_history_tweet_ids": [
				"1568374137290395649"
			]
		},
		{
			"id": "1568038845530386432",
			"entities": {
				"hashtags": [
					{
						"start": 212,
						"end": 235,
						"tag": "100daysofcodechallenge"
					},
					{
						"start": 236,
						"end": 250,
						"tag": "100DaysOfCode"
					},
					{
						"start": 251,
						"end": 262,
						"tag": "JavaScript"
					},
					{
						"start": 263,
						"end": 275,
						"tag": "programming"
					},
					{
						"start": 276,
						"end": 280,
						"tag": "DSA"
					}
				],
				"urls": [
					{
						"start": 281,
						"end": 304,
						"url": "https://t.co/PE12c4CL2c",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1568038845530386432/photo/1",
						"display_url": "pic.twitter.com/PE12c4CL2c",
						"media_key": "3_1568038580030951426"
					}
				]
			},
			"text": "Day 58: Worked out an entire Doubly linked list class today then did some practice white-boarding with a friend. It was tough! Here's the solution we came up with to generate n number of valid \"()\" combinations,\n#100daysofcodechallenge #100DaysOfCode #JavaScript #programming #DSA https://t.co/PE12c4CL2c",
			"edit_history_tweet_ids": [
				"1568038845530386432"
			]
		},
		{
			"id": "1567683206065037313",
			"entities": {
				"hashtags": [
					{
						"start": 235,
						"end": 249,
						"tag": "100DaysOfCode"
					},
					{
						"start": 250,
						"end": 261,
						"tag": "JavaScript"
					},
					{
						"start": 262,
						"end": 274,
						"tag": "Programming"
					},
					{
						"start": 275,
						"end": 280,
						"tag": "code"
					}
				]
			},
			"text": "Day 57: I'm revisiting data structures this week so today I completed a full linked list class including methods for push, pop, shift, unshift, get, set, insert, remove, and... reverse! Then ended the day with 3 HackerRank challenges.\n#100DaysOfCode #JavaScript #Programming #code",
			"edit_history_tweet_ids": [
				"1567683206065037313"
			]
		},
		{
			"id": "1567332003305123841",
			"entities": {
				"hashtags": [
					{
						"start": 28,
						"end": 38,
						"tag": "RadixSort"
					},
					{
						"start": 66,
						"end": 71,
						"tag": "algo"
					},
					{
						"start": 245,
						"end": 259,
						"tag": "100DaysOfCode"
					},
					{
						"start": 261,
						"end": 272,
						"tag": "JavaScript"
					}
				],
				"urls": [
					{
						"start": 273,
						"end": 296,
						"url": "https://t.co/MbGEN8y5Mu",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1567332003305123841/photo/1",
						"display_url": "pic.twitter.com/MbGEN8y5Mu",
						"media_key": "3_1567331904122417152"
					}
				]
			},
			"text": "Day 56: Took a deep dive on #RadixSort today. Such an interesting #algo! It never compares items. Instead it repeatedly places them into buckets based on the digit at a given index. This allows it to sort numbers (and only numbers) in O(n * m).\n#100DaysOfCode  #JavaScript https://t.co/MbGEN8y5Mu",
			"edit_history_tweet_ids": [
				"1567332003305123841"
			]
		},
		{
			"id": "1565801909163888641",
			"entities": {
				"hashtags": [
					{
						"start": 17,
						"end": 29,
						"tag": "DroidConNYC"
					},
					{
						"start": 204,
						"end": 218,
						"tag": "100DaysOfCode"
					},
					{
						"start": 219,
						"end": 230,
						"tag": "JavaScript"
					},
					{
						"start": 231,
						"end": 246,
						"tag": "webdevelopment"
					},
					{
						"start": 247,
						"end": 259,
						"tag": "programming"
					}
				],
				"urls": [
					{
						"start": 260,
						"end": 283,
						"url": "https://t.co/ZQAhFzIB9u",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1565801909163888641/video/1",
						"display_url": "pic.twitter.com/ZQAhFzIB9u",
						"media_key": "7_1565800894666506240"
					}
				]
			},
			"text": "Day 55: Attended #DroidConNYC  this morning, but  even more exciting than that... I added a monster to the game!! Right now it only chases you, it cant even fall into the lava pit. Still, exciting!!  🧌👹\n\n#100DaysOfCode #JavaScript #webdevelopment #programming https://t.co/ZQAhFzIB9u",
			"edit_history_tweet_ids": [
				"1565801909163888641"
			]
		},
		{
			"id": "1565196849040048128",
			"entities": {
				"hashtags": [
					{
						"start": 219,
						"end": 233,
						"tag": "100DaysOfCode"
					},
					{
						"start": 235,
						"end": 246,
						"tag": "HackerRank"
					},
					{
						"start": 247,
						"end": 265,
						"tag": "arrayManipulation"
					},
					{
						"start": 266,
						"end": 277,
						"tag": "JavaScript"
					}
				],
				"urls": [
					{
						"start": 278,
						"end": 301,
						"url": "https://t.co/LJAxHYZo9a",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1565196849040048128/photo/1",
						"display_url": "pic.twitter.com/LJAxHYZo9a",
						"media_key": "3_1565196485939036162"
					}
				]
			},
			"text": "Day 54: Thought I'd come up with a nice solution to this one, but half the test cases need the algo to run in O(n)! Anyone here encountered this one yet? I'm going to have to put on my math hat 🧑‍🔬 if I can find it...\n\n#100DaysOfCode  #HackerRank #arrayManipulation #JavaScript https://t.co/LJAxHYZo9a",
			"edit_history_tweet_ids": [
				"1565196849040048128"
			]
		},
		{
			"id": "1564731883878985728",
			"entities": {
				"hashtags": [
					{
						"start": 221,
						"end": 235,
						"tag": "100DaysOfCode"
					},
					{
						"start": 236,
						"end": 247,
						"tag": "JavaScript"
					},
					{
						"start": 248,
						"end": 259,
						"tag": "BubbleSort"
					},
					{
						"start": 260,
						"end": 264,
						"tag": "DSA"
					},
					{
						"start": 265,
						"end": 277,
						"tag": "programming"
					}
				],
				"urls": [
					{
						"start": 278,
						"end": 301,
						"url": "https://t.co/CMuFh5Bgcg",
						"expanded_url": "https://twitter.com/CalebtheWood/status/1564731883878985728/photo/1",
						"display_url": "pic.twitter.com/CMuFh5Bgcg",
						"media_key": "3_1564731257350606848"
					}
				]
			},
			"text": "Day 53: Studying sorting algos today! I have a soft spot for BubbleSort. It's not fancy, or especially clever, but it'll sort just about anything, in quadratic time of course. Here's a simple implementation for numbers:\n\n#100DaysOfCode #JavaScript #BubbleSort #DSA #programming https://t.co/CMuFh5Bgcg",
			"edit_history_tweet_ids": [
				"1564731883878985728"
			]
		},
		{
			"id": "1564453238127992832",
			"entities": {
				"hashtags": [
					{
						"start": 246,
						"end": 260,
						"tag": "100DaysOfCode"
					},
					{
						"start": 261,
						"end": 272,
						"tag": "JavaScript"
					},
					{
						"start": 273,
						"end": 280,
						"tag": "webdev"
					}
				]
			},
			"text": "Day 52: I completed 4 coding challenge algos today, and I even got to use a fun for loop array deconstruction in one. For the uninitiated, behold\n\nconst items = [[1,2],[3,4],[5,6]];\nfor (let [a,b] of items) { console.log(a + b) }\n// 3\n// 7\n// 11\n#100DaysOfCode #JavaScript #webdev",
			"edit_history_tweet_ids": [
				"1564453238127992832"
			]
		}
	]

module.exports = router;
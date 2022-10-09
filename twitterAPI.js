const axios = require('axios');
const TWITTER_TOKEN = require("./config");

/**
 * Functionality for Getting my 100 Days of Code Tweets
 *
 * TODO: look into adding pagination so that I'm only fetching
 * 20 or so tweets at a time. Right now tweet count defaults to 50.
*/
class TwitterAPI {
  constructor(user = 1398406010) {
    this.userId = user;
    this.baseUrl = "https://api.twitter.com/2";
    // Tags idea may be lame... the thought is to create a few categories,
    // that way the blog menu could be used to get different groups of pre-set
    // texts... I'll start it this way and see how it goes.
    this.tags = {
      hundredDays: [
        "100DaysOfCode", "100daysofcode", "100Daysofcode", "100DaysofCode"
      ],
      javascript: [
        "JavaScript", "javascript", "Javascript"
      ]
    }
  }

  /** Gets Tweets by User, excludes replies and retweets.
   * Accept tweetcount, but defaults to 50 tweets.
   *  */
  async getMyTweets(tweetCount = 50) {
    let options = {
      method: 'GET',
      url: `${this.baseUrl}/users/${this.userId}/tweets`,
      params: {
        exclude: 'retweets,replies',
        'tweet.fields': 'entities',
        max_results: tweetCount
      },
      headers: {
        cookie: 'guest_id_marketing=v1%253A166527832151739869; guest_id_ads=v1%253A166527832151739869; personalization_id=%22v1_Mmk0yjEwXkdAVaHCDiDi1g%3D%3D%22; guest_id=v1%253A166527832151739869',
        Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAIbbhwEAAAAAnljJiQ8nQ8UvcIygQMQcPFWU36Y%3DzbYibHAkB079g0CAeL90GSQ6Ix6ki6SZcU1vdi4e3T2dGxGwAp`
      }
    };
    const { data } = await axios.request(options);
    console.log("DATA ".yellow, data);
    return data.data;
  }

  /* I haven't found a way to filter this on the twitter server
  using params in the get request, but that would be preferred.*/
  async filterByHashtag(tag) {
    if (!tag in this.tags) return "Hashtag not present."
    let tagList = new Set(this.tags[tag]);

    let tweetList = await this.getMyTweets();

    console.log("TWEET LIST ".yellow,tweetList)
    const filteredTweets = [];
    for (let tweet of tweetList) {
      if ("entities" in tweet && "hashtags" in tweet.entities) {
          for (let { tag } of tweet.entities.hashtags) {
            if (tagList.has(tag)) {
              filteredTweets.push(tweet);
              break;
            }
        }
      }
    }
    return filteredTweets;
  }

}

// async function thing() {
//   const myTwitter = new TwitterAPI();
//   let hundredDaysTweets = await myTwitter.filterByHashtag("hundredDays");
//   console.log(hundredDaysTweets);
// }

module.exports = TwitterAPI;
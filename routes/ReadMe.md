# Routes ReadMe

## Blog Routes


## Metrics

Considering adding JWTs to assign a unique value to site visits so I can track # of unique visitors, and pages visited by each visitor. This would require some thought about how much data I want to prepare for.
1. Simplest would be to check local storage on load. I could piggy back sending the token with the response sending blogs/tweets, etc. If no token, set token. Then whenever metrics sends back page data I could send back page visits with the id.
2. Could timestamp everything to create session data, ugh at that point I have to start really planning out my data though. That could become unwiedly very fast.
3. start small
 - on initial mount, check for token
    - if token, then put token in state in metrics comp.
    - if no token, set token, then put it in state
    - aside: I'll check my own token, I can choose to exclude it when I generate metric data to display)
    - on page visits, metric sends data back as:
      - { tokenId: pageVisited }

 - Meanwhile Back on Server...
  - metrics route receives { tokenId: pageVisited }
  - db model for metrics
   - _id: objID,
    uuid: 123456,
    sessions: [
      {
        date: today,
        routes ["/about", "home", etc...]
      }
    ]

  *tokenId should be the unique index*
  *added benefit that they'll be inserted in order!*
  - research upserting into a list/array in mongo




### Notes
- Using blog/routes for posterity. I think posts may be too generic a term. There may be other types of posts I'd like to add in the future and blogPosts seems to ugly. Subject to change...

- Needs more robust error handling and bug testing. It works now but anything unpredictable will break it pretty easily.

- Needs Querying endpoints to allow for front end querying.

/** Returns Today's date as 'YYYY-MM-DD' */
function yearDateMonth() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate() + 1;
  return `${year}-${month}-${day}`;
}

const today = yearDateMonth();

/** parseResponse
 * 
 * @param message - body of text received from twilio message
 * @returns - An array of objects where the key
 *
 * Function will parse message body
 * - check for commands
 *    - start,stop,help,totals,inspo
 * - check for how many numbers
 *    - if more than 4, send followup, only 1-4 options allowed
 *    - otherwise each option represents 60/n time
 *      - update sums stored in state with minutes 15,30,45, or 60
 *      - if subcategories declared, update those
 *        - 1 legends 2 pith === legends += 30 min, pith += 30 min
 *          edge case: 1 legends 22 pith would be 40 min pith, 20 min legends - prevents 2 pith 2 pith.
 *          in general I want to avoid getting too detailed, but this seems like an easy optimization.
 */
function parseResponse(message) {
  /** Enum-like config object that determines the value of each response value */
  const commands = {
    0: 'wasted',
    1: 'work',
    2: 'projects',
    3: 'learning',
    4: 'exercise',
    5: 'job apps',
    6: 'hobbies',
    7: 'other (not wasted)',
    8: null,
    9: null
  };

  const output = {
    command: null,
    times: [
      { minutes: 20, category: 'wasted', subCategory: null },
      { minutes: 20, category: 'working', subCategory: 'legends' },
      { minutes: 20, category: 'hobbies', subCategory: 'baking' },
    ]
  };

  // imaginary state
  const data = {
    wasted: {
      total: 10
    },
    hobbies: {
      total: 12,
      baking: 6,
      guitar: 4,
    }
  }
}

module.exports = { today };
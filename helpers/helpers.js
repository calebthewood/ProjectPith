
/** Returns Today's date as 'YYYY-MM-DD' */
function yearDateMonth() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  return `${year}-${month}-${day}`;
}
const today = yearDateMonth();

module.exports = { today };
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];

  const pair = (str, opening, closing) => {
    if (opening === 0 && closing === 0) {
      ans.push(str);
      return;
    }

    if (opening > closing) return;
    if (opening > 0) pair(str + "(", opening - 1, closing);
    if (closing > 0) pair(str + ")", opening, closing - 1);
  };
  pair("(", n - 1, n);

  return ans;
};

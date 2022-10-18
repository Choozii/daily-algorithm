/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // s의 글자들로 생성 가능한 회문의 최대 길이 리턴(대소문자 구별함)
  const chars = {};
  let length = 0;
  for (let el of s) {
    chars[el] = chars[el] + 1 || 1;
  }

  for (let el of Object.keys(chars)) {
    if (chars[el] % 2 === 0) {
      length += chars[el];
      delete chars[el];
    } else {
      if (chars[el] > 2) {
        const divided = Math.floor(chars[el] / 2) * 2;
        length += divided;
        chars[el] -= divided;
      }
    }
  }

  if (Object.keys(chars).length) {
    length++;
  }

  return length;
};

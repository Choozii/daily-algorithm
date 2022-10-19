/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length === 1) return false;

  let repeat = "";
  for (let i = 0; i < s.length / 2; i++) {
    repeat += s[i];
    if (s.length % repeat.length !== 0) {
      continue;
    } else {
      let str = "";
      for (let j = 0; j < s.length / repeat.length; j++) {
        str += repeat;
      }
      if (str === s) return true;
    }
  }
  return false;
};

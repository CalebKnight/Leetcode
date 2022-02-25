function nextLetter(string, count, index, banned) {
  if (index === string.length) {
    // console.log(banned);
    return count;
  } else if (banned.includes(string[index])) {
    // console.log(count, string[index], banned, index);
    return count;
  } else {
    banned.push(string[index]);

    return nextLetter(string, count + 1, index + 1, banned);
  }
}

var lengthOfLongestSubstring = function (s) {
  var highestSubstring = 0;
  for (let i = 0; i < s.length; i++) {
    nextLetter(s, 0, i, []);
    var substringCount = nextLetter(s, 0, i, []);
    console.log(substringCount);
    if (substringCount > highestSubstring) {
      highestSubstring = substringCount;
    }
  }
  console.log(highestSubstring);
};
var s = " ";
lengthOfLongestSubstring(s);

function longestSubstring(string) {
  var max = 0,
    largestStr = "",
    newstr = "",
    i,
    char,
    pos;
  for (i = 0; i < string.length; i++) {
    char = string[i];
    pos = newstr.includes(char);
    if (pos !== false) {
      newstr = newstr.substr(pos + 1);
    }

    newstr += char;

    if (max<newstr.length) {
        max=newstr.length;
        largestStr = newstr;
    }
  }
  console.log(largestStr);
}

longestSubstring("helho");
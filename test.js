const a = 'aabbaccc';
// const b = 'ababcdcdababcdcd';
// const c = 'abcabcdede';
// const d = 'abcabcabcabcdededededede';
// const e = 'xababcdcdababcdcd';

function solution(s) {
  const string = [];
  for (i = 1; i <= s.length; i++) {
    let b = 0;
    let substring = [];
    for (j = 1; j <= Math.ceil(s.length / i); j++) {
      substring.push(s.slice(b, j * i));
      b = j * i;
    }
    string.push(substring);
  }
  let min = string[s.length - 1].join('').length;
  for (i = 0; i < string.length; i++) {
    let c = 1;
    for (j = 0; j < string[i].length; j++) {
      if (string[i][j] == string[i][j + 1]) {
        c = c + 1;
        string[i].splice(j, 1);
        j = j - 1;
      } else {
        string[i].splice(j, 0, c);
        c = 1;
        j = j + 1;
      }
    }
    let filtered = string[i].filter((element) => element !== 1);
    let filteredLength = filtered.join('').length;
    if (min >= filteredLength) {
      min = filteredLength;
    }
  }
  let answer = min;
  return answer;
}

solution(a);

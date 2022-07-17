const a = 'aabbaccc';
// const b = 'ababcdcdababcdcd';
// const c = 'abcabcdede';
// const d = 'abcabcabcabcdededededede';
// const e = 'xababcdcdababcdcd';

function solution(s) {
  //이 갯수로 잘랐을 때 반환되는 값을 따로 저장하고/s.length까지
  //나눠서 배열에 저장하고 그 배열의 index로 json.stringify로 구분
  //전체길이에서 겹치는게 생기면 그 길이만큼을 빼주는거야
  const string = [];
  let a = 0;
  for (i = 1; i <= s.length; i++) {
    s.slice(a, i + 1);
    a = i;
  }

  //이것을 정규표현식으로 해서 주어진 문자열에서 비교
  let answer = 0;
  return answer;
}

// solution(a);

const string = [];
for (i = 1; i <= a.length; i++) {
  let b = 0;
  let substring = [];
  for (j = 1; j <= Math.ceil(a.length / i); j++) {
    substring.push(a.slice(b, j * i));
    b = j * i;
  }
  string.push(substring);
}

let c = 1;
for (i = 0; i < string[0].length; i++) {
  if (string[0][i] == string[0][i + 1]) {
    c = c + 1;
    string[0].splice(i, 1);
    i = i - 1;
  } else {
    string[0].splice(i, 0, c);
    c = 1;
    i = i + 1;
  }
}
let filtered = string[0].filter((element) => element !== 1);
console.log(filtered.join('').length);

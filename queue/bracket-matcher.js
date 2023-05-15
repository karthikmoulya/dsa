const bracketMatcher = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push('(');
    } else if (str[i] === ')') {
      if (stack.length === 0) {
        return 0;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
};

console.log(bracketMatcher('(coder)(byte))'));
console.log(bracketMatcher('(c(coder))b(yte)'));

//Input: '(coder)(byte))'
//Output: 0

//Input: '(c(coder))b(yte)'
//Output: 1

const in1 = { a: 10, b: 32, c: 1, d: 2, x: 2, z: 1, y: 32 };
const in2 = { y: 32, a: 10, b: 6, d: 2, f: 100 };

const comapre = (in1, in2) => {
  const compObj = Object.keys(in1).length > Object.keys(in2) ? in1 : in2;
  let obj = {};
  for (let i in compObj) {
    if (in1[i] == in2[i]) {
      obj[i] = in1[i];
    }
  }
  return obj;
};

console.log(comapre(in1, in2));

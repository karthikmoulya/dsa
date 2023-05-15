const permutations = (elements) => {
  if (elements.length === 0) return [[]];
  const firstEl = elements[0];
  const rest = elements.slice(1);

  const permsWithoutFirst = permutations(rest);

  const allPermutations = [];

  permsWithoutFirst.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
      allPermutations.push(permWithFirst);
    }
  });

  return allPermutations;
};

//Time => O(n!)
//Space => O(n*n) =. O(n^2), where n is the length of the input array.

console.log(permutations(['a', 'b', 'c']));

// [
//     [c,b,a],
//     [b,c,a],
//     [b,a,c],
//     [c,a,b],
//     [a,c,b],
//     [a,b,c]
// ]

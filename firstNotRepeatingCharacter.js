// I: string
// O: character(string)
// C: O(n)
// E: return first unique character

function firstNotRepeatingCharacter(s) {

  // store chars in obj; initialize array of chars that appear once
  let storage = {1: []};

  // first index of storage[1] containing a unique character
  let resultIndex = 0;

  // next index of storage[1] to be filled
  let currentIndex = 0;

  // iterate through s
  for (char of s) {
    // lookup char in obj
    if (storage[char]) {
      // if second instance of this character and char is stored at result index
      if (storage[char][0] === 1) {
        // increment result index
        resultIndex++;
      }
      // increment # of instances
      storage[char][0]++;
      storage[1][storage[char][1]] = null;
    }

    if (!storage[char]) {
      // store # of instances and index of char in storage[1]
      storage[char] = [1, currentIndex];
      storage[1].push(char);
      // increment next index in storage[1]
      currentIndex++;
    }

  }

  console.log(resultIndex, storage[1].length)

  if (resultIndex === storage[1].length) {
    return '_';
  }

  for (var i = 0; i < storage[1].length; i++) {
    if (storage[1][i]) {
      return storage[1][i];
    }
  }

  return storage[1][resultIndex];



}

console.log(firstNotRepeatingCharacter('babacabad'))
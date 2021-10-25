/**
 * Levenshtein distance
 * 
 * In information theory and computer science, 
 * the Levenshtein distance is a metric for measuring the amount of difference 
 * between two sequences (i.e. an edit distance). 
 * The Levenshtein distance between two strings is defined as 
 * the minimum number of edits needed to transform one string into the other, 
 * with the allowable edit operations being 
 * insertion, deletion, or substitution of a single character.
 * 
 * Example:

The Levenshtein distance between "kitten" and "sitting" is 3, since the following three edits change one into the other, and there isn't a way to do it with fewer than three edits:

kitten   sitten    (substitution of 'k' with 's')
sitten   sittin    (substitution of 'e' with 'i')
sittin   sitting    (insert 'g' at the end).
The Levenshtein distance between "rosettacode", "raisethysword" is 8.

The distance between two strings is same as that when both strings are reversed.

Write a function that returns the Levenshtein distance between two strings given as parameters.

*/
function levenshtein(stringA, stringB) {
  let count = 0;
  let transformedWord = "";
  console.log(`string A: ${stringA}`);
  console.log(`string B: ${stringB}`);

  for (let index = 0; index < Number(stringB.length); index++) {
    // console.log(`${stringB.charAt(index)}`);

    if (stringB.charAt(index) === stringA.charAt(index)) {
      transformedWord.concat(stringB.charAt(index));
      console.log(transformedWord);
    } else {
      count += 1;
    }
  }
  console.log(transformedWord);
  console.log(typeof transformedWord);
  console.log(count);
  return count;
}

// levenshtein("mist", "dist")
// levenshtein("kitten", "sitting");

// levenshtein("stop", "tops");

levenshtein("rosettacode", "raisethysword");
// levenshtein("mississippi", "swiss miss");
// levenshtein("tier", "tor");

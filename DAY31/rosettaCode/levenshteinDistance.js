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

source:
 https://medium.com/@ethannam/understanding-the-levenshtein-distance-equation-for-beginners-c4285a5604f0

*/
/*
function levenshtein(stringA, stringB) {
  let count = 0;
  let transformedWord = "";
  console.log(`string A: ${stringA}`);
  console.log(`string B: ${stringB}`);
  
  for (let index = 0; index < Number(stringB.length); index++) {
    // console.log(`${stringB.charAt(index)}`);

    if (stringB.charAt(index) === stringA.charAt(index)) {
      console.log(stringB.charAt(index));
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

*/
function levenshtein(str1, str2) {
  var len1 = str1.length;
  var len2 = str2.length;
  var matrix = [];
  // fill the first row of the matrix
  for (var i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  // fill the first column of the matrix
  for (var j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }
  // fill the rest of the matrix
  for (var i = 1; i <= len1; i++) {
    for (var j = 1; j <= len2; j++) {
      if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1
          )
        ); // deletion
      }
    }
  }
  return matrix[len1][len2];
}
// levenshtein("mist", "dist")
// levenshtein("kitten", "sitting");

// levenshtein("stop", "tops");

levenshtein("rosettacode", "raisethysword");
// levenshtein("mississippi", "swiss miss");
// levenshtein("tier", "tor");

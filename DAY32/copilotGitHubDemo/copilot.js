// function to print the current date and time  to the console
function printDateTime() {
    var currentDate = new Date();
    console.log("The current date and time is: " + currentDate);
}   

printDateTime();

// function to get levenshtein distance between two strings
function getLevenshteinDistance(str1, str2) {
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
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                                        Math.min(matrix[i][j - 1] + 1, // insertion
                                                 matrix[i - 1][j] + 1)); // deletion
            }
        }
    }
    return matrix[len1][len2];
}
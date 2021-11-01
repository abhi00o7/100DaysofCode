// kadane's algorithm
function kadanesAlgorithm(arr) {
    let max = arr[0];
    let maxEndingHere = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        max = Math.max(max, maxEndingHere);
    }
    return max;
}
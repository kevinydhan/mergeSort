const merge = function(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    if (i < arr1.length) result.push(...arr1.slice(i));
    if (j < arr2.length) result.push(...arr2.slice(j));

    return result;
}

const mergeSort = function(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

// arr1 = [1,3,5,7];
// arr2 = [2,4,6,8];

// i = 4
// j = 3

// result = [1, 2, 3, 4, 5, 6, 7, 8];
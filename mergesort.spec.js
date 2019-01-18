describe('merge function', function() {
    let arr1 = [1,3,5,7];
    let arr2 = [2,4,6,8];
    let result = [1, 2, 3, 4, 5, 6, 7, 8];

    it('is a function', function() {
        expect(typeof merge).toBe('function');
    });

    it('returns an array', function(){
        expect(Array.isArray(merge(arr1, arr2))).toBe(true);
    });

    it('it merges two sorted arrays', function() {
        expect(merge(arr1, arr2)).toEqual(result);
    });
});

describe('mergeSort function', function(){
    let arr;
    const result = [1,2,3,4,5,6,7,8];
    beforeEach(() => {
        arr = [1,3,5,7,2,4,6,8];
    });

    it('is a function', function(){
        expect(typeof mergeSort).toBe('function');
    });

    it('returns an array', function(){
        expect(Array.isArray(mergeSort(arr))).toBe(true);
    });

    it('is able to sort an unsorted array', function(){
        expect(mergeSort(arr)).toEqual(result);
    });
});
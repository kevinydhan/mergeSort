describe('mergeSort function', function(){
    it('is able to sort an unsorted array', function(){
        let arr = [1,3,5,7,2,4,6,8];
        let result = [1,2,3,4,5,6,7,8];
        expect( mergeSort(arr) ).toEqual( result );
    });
});
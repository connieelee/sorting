describe('Bubble Sort', function(){
	it('handles an empty array', function(){
		expect(bubbleSort([]).sortedArr).toEqual([]);
	});

	it('handles array size 2', function() {
  		expect(bubbleSort([2,1]).sortedArr).toEqual([1,2]);
  	});

  	it ('sorts a larger mixed array', function() {
		var test_array = [4,3,6,1,10,7];
		expect(bubbleSort(test_array).sortedArr).toEqual([1,3,4,6,7,10]);
	});
});
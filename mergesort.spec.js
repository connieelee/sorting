describe('Split Array function', function() {
	it('is able to handle an empty array', function() {
  		var test_array = [];
   		expect(split(test_array)).toEqual([[],[]]);
  	});

  	it('is able to split an odd-sized array into two halves', function() {
  		var test_array = [1,2,3,4,5];
    	expect(split(test_array)[0]).toEqual([1,2]);
    	expect(split(test_array)[1]).toEqual([3,4,5]);
    });

  	it('is able to split an even-sized array into two halves', function() {
  		var test_array = [1,2,3,4];
    	expect(split(test_array)[0]).toEqual([1,2]);
    	expect(split(test_array)[1]).toEqual([3,4]);
    });
});

describe('Merge Arrays Function', function(){
	it('can handle empty arrays and returns an array', function(){
		expect(Array.isArray(merge([], []))).toEqual(true);
	});

	it('is able to merge two simple sorted arrays into one sorted array', function(){
		var test_array1 = [1,2];
		var test_array2 = [3,4];
		expect(merge(test_array1, test_array2)).toEqual([1,2,3,4]);
	});

	it('works when first array\'s values are larger', function(){
		var test_array1 = [3,4];
		var test_array2 = [5];
		expect(merge(test_array1, test_array2)).toEqual([3,4,5]);
	});

	it('can handle duplicate values', function(){
		var test_array1 = [1,2,3,4];
		var test_array2 = [3,4,5,6];
		expect(merge(test_array1, test_array2)).toEqual([1,2,3,3,4,4,5,6]);
	});
});

describe('Merge Sort', function(){
	it('can handle an empty array and returns an array', function(){
		expect(Array.isArray(mergeSort([]))).toEqual(true);
	});

	it ('sorts a random mixed array', function() {
		var test_array = [4,3,6,1,10,7];
		expect(mergeSort(test_array)).toEqual([1,3,4,6,7,10]);
	});

	it ('sorts a reversed array', function() {
		var test_array = [5,4,3,2,1,0];
		expect(mergeSort(test_array)).toEqual([0,1,2,3,4,5]);
	});

	it ('sorts an almost completed sorted array', function() {
		var test_array = [1,2,3,4,5,0];
		expect(mergeSort(test_array)).toEqual([0,1,2,3,4,5]);
	});

	it ('sorts an array of chars', function() {
		var test_array = ['b', 'f', 'a'];
		expect(mergeSort(test_array)).toEqual(['a', 'b', 'f']);
	});
});


for (var i = 9; i <= 12; i++) {
  var numItems = Math.pow(2, i);
  var nativeTestArray = [];

  for(var j = 0; j < numItems; j++) {
    var rand = Math.floor(Math.random() * numItems);
    nativeTestArray.push(rand);
  }

  var bTestArray = nativeTestArray.slice(0);
  var mTestArray = nativeTestArray.slice(0);

  console.time(numItems + ' native');
  nativeTestArray.sort(function(a, b){ return a - b; });
  console.timeEnd(numItems + ' native');

  console.time(numItems + ' bubble');
  bubbleSort(bTestArray);
  console.timeEnd(numItems + ' bubble');

  console.time(numItems + ' merge');
  mergeSort(mTestArray);
  console.timeEnd(numItems + ' merge');
}
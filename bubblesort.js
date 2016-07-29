function bubbleSort(array) {
	var a, b;
	var switched = true;
	var comparisons = 0;
	var switches = 0;
	while (switched) {
		switched = false;
		for (var i = 0; i < array.length; i++) {
			a = array[i];
			b = array[i+1];
			comparisons++;
			if (a > b) {
				array[i] = b;
				array[i+1] = a;
				switches++;
				switched = true;
			}
		}

	}
	return {sortedArr: array, comparisons: comparisons, switches: switches};
}
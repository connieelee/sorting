function split(wholeArray) {
	var cutOff = Math.floor(wholeArray.length/2);
	var firstHalf = wholeArray.slice(0,cutOff);
	var secondHalf = wholeArray.slice(cutOff);
	return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
	var output = [];
	while (arr1.length || arr2.length) {
		if (arr2[0] === undefined || arr1[0] < arr2[0]) output.push(arr1.shift());
		else output.push(arr2.shift());
	}
	return output;
}

function mergeSort(array) {
	if (array.length <= 1) {return array}
	var splitArray = split(array);
	return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]));
}
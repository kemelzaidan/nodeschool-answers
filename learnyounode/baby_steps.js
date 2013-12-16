function sum(number) {
	result = 0;
	for (i = 2; i < number.length; i++) {
		result += Number(number[i]);
	}
	return result;
};

console.log(sum(process.argv));

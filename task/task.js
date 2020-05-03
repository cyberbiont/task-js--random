function taskFn(min, max) {
	// Your code here
	let random = min + Math.random() * (max - min + 1);
	return Math.floor(random);
	// Your code here
}

export default taskFn;

function taskFn(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
	// Your code here
}

export default taskFn;

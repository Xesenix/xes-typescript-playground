console.log('hello world')

class A {
	constructor(
		public property: any,
	) {}
};

const a = new A('test');

console.log('property', a.property);

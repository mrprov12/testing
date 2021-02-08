function hello(name){
	//defualt name is 'world'
	name = name || 'world';
	console.log(`hello, ${name}!`);
}
hello();


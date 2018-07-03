// Practice reading JavaScript the same way as the interpreter reads it.

console.log(hello);
var hello = 'world';
// undefined

var needle = 'haystack';
test();
functioncopy test(){
	var needle = 'magnet';
	console.log(needle);
}
// ReferenceError

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// super cool

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// chicken
// half-chicken

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// rock
// r&b
// disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// san jose
// seattle
// burbank
// san jose
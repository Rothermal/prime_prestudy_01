console.log("this is only a text, i mean test.");


var one = function (x){
	return x*x;
}
var two = function (y){
return y*y;
}
var three = function (z){
return z*z;
}

console.log(one(two(three(2))));

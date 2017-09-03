
var texts = {
	MARCO:"marco", POLO: "polo", MARCOPOLO: "marcopolo"

};

var m 	  = 4;
var n 	  = 7;
// var lcm   = lcm(m,n);
var total = 56;
var mCounter = 1;
var nCounter = 1;
var lcmCounter = 1;
// Greatest common divisor of 2 integers
function gcd(a, b) {
  if(!b) return b===0 ? a : NaN;
  return gcd(b, a%b);
}

//finds the lcm of the two numbers a and b
function lcm(a,b){
	return (a*b)/gcd(a,b);
}

var lcm   = lcm(m,n);
var arr = [];
function getArray(){
  	for(var i=1; i<=total; i++){
	  var text = '';
		if( mCounter == m){
			mCounter = 0;
			text = texts.MARCO;
		}
		if( nCounter == n ){
			nCounter = 0;
			text = texts.POLO;
		}
		if( lcmCounter == lcm ){
			lcmCounter = 0;
			text = texts.MARCOPOLO;
		}

		arr.push(text || i);
		mCounter++;
		nCounter++;
		lcmCounter++;
	}
}
getArray();
console.log(arr);

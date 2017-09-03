var fs = require('fs');
var svnSgmntDigit = require('./val.json');
var parser = require('./parser.json');

fs.readFile('data.txt', (err,txt)=>{
	var str = txt.toString();
	var arr = str.split('\n');
	var len = arr.length;
	for(var i=0; i<len; i++){
		if( arr[i] == '')
			continue;
		else{
			var aa = parseSevenSegmentString(arr[i],arr[i+1], arr[i+2]);
			console.log(aa);
			i += 3;
		}
	}
});

var parseSevenSegmentString = function(firstRow, secondRow, thirdRow){
	var invoiceId = '';
	var num = -Infinity;
	var invalid = false;
	for(var i=0; i<=24; i += 3){
		num = getDigit(getString(
					firstRow.substring(i,i+3),
					secondRow.substring(i,i+3),
					thirdRow.substring(i,i+3)
					)
				);
		if( num == -1 || num == -Infinity){
			 invoiceId += '?';
			invalid = true;
		}else{
			invoiceId += num;
		}
	}
	return invalid ? invoiceId + "  Invalid" : invoiceId;
}

var getDigit = function(str){
//	console.log(str);
	var num = svnSgmntDigit[str];
	return num ? num : -1;
}

var getString = function(up, mid, low){
//	console.log(up,mid,low);
//	console.log('------%s--%s--%s------',up.length, mid.length, low.length);
	return parser['1'][up]+parser['2'][mid]+parser['3'][low];
}

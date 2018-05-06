var fs = require('fs');
var request = require('request');

const eDir = "texts/English_Wordbook/";
const url = "https://raw.githubusercontent.com/mdb536/Anglish-translator/master/src/texts/English_Wordbook/";
const engTemplate = {
	Chancery:"",
	Class:"",
	Attested:[], 
	Unattested:[]
};

function cleanElem(str){
	if(str.includes("(")){
		str = str.subString(0, str.indexOf("("));
	}
	while(str.startsWith(" ")){
		str = str.subString(1);
	}
	while(str.endsWith(" ")){
		str=str.subString(0, str.length-1);
	}
	return str;
}

function stringToArr(str){
	const strArr = str.split(",");
	let nArr = strArr.map(cleanElem);
	while(nArr.indexOf("-") !== -1){
		nArr.splice(nArr.indexOf("-"), 1);
	}
	return nArr;
}

function callback(err, data){
	if(!err){
		console.log(data);
	}
}

function readData(dir, callback){
	request(url,  function(err, res, body) {
		if (err) {
  			console.log('there seems to have been an error', err); 
  			return undefined;
 		} 
 		else{
 			return callback(null, body);
 		}
	});
}



for(let i = 65; i <= 90; i++){
	const str = eDir + i + ".json";
	const readFileWithJSONParse = readFileWith(JSON.parse);
	readFileWithJSONParse(callback);
}

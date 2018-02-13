var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var cheerioParser = require('cheerio-tableparser');


//https://www.gitbook.com/book/kevinchisholm/basic-web-scraping-with-node-js-and-cheerio-js/details

const dir = "texts/English_Wordbook/";
const aDir = "texts/Anglish_Wordbook"; 

const engTemplate = {
	Chancery:"",
	Class:"",
	Attested:"", 
	Unattested:""
};

const angTemplate = {
	Anglish:"",
	Class:"",
	Meaning:"",
	Origin:"",
}

function retrieveHTML(url, fileName, dir){
	request(url, function(err, response, body){
		if(!err && response.statusCode == 200){
			const loading = cheerio.load(body);
			let table = loading('table').html();

			table = "<table>" + table + "</table>";

			const $ = cheerio.load(table);
			cheerioParser($);
			let arr = $("table").parsetable(true, true, true);

			const data = arrToObj(arr, 2, engTemplate);

			let str = ""
			for(let i = 0; i < data.length; i++){
				str += JSON.stringify(data[i]) + "\n";
			}
			fs.writeFile((dir+fileName+".json"), str, (err) => { 
				if (err) throw err;
			});
			

			return data;

		}
		else{
			console.log(err);
			return [];
		}
	});
}



function createTemplate(arr){
	let template = {};
	for(let i = 0; i < arr.length; i++){
		if(arr[i][0] === arr[i][1]){
			template[(arr[i][0])] = i;
		}
		else{
			if(!template.hasOwnProperty(arr[i][0]))
				template[(arr[i][0])] = {};
			template[(arr[i][0])][(arr[i][1])] = i;

		}
	}
	return template;
}

function arrToObj(arr, bInd, template){
	let parseData = [];
	for(let j = bInd; j < arr[0].length; j++){
		let i = 0;
		let subTemp = Object.assign({}, template);
		for(const prop in template){
			if(arr[i][j] !== undefined){
				subTemp[prop] = (arr[i][j]);
			}
			i++;
			
		}
		parseData.push(subTemp);
	}

	return parseData;
}

function cleanString(str){
	let retStr = str;
	if(retStr.includes("\\")){
		retStr = retStr.replace("\\", "");
	}
	if(retStr.includes(",\n")){
		retStr = retStr.replace(",\n", ", ");
	}
	if(retStr.includes("\n")){
		retStr = retStr.replace("\n", ",");
	}
	return retStr;
}

for(let i = 65; i <= 90; i++){
	const url = 'http://anglish.wikia.com/wiki/English_Wordbook/' + String.fromCharCode(i);
	retrieveHTML(url, String.fromCharCode(i), dir);
}

let alphArr = ["A", "B", "C", "D", "E", "F", "G", "H", 'IJ', "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "UV", "W", "XYZ"];
for(let j = 0; j < alphArr.length; j++){
	const nUrl = 'http://anglish.wikia.com/wiki/Anglish_wordbook/' + alphArr[j];
	
}



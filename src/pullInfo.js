var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var cheerioParser = require('cheerio-tableparser');


//https://www.gitbook.com/book/kevinchisholm/basic-web-scraping-with-node-js-and-cheerio-js/details

var dir = "texts/English_Wordbook/"


const engTemplate = {
	Chancery:"",
	Class:"",
	Attested:"", 
	Unattested:""
};

function retrieveHTML(url, fileName){
	request(url, function(err, response, body){
		if(!err && response.statusCode == 200){
			var loading = cheerio.load(body);
			var table = loading('table').html();

			table = "<table>" + table + "</table>";

			var $ = cheerio.load(table);
			cheerioParser($);
			var arr = $("table").parsetable(true, true, true);

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
				subTemp[prop] = cleanString(arr[i][j]);
			}
			else{
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
	if(retStr.includes("\n")){
		retStr = retStr.replace("\n", ",");
	}
	return retStr;
}

for(let i = 65; i <= 90; i++){
	const url = 'http://anglish.wikia.com/wiki/English_Wordbook/' + String.fromCharCode(i);
	retrieveHTML(url, String.fromCharCode(i));
}



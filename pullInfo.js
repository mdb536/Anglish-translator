var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var cheerioParser = require('cheerio-tableparser');


//https://www.gitbook.com/book/kevinchisholm/basic-web-scraping-with-node-js-and-cheerio-js/details

const dir = "text/";
const aDir = "texts/Anglish_Wordbook/"; 

const engTemplate = {
	Chancery:"",
	Class:"",
	Attested:[], 
	Unattested:[]
};

const angTemplate = {
	Anglish:"",
	Class:"",
	Meaning:"",
	Origin:"",
}



function retrieveEngHTML(url, fileName, dir){
	request(url, function(err, response, body){
		if(!err && response.statusCode == 200){
			const loading = cheerio.load(body);
			let table = loading('table').html();

			table = "<table>" + table + "</table>";

			const $ = cheerio.load(table);
			cheerioParser($);
			let arr = $("table").parsetable(true, true, true);

			const data = arrToObj(arr, 2, engTemplate);
			let bigObj = {};
			for(let i = 0; i < data.length; i++){
				let currObj = data[i];
				let name = currObj["Chancery"];
				bigObj[name] = data[i];
			}
			const str = JSON.stringify(bigObj);

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


//https://stackoverflow.com/questions/45603346/node-js-parsing-a-specific-table-in-a-html-page-that-has-multiple-tables-using
function retrieveAngHTML(url, fileName, dir){
	request(url, function(err, response, body){
		if(!err && response.statusCode == 200){
			const loading = cheerio.load(body);

			let tArr = [];
			loading('table').each(function(i, elem){
				const $ = cheerio.load(elem);
				cheerioParser($);
				let subTable = $("table").parsetable(true, true, true);
				subTable = subTable.concat.apply([], subTable);
				if(subTable.length >= 3){
					const baseTemp = elemToObj(subTable, angTemplate);
					const newObj = {anglish: baseTemp["Anglish"], definition: baseTemp["Meaning"], origin: baseTemp["Origin"], english: [], upvotes: 0, downvotes: 0, comments: [], slug:baseTemp["Anglish"]};
					tArr.push(newObj);
				}
			});

			let str = ""
			for(let i = 0; i < tArr.length; i++){
				str += JSON.stringify(tArr[i]) + "\n";
			}
			fs.writeFile((aDir+fileName+".json"), str, (err) => { 
				if (err) throw err;
			});

			return tArr;

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

function cleanElem(str){
	if(str.includes("(")){
		str = str.substring(0, str.indexOf("("));
	}
	while(str.startsWith(" ")){
		str = str.substring(1);
	}
	while(str.endsWith(" ")){
		str=str.substring(0, str.length-1);
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


function arrToObj(arr, bInd, template){
	let parseData = [];
	for(let j = bInd; j < arr[0].length; j++){
		let i = 0;
		let subTemp = Object.assign({}, template);
		for(const prop in template){
			if(arr[i][j] !== undefined){
				if(prop === "Attested" || prop === "Unattested"){
					let sub = cleanString(arr[i][j]);
					subTemp[prop] = stringToArr(sub);
				}
				else{
					subTemp[prop] = (arr[i][j]);
				}
			}
			i++;
			
		}
		parseData.push(subTemp);
	}

	return parseData;
}

function elemToObj(elem, template){
	let nObj = Object.assign({}, template);
	// let subArr = elem[elem.length-1].split("[");
	let substr = elem[elem.length-1];
	let subArr = substr.split("[");
	elem[elem.length-1] = subArr[0];
	elem.push("[" + subArr[1]);

	let i = 0;
	for(const prop in nObj){
		nObj[prop] = elem[i];
		i++;
	}
	return nObj;
}

function cleanString(str){
	let retStr = str;
	if(retStr.includes("(") && retStr.includes(")")){
		retStr = retStr.replace(/ *\([^)]*\) */g, ",");
	}
	if(retStr.includes("\\")){
		retStr = retStr.replace("\\", "");
	}
	if(retStr.includes("\n")){
		retStr = retStr.replace("\n", ",");
	}
	if(retStr.includes("/")){
		retStr = retStr.replace("/", ",");
	}
	if(retStr.includes(",,")){
		retStr = retStr.replace(",,", ",");
	}
	if(retStr.includes(";")){
		retStr = retStr.replace(";", ",");
	}
	if(retStr.endsWith(",")){
		retStr = retStr.substr(0, retStr.length-1);
	}
	if(retStr.includes("(")){
		retStr = retStr.substr(0, retStr.indexOf("("));
	}
	if(retStr.includes("\n")){
		retStr = retStr.replace("\n", "");
	}
	return retStr;
}

for(let i = 65; i <= 90; i++){
	const url = 'http://anglish.wikia.com/wiki/English_Wordbook/' + String.fromCharCode(i);
	retrieveEngHTML(url, String.fromCharCode(i), dir);
}


// let alphArr = ["A", "B", "C", "D", "E", "F", "G", "H", 'IJ', "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "UV", "W", "XYZ"];
// for(let j = 0; j < alphArr.length; j++){
// 	const nUrl = 'http://anglish.wikia.com/wiki/Anglish_wordbook/' + alphArr[j];
// 	retrieveAngHTML(nUrl, alphArr[j], aDir);
// }



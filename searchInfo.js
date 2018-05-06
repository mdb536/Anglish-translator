var fs = require('fs');
var request = require('request');


function getFile(dir, str){
	var file = str.charAt(0);
	return dir + file.toUpperCase();
}


function findWord(dir){
}
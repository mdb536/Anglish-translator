const express = require('express');
const mongoose = require('mongoose');

const session = require('express-session');
const path = require('path');

const app = express();
const trans = require('./translate.js');

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'add session secret here!',
    resave: false,
    saveUninitialized: true,
}));



app.get('/', (req, res) =>{
	res.render('index', {});

});

app.post('/', (req, res) =>{
	const english = req.body.english;
	const eng_Arr = trans.trim(english);
	const init_dict = trans.find(eng_Arr);
	dictionary = trans.checkVerbs(init_dict);

	const finStr = trans.threadBack(english, dictionary);
	res.render('index', {original: english, anglish: finStr});

});

app.listen(3000);

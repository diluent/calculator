const express = require('express');
var path = require('path');
const {sum, subtraction, multiplication, division} = require('./operations');

const app = express();

const port = process.env.PORT || 3000;

const ALLOWED_ORIGINS = ['localhost'];


const validateNumber = (numb) => {
    const result = !isNaN(parseFloat(numb)) && !isNaN(numb - 0);

    if (!result) {
        return 'The number string is not like a number';
    }
}

const validate = (numbers) => {
    if (!numbers) {
        return "Two arguments 'number' are required";
    }

    const number1 = numbers[0];
    const number2 = numbers[1];

    let error = validateNumber(number1);
    if (typeof error === 'string') {
        return error;
    }

    error = validateNumber(number2);
    if (typeof error === 'string') {
        return error;
    }
}


app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    if(req.headers.origin && ALLOWED_ORIGINS.indexOf(new URL(req.headers.origin).hostname) > -1) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
    next();
});

app.use('/assets', express.static(path.resolve('dist')));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.resolve('dist/index.html'));
});


// Example: 'GET /sum?number=2&number=6' will return {result: 8} for the 'number' query parameters
app.get('/sum', (req, res) => {
    console.log('error req.query', req.query)
    const error = validate(req.query.number);

    if (typeof error === 'string') {
        res.send({error});
        return;
    }

    const number1 = req.query.number[0];
    const number2 = req.query.number[1];

    res.send(sum(number1, number2));
});

// Example: 'GET /sub?number=5&number=3' will return {result: 2} for the 'number' query parameters
app.get('/sub', (req, res) => {
    const error = validate(req.query.number);
    if (typeof error === 'string') {
        res.send({error});
        return;
    }

    const number1 = req.query.number[0];
    const number2 = req.query.number[1];

    res.send(subtraction(number1, number2));
});

// Example: 'GET /mult?number=5&number=3' will return {result: 15} for the 'number' query parameters
app.get('/mult', (req, res) => {
    const error = validate(req.query.number);
    if (typeof error === 'string') {
        res.send({error});
        return;
    }

    const number1 = req.query.number[0];
    const number2 = req.query.number[1];

    res.send(multiplication(number1, number2));
});

// Example: 'GET /div?number=6&number=3' will return {result: 2} for the 'number' query parameters
app.get('/div', (req, res) => {
    const error = validate(req.query.number);
    if (typeof error === 'string') {
        res.send({error});
        return;
    }

    const number1 = req.query.number[0];
    const number2 = req.query.number[1];

    res.send(division(number1, number2));
});

app.listen(port, () => console.log(`Image server running on port ${port}`));

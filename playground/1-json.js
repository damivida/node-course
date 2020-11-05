const fs = require('fs');


/*const book = {
    title: 'The Art of War',
    author: 'Tsun Tzu'
}


//console.log(book.author);

//conver object to JSON string
const bookJason = JSON.stringify(book);
//console.log(bookJason);

//convert JSON string to object
const parsedJSON = JSON.parse(bookJason);
//console.log(parsedJSON.author);

fs.writeFileSync('1-json.json', bookJason);*/


/*const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data.author);*/


//-- CHALLANGE 

//READING THE FILE(loading an parsing JSON data) 
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);


//CHANGING THE PROPERTIES
data.name = "Damir";
data.age = 35;



//CONVERTING OBJECT TO STRING and overwriting the data
const dataStringify = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataStringify);


//READING THE FILE
console.log(fs.readFileSync('1-json.json').toString());


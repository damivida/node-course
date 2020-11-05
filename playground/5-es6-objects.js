//object property shorthand

const name = 'Damir';
const age = 35;

const user = {
    name,
    userAge: age,
    location: 'Jug 2'
}

//console.log(user);


//Object destructuring

const product = {
    label: 'Brown book',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 7
}


/* const label = product.label;
const price = product.price; */

/* const {label, price, stock, rating = 5} = product;
console.log(label, price, stock, rating); */

const transaction = (type, {label, price=0} = {}) => {
     console.log(label, price);
}

transaction('order', product);
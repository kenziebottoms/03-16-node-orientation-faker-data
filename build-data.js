"use strict";

const { createWriteStream } = require('fs');
const { productTypes } = require('./prod-types');
const { generateCustomers } = require('./customers');
const { generateProducts } = require('./products');

// write customers to JSON file
let customers = generateCustomers();
let custStream = createWriteStream(`customers.json`);
custStream.write(JSON.stringify(customers));

// write products to JSON file
let products = generateProducts(productTypes.length, customers.length);
let prodStream = createWriteStream(`products.json`);
prodStream.write(JSON.stringify(products));
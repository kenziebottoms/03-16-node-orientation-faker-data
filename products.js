"use strict";

const faker = require('faker');

// generate list of products
module.exports.generateProducts = (typesLen, customersLen) => {
    let products = [];

    for (let i=0; i<25; i++) {
        let title = faker.commerce.productName();
        let price = faker.commerce.price();
        let description = faker.lorem.sentence();
        // assign random product type
        let type_id = Math.floor(Math.random() * typesLen) + 1;
        // assign random customer id
        let customer_id = Math.floor(Math.random() * customersLen) + 1;

        products.push({
            title,
            price,
            description,
            type_id,
            customer_id
        });
    }
    return products;
};
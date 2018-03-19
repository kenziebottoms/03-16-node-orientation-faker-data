const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("bangazon.sqlite");
const { readFileSync } = require("fs");
const prodData = JSON.parse(readFileSync("./products.json"));

// populate db with existing JSON (run data:generate first)
db.run(`DROP TABLE IF EXISTS products`);
db.run(
    `CREATE TABLE IF NOT EXISTS products (
        prod_id INTEGER PRIMARY KEY,
        title TEXT,
        price TEXT,
        description TEXT,
        type_id INTEGER,
        customer_id INTEGER,
        FOREIGN KEY (type_id) REFERENCES prod_types(type_id)
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
    )`, () => {
        prodData.forEach(({ title, price, description, type_id, customer_id }) => {
            db.run(`INSERT INTO products VALUES (
                ${null},
                "${title}",
                "${price}",
                "${description}",
                ${type_id},
                ${customer_id}
            )`);
        });
    }
);
To use this baby:

+ npm install (_Will install sqlite3 and faker modules_)
+ npm run data:generate (_Creates JSON files of customers and products_)
+ npm run db:generate (_Pulls in the JSON files and populates the appropriate table(s)_)

*NOTE* that as-is, this example builds and fills a `products` table, including foreign key ids for `customers` and `product_types`. You will need to adapt this code to your purposes for your own schemas and tables.

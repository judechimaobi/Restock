// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database.');
});



// API endpoint to retrieve all products with their types and inventory
app.get('/api/product_items', (req, res) => {
	const query = `
			SELECT 
					Categories.category_name AS category,
					Products.name AS product,
					ProductTypes.name AS type,
					ProductTypes.sku,
					ProductTypes.image_url,
					Inventory.quantity,
					Inventory.price,
					ProductTypes.unit AS unit  -- Add unit here
			FROM Inventory
			JOIN ProductTypes ON Inventory.type_id = ProductTypes.type_id
			JOIN Products ON ProductTypes.product_id = Products.product_id
			JOIN Categories ON Products.category_id = Categories.category_id
	`;
	
	db.query(query, (err, results) => {
			if (err) {
					console.error('Error fetching products:', err.message);
					res.status(500).send('Server Error');
					return;
			}
			res.json(results);
	});
});


// API endpoint to retrieve all categories (that has products connected to them)
app.get('/api/categories', (req, res) => {
    const query = `
        SELECT DISTINCT 
            Categories.category_name, 
            Categories.image_url, 
            Categories.description 
        FROM Categories 
        JOIN Products ON Products.category_id = Categories.category_id
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching categories:', err.message);
            res.status(500).send('Server Error');
            return;
        }
        res.json(results); // Return category_name, image_url, and description
    });
});


// API endpoint to retrieve products by category
app.get('/api/products/:category', (req, res) => {
	const category = req.params.category;
	const query = `
			SELECT 
					Categories.category_name AS category,
					Products.name AS product,
					ProductTypes.name AS type,
					ProductTypes.sku,
					ProductTypes.image_url,
					Inventory.quantity,
					Inventory.price,
					ProductTypes.unit AS unit  -- Add unit here
			FROM Inventory
			JOIN ProductTypes ON Inventory.type_id = ProductTypes.type_id
			JOIN Products ON ProductTypes.product_id = Products.product_id
			JOIN Categories ON Products.category_id = Categories.category_id
			WHERE Categories.category_name = ?
	`;

	db.query(query, [category], (err, results) => {
			if (err) {
					console.error('Error fetching products by category:', err.message);
					res.status(500).send('Server Error');
					return;
			}
			res.json(results);
	});
});


// New Endpoint: Retrieve ProductTypes by Product ID
app.get('/api/producttypes/:product_id', (req, res) => {
	const productId = req.params.product_id;

	// Validate productId is a number to prevent SQL injection
	if (isNaN(productId)) {
			res.status(400).send('Invalid product ID');
			return;
	}

	const query = `
			SELECT 
					ProductTypes.type_id,
					ProductTypes.name AS type_name,
					ProductTypes.sku,
					ProductTypes.image_url,
					Inventory.quantity,
					Inventory.price,
					ProductTypes.unit AS unit  -- Add unit here
			FROM ProductTypes
			LEFT JOIN Inventory ON ProductTypes.type_id = Inventory.type_id
			WHERE ProductTypes.product_id = ?
	`;

	db.query(query, [productId], (err, results) => {
			if (err) {
					console.error('Error fetching product types:', err.message);
					res.status(500).send('Server Error');
					return;
			}

			if (results.length === 0) {
					res.status(404).send('No product types found for the given product ID');
					return;
			}

			res.json(results);
	});
});


// API Endpoint: Retrieve All Products with Lowest Price

/**
 * GET /api/products
 * 
 * Retrieves all products with the following details:
 * - product_id
 * - name
 * - description
 * - image_url
 * - lowest_price (minimum price among all product types under the product)
 */
app.get('/api/products', (req, res) => {
	const query = `
			SELECT 
					Products.product_id,
					Products.name,
					Products.description,
					Products.image_url,
					MIN(Inventory.price) AS lowest_price,
					ProductTypes.unit AS unit  -- Add unit here
			FROM Products
			JOIN ProductTypes ON Products.product_id = ProductTypes.product_id
			JOIN Inventory ON ProductTypes.type_id = Inventory.type_id
			GROUP BY Products.product_id, Products.name, Products.description, Products.image_url
			ORDER BY Products.product_id ASC
	`;

	db.query(query, (err, results) => {
			if (err) {
					console.error('Error fetching products:', err.message);
					res.status(500).json({ error: 'Server Error' });
					return;
			}

			res.json(results);
	});
});











// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

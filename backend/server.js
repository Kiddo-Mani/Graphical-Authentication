const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to the database
const db = new sqlite3.Database('users.db');
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE, password TEXT)');
});

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Route to handle signup request
app.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) {
            return res.status(500).send('Internal server error');
        }
        if (row) {
            return res.status(400).send('User already exists');
        }

        // Hash the password
        bcrypt.hash(password.join(''), 10, (err, hashedPassword) => {
            if (err) {
                return res.status(500).send('Internal server error');
            }

            // Insert new user into the database with hashed password
            db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err) => {
                if (err) {
                    return res.status(500).send('Internal server error');
                }
                res.status(201).send('Account created successfully');
            });
        });
    });
});

// Route to handle signin request
app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) {
            return res.status(500).send('Internal server error');
        }
        if (!row) {
            return res.status(404).send('User not found');
        }

        // Join the array of selected images into a single string
        const joinedPassword = password.join('');

        // Compare hashed password with entered password
        bcrypt.compare(joinedPassword, row.password, (err, result) => {
            if (err) {
                return res.status(500).send('Internal server error');
            }
            if (result) {
                res.send('Signed in successfully');
            } else {
                res.status(401).send('Incorrect password');
            }
        });
    });
});


// Serve the frontend HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

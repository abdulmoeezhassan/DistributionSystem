const express = require('express');
const bycrypt=require("bcryptjs");
const pool = require('../..//models/model');
const jwt=require("jsonwebtoken");
const verifyToken = require('./verifyToken');

const router = express.Router();

router.use(express.json());

const JWT_SECRET_KEY = 'your-secret-key';

router.post('/', async (req, res) => {
    const { UserName, Password } = req.body;
    try {
        const login = await pool.query('SELECT * FROM Login WHERE UserName=$1', [UserName]);
        const user = login.rows[0];

        if (user && await bycrypt.compare(Password, user.hashedpassword)) {
            const token = jwt.sign({ id: user.id, UserName: user.username }, JWT_SECRET_KEY, { expiresIn: '1h' });
            res.status(200).json({ token: token });
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/DashBoard', verifyToken, (req, res) => {
    // User is authenticated, allow access to the protected route
    res.status(200).json({ message: 'You have access to the protected route.' });
});

module.exports = router;

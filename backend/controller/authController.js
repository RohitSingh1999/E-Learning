const bcrypt = require('bcryptjs');
const db = require('../config/db');

exports.Registration = (req, res) => {
    const { firstName, lastName, email, password, cnfPassword } = req.body;

    if (password !== cnfPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    db.query('INSERT INTO users (firstName, lastName, email, password, cnfPassword) VALUES (?, ?, ?, ?, ?)', 
    [firstName, lastName, email, hashedPassword, cnfPassword], 
    (err, result) => {
        if (err) throw err;
        res.json({ message: 'User registered successfully' });
    });
};

exports.Login = (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = results[0];

        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(401).json({ message: 'Invalid Password' });
        }

        res.json({ message: 'Login successful' });
    });
};

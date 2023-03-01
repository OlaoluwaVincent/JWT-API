const { BadRequest } = require('../errors');
const jwt = require('jsonwebtoken');

//  login controller
const login = async (req, res) => {
	const { username, password } = req.body;

	// check for the data as they are required
	if (!username || !password) {
		throw new BadRequest('Please provide email and password');
	}
	//This ID is just for practice
	const id = new Date().getDate();

	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});

	res.status(200).json({ message: 'User created', token });
};

// dashboard controller
const dashboard = async (req, res) => {
	// This is RUN after it has passed validation on the authMiddleware
	const luckyNum = Math.floor(Math.random() * 100);
	res.status(200).json({
		message: `Hello, ${req.user.username}`,
		secret: `Here is your authorized data, your number is ${luckyNum}`,
	});
};

module.exports = {
	login,
	dashboard,
};

const jwt = require('jsonwebtoken');
const { unauthenticatedError } = require('../errors');

const authMiddleware = async (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		throw new unauthenticatedError('No token available');
	}

	const token = authHeader.split(' ')[1];

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const { id, username } = decoded;

		req.user = { id, username };
		next();
	} catch (error) {
		throw new unauthenticatedError('Unauthorized Token');
	}
};

module.exports = authMiddleware;

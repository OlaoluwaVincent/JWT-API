const BadRequest = require('./badrequest');
const CustomApiError = require('./custom-error');
const unauthenticatedError = require('./unauthenticated');

module.exports = {
	CustomApiError,
	BadRequest,
	unauthenticatedError,
};

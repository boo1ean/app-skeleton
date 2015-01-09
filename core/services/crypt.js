var bcrypt = require('bcrypt');

function hashPassword (password) {
	return bhash.hashSync(password, 10);
}

function verifyPassword (password, hash) {
	return bhash.compareSync(password, hash);
}

module.exports = {
	hashPassword: hashPassword,
	verifyPassword: verifyPassword
};

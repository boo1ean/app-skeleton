module.exports = {
	transport: 'SMTP',
	nodemailer: {
		service: "Mandrill",
		auth: {
			user: "user@example.com",
			pass: "Best token ever"
		}
	}
};

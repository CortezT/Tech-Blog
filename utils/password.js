const bcrypt = require('bcryptjs');

const saltRounds = 10;

const generateHash = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (err) {
        throw err;
    }
};

const checkPassword = async (password, hashedPassword) => {
    try {
        const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
        return isPasswordMatch;
    } catch (err) {
        throw err;
    }
};

module.exports = { generateHash, checkPassword };
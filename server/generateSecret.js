const crypto = require('crypto');

// Generate a random string for JWT secret
const generateJWTSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

console.log(generateJWTSecret());

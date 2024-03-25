express = require('express')
const router = express.Router()
const User = require('../models/Users')
const bcrypt = require('bcrypt')
const { check, validationResult: validationResult } = require('express-validator')

router.post('/', [
  check('email').isEmail(),
  check('password').isLength({ min: 8, max: 25 })
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  
  const { email, password } = req.body

  try {
    let user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({ msg: 'User already exists'})
    }
    
    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create a new user object with hashed password
    user = new User ({ email, password: hashedPassword })

    // Save the user to the database
    await user.save()

    res.status(200).json({ msg: 'User registered successfully'})
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router;
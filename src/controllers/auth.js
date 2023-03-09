const {User} = require('../models/user');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password', success: false });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password', success: false });
    }

    res.status(200).json({ message: 'Logged in successfully', success: true });
  } catch (error) {
    console.log(`Error logging in: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};

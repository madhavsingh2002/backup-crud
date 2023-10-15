const UserModel = require("../model/user.js");
const bcrypt = require("bcrypt");
const Register = async (req, res) => {
  try {
    const { fullName, email, number, password } = req.body;
    if (!fullName || !email || !number || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Checks if user already exist..
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already registered.",
      });
    }
    const saltRounds = 10; 
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);
    await new UserModel({
      fullName,
      email,
      number,
      password: hashPassword,
    }).save();
    res.status(200).json({
      success: true,
      message: "User successfully registered",
    });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "all the field required",
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Email is not registered",
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(404).json({
        message: "invalid password",
      });
    } 
    res.status(200).json({
      success: true,
      message: "Login successfully",
    });
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = { Register, Login };

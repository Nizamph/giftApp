const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');
const RegisterUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  console.log('request body', req.body);
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Complete the form and submit');
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('User is already exist');
  }

  const usersData = await User.create({
    name: name,
    email: email,
    password: password,
    pic: pic,
  });

  // console.log('usersData', usersData);

  if (usersData) {
    res.status(201).json({
      userId: usersData._id,
      name: usersData.name,
      email: usersData.email,
      pic: usersData.pic,
      token: generateToken(usersData._id),
    });
  } else {
    res.status(400);
    throw new Error('registration failed');
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist && (await userExist.matchPassword(password))) {
    res.json({
      id: userExist._id,
      name: userExist.name,
      email: userExist.email,
      token: generateToken(userExist._id),
    });
  } else {
    res.status(400);
    throw new Error('user Not found please register first');
  }
});

module.exports = { RegisterUser, authUser };

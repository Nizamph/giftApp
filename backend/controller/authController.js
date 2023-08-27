const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Admin = require('../models/adminModel');
const generateToken = require('../config/generateToken');
const register = asyncHandler(async (req, res) => {
  const { name, email, password, pic, userType } = req.body;
  console.log('request body', req.body);
  if (!name || !email || !password || !userType) {
    res.status(400);
    throw new Error('Complete the form and submit');
  }
  if (userType === 'Admin') {
    const adminExist = await Admin.findOne({ email });
    if (adminExist) {
      res.status(400).json({ errorMessage: 'user is already exist' });
      throw new Error('User is already exist');
    }
    const adminData = await Admin.create({
      name: name,
      email: email,
      userType: userType,
      password: password,
    });
    if (adminData) {
      res.status(201).json({
        adminId: adminData._id,
        name: adminData.name,
        email: adminData.email,
        userType: adminData.userType,
        token: generateToken(adminData._id),
      });
    } else {
      res.status(400);
      throw new Error('Admin registration failed');
    }
  } else if (userType === 'User') {
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ errorMessage: 'user is already exist' });
      throw new Error('User is already exist');
    }
    const usersData = await User.create({
      name: name,
      email: email,
      password: password,
      userType: userType,
      pic: pic,
    });

    // console.log('usersData', usersData);

    if (usersData) {
      res.status(201).json({
        userId: usersData._id,
        name: usersData.name,
        email: usersData.email,
        userType: usersData.userType,
        pic: usersData.pic,
        token: generateToken(usersData._id),
      });
    } else {
      res.status(400);
      throw new Error('User registration failed');
    }
  }
});

const auth = asyncHandler(async (req, res) => {
  try {
    const { email, password, userType } = req.body;
    if (!email || !password || !userType) {
      res.status(400);
      throw new Error('please complete the form to login');
    }

    if (userType === 'Admin') {
      const adminExist = await Admin.findOne({ email });
      if (adminExist && (await adminExist.matchPassword(password))) {
        res.json({
          id: adminExist._id,
          name: adminExist.name,
          email: adminExist.email,
          userType: adminExist.userType,
          token: generateToken(adminExist._id),
        });
      } else {
        res.status(400);
        throw new Error('heyy admin you are not found please register first');
      }
    } else if (userType === 'User') {
      const userExist = await User.findOne({ email });
      console.log('userData after login', userExist);
      if (userExist && (await userExist.matchPassword(password))) {
        console.log(' if working');
        res.json({
          id: userExist._id,
          name: userExist.name,
          email: userExist.email,
          userType: userExist.userType,
          token: generateToken(userExist._id),
        });
      } else {
        res.status(400);
        throw new Error('heyy user you are not found please register first');
      }
    }
  } catch (err) {
    res.status(500).json({ message: 'internal server error (login)' });
  }
});

module.exports = { register, auth };

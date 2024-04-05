// Importing the user model
const User = require("../models/User.js");

// Importing the bcryptjs module
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);

// Importing the jwt module
const jwt = require("jsonwebtoken");

// Importing the jwt secret token
const jwtSecret = process.env.JWT_SECRET;

// sending emails using sendgrid
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Importing the built-in crypto library
const crypto = require("crypto"); // used for creating unique, secure, random values

// All controllers
exports.postRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json(
        "Email already exists",
      ); // Send error response
    }

    const userDoc = await User.create({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, bcryptSalt),
      address: "",
      resetToken: "",
      phone: "",
    });

    res.json(userDoc);
    // console.log("User registered Successfully!");
  } catch (error) {
    // console.error("Error in registering user:", error);
    res.status(500).json({ error: "Registration failed" }); // Send generic error response
  }
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  // Finding user with email in database
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    // Checking password
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // creating json web token
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
          name: userDoc.name
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) {
            throw err;
          } else {
            res.cookie("token", token).json(userDoc);
          }
        }
      );
    } else {
      res.status(422).json("Password not OK");
    }
  } else {
    res.status(422).json("User not found");
  }
};

exports.postLogout = (req, res) => {
  // resetting the cookie
  res.cookie("token", "").json(true);
};

exports.postResetPassword = async (req, res) => {
  // get user from client
  const { email } = req.body;
  // finding the user in the database
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    // Generate a random reset token
    const token = await new Promise((resolve, reject) => {
      crypto.randomBytes(32, (err, buffer) => {
        if (err) {
          reject(err);
        } else {
          resolve(buffer.toString("hex"));
        }
      });
    });

    // udpate the user with reset token
    userDoc.resetToken = token;
    // save the updated user with token
    await userDoc.save();

    // email message contents
    const msg = {
      to: email,
      from: "aditya.padwal3102@gmail.com",
      subject: `Password Reset for ${email}`,
      html: `
            <p> You requested a password reset.</p>
            <p> Click the link below to set a new password </p>
            <p> <a href="http://localhost:5173/reset-password/${token}"> Reset Password for ${email}</a> </p>
            `,
    };

    // send reset password email link to the user
    (async () => {
      try {
        await sgMail.send(msg);
        // console.log("Mail Sent!");
        res.json(true);
      } catch (error) {
        // failure in sending email
        res.status(422).json(error);
      }
    })();
  } else {
    // user/email not present in the database
    res.status(422).json("Email not found!");
  }
};

exports.postNewPassword = async(req, res) => {
    // getting data from the client
    const {email, newPassword} = req.body;
    // console.log(email, newPassword);

    // finding user in the database
    const userDoc = await User.findOne({ email });
    if(userDoc) {
        const token = req.params.token; // Get token from URL parameter
        // console.log('Token from URL:', token);
        // console.log('Token from database:', userDoc.resetToken);
        if(token === userDoc.resetToken) {
          // console.log('New Password:', newPassword);
          // console.log('Old Password:', userDoc.password);
          
            if(!(bcrypt.compareSync(newPassword, userDoc.password))) {
                const hashedPassword = bcrypt.hashSync(newPassword, bcryptSalt);
                userDoc.password = hashedPassword;
                userDoc.resetToken = "";
                await userDoc.save();

                // Send success message or redirect to login page
                res.json(true);
            } else {
                res.status(422).json('New password should not be same as old password');
            }
        } else {
            res.status(422).json("Process failed!!!");
        }
    } else {
        // user/email not present in the database
        res.status(422).json("Incorrect email");
    }
};

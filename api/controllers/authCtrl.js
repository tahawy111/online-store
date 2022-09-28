import User from "../models/User.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
const validEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(403).json({ message: "User is already exist" });
  }

  if (!validEmail(email)) {
    return res.status(403).json({ message: "Invalid email" });
  }

  if (password.length < 6) {
    return res
      .status(403)
      .json({ message: "Password must be at least 6 characters" });
  }

  const token = jwt.sign({ name, email, password }, process.env.SENDMAIL_PASS, {
    expiresIn: "15m",
  });

  console.log(token);

  // Email Send
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "amer.vib582@gmail.com", pass: "mwigegzkbjjmgpmc" },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "TAHAWY ONLINE STORE ACTIVATION LINK",
    html: `
       <h1>Please click on link to activate</h1>
       <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
       <hr/>
       <p>This email contain senstive info</p>
       <p>${process.env.CLIENT_URL}</p>
   `,
  };

  try {
    await transport.sendMail(mailOptions);
    res.status(200).json({ message: `${email} has been sent a message` });
  } catch (error) {
    res.status(400).json({ message: `Error Occured register ${error}` });
  }

  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   const newUser = new User({ name, email, password: hashedPassword });

  //   try {
  //     const savedUser = await newUser.save();
  //     return res.status(201).json({ user: savedUser });
  //   } catch (error) {}
};

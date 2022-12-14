import User from "../models/User.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import jwt, { decode } from "jsonwebtoken";
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

  // Email Send
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.MAIL_USER, pass: "mwigegzkbjjmgpmc" },
  });

  const mailOptions = {
    from: `'TAHAWY STORE' <${process.env.MAIL_USER}>`,
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

export const adminRegister = async (req, res) => {
  const { name, email, password, creatorId } = req.body;

  const adminAccount = await User.findById(creatorId);

  if (adminAccount.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Only admin can create customer service account" });
  }

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

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    role: "cs",
  });

  try {
    const savedUser = await newUser.save();
    return res.status(201).json({ user: savedUser });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error occured register. Please try again" });
  }
};

export const activation = (req, res) => {
  jwt.verify(req.body.token, process.env.SENDMAIL_PASS, async (err, decode) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "Link is expired. Please register again" });
    }
    const { name, email, password } = decode;
    console.log(name, email, password);

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });

    try {
      const savedUser = await newUser.save();
      return res.status(201).json({ user: savedUser });
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Error occured activation. Please try again" });
    }
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Passwords do not matches" });
  }

  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email, role: user.role },
    process.env.TOKEN_PASS,
    {
      expiresIn: "30d",
    }
  );

  return res.status(200).json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  });
};

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (user.role !== "admin" && user.role !== "cs") {
    return res
      .status(403)
      .json({ message: "Only admin or customer sevice accounts can signin" });
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Passwords do not matches" });
  }

  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email, role: user.role },
    process.env.TOKEN_PASS,
    {
      expiresIn: "30d",
    }
  );

  return res.status(200).json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  });
};

export const requireSignin = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(404).json({ message: "Token not found. Please Signin!" });
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.TOKEN_PASS, (error, decode) => {
    if (error) {
      res.status(401).json({ message: "Token is expired. Please Signin!" });
    }
    req.user = decode;
    next();
  });
};

export const adminAndCsMiddleware = (req, res, next) => {
  if (req.user.role !== "admin" && req.user.role !== "cs") {
    return res.status(403).json({
      message: "Only admin or customer service can apply this request",
    });
  }
  next();
};

export const csMiddleware = (req, res, next) => {
  if (req.user.role !== "cs") {
    return res.status(403).json({
      message: "Only customer service can apply this request",
    });
  }
  next();
};

export const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Only admin service can apply this request",
    });
  }
  next();
};

export const userMiddleware = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(403).json({
      message: "Only user can apply this request",
    });
  }
  next();
};

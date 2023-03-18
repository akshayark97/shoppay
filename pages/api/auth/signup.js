import nc from "next-connect";
import bcrypt from "bcrypt";

import User from "../../../models/User";
import { validateEmail } from "../../../utils/validation";
import db from "../../../utils/db";
import { createActivationToken } from "../../../utils/token";
import { sendEmail } from "../../../utils/sendEmails";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields." });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email." });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "This email already exist." });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters." });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: cryptedPassword });
    const addUser = await newUser.save()
    const activation_token = createActivationToken({
        id: addUser._id.toString()
    })
    const url = `${process.env.BASE_URL}/activate/${activation_token}`
    sendEmail(email, url, "", "Activate your account.")
    await db.disconnectDb()
    res.json({
      message: "Registration successful! Please activate your email to start."
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
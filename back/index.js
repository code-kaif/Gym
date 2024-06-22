import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

app.use(
  cors({
    origin: [process.env.frontendUrl],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return next(
      res.status(404).json({
        success: false,
        message: "Please enter all details",
      })
    );
  }
  try {
    await sendEmail({
      email: "sad928370@gmail.com",
      subject: "GYM WEBSITE",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Messege Send Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.listen(process.env.port, () =>
  console.log(`Server is running on ${process.env.port}`)
);

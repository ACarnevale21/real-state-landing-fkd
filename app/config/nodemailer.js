import nodemailer from "nodemailer";

const email = process.env.EMAIL_USERNAME;
const pass = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
  subject: "New message from contact form",
  text: "New message from contact form",
};

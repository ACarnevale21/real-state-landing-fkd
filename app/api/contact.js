import { mailOptions } from "../config/nodemailer";

const handler = async (req, res) => {
  const { name, email, message } = req.body;

  if (req.method === "POST") {
    const data = { name, email, message };
    if (!values.name || !values.email || !values.message) {
      return res.status(400).json({ message: "Wrong request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "This is a test email",
        html: `<h1>Text Title</h1><p>Some body text</p>`,
      });

      return req.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return req.status(400).json({ message: error.message });
    }
  }

  res.status(400).json({ message: "Wrong request" });
};

export default handler;

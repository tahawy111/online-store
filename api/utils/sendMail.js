import nodemailer from "nodemailer";

const sendMail = async (mailData) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "amer.vib582@gmail.com", pass: "mwigegzkbjjmgpmc" },
  });

  try {
    const res = await transport.sendMail(mailData);
    return res;
  } catch (error) {
    return error;
  }
};

export default sendMail;

"use server";
import nodemailer from "nodemailer";

// Validate SMTP configuration
function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !port || !user || !pass) {
    throw new Error("SMTP configuration is incomplete. Please check environment variables.");
  }

  // Create reusable transporter object using SMTP transport
  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
  });
}

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  try {
    // Validate inputs
    if (!to || !subject || !html) {
      return {
        success: false,
        error: "Missing required parameters: to, subject, or html",
      };
    }

    const transporter = getTransporter();
    const from = process.env.SMTP_FROM;

    if (!from) {
      return {
        success: false,
        error: "SMTP_FROM environment variable is not set",
      };
    }

    // Verify transporter configuration
    await transporter.verify();

    const info = await transporter.sendMail({
      from, // sender address
      to, // list of receivers
      subject, // Subject line
      html, // html body
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    
    // Check for authentication errors
    let userFriendlyError = errorMessage;
    if (errorMessage.includes("535") || errorMessage.includes("BadCredentials") || errorMessage.includes("Username and Password not accepted")) {
      userFriendlyError = "Lỗi xác thực Gmail: Vui lòng sử dụng App Password thay vì mật khẩu thông thường. Xem hướng dẫn tại: https://support.google.com/accounts/answer/185833";
    } else if (errorMessage.includes("EAUTH") || errorMessage.includes("Authentication failed")) {
      userFriendlyError = "Lỗi xác thực: Kiểm tra lại SMTP_USER và SMTP_PASS trong file .env.local. Đảm bảo bạn đang sử dụng App Password cho Gmail.";
    }
    
    return {
      success: false,
      error: userFriendlyError,
      details: error,
    };
  }
}

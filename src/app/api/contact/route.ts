import { sendEmail } from "@/lib/send-email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return NextResponse.json(
        { message: "Invalid JSON format" },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "Vui lòng điền đầy đủ thông tin (name, email, phone, message)" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Email không hợp lệ" },
        { status: 400 }
      );
    }

    // Validate SMTP environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_FROM || !process.env.SMTP_ME) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        { message: "Server configuration error: Missing SMTP settings" },
        { status: 500 }
      );
    }

    const [res1, res2] = await Promise.all([
      //send email to user
      sendEmail({
        to: email,
        subject: `Thông báo!, chúng tôi đã nhận được liên hệ từ khách hàng ${name}`,
        html: `
        <!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xác nhận thông tin liên hệ</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 20px 0;">
                <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                📧 Xác nhận thông tin
                            </h1>
                        </td>
                    </tr>
                    
                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <!-- Confirmation Message -->
                            <div style="background-color: #e8f5e8; border-left: 4px solid #4caf50; padding: 20px; margin-bottom: 30px; border-radius: 4px;">
                                <h2 style="color: #2e7d32; margin: 0 0 10px 0; font-size: 20px; font-weight: 600;">
                                    ✅ Chúng tôi sẽ xác nhận thông tin và sẽ liên hệ lại trong vòng 24 tiếng
                                </h2>
                                <p style="color: #388e3c; margin: 0; font-size: 14px;">
                                    Cảm ơn bạn đã liên hệ với chúng tôi. Thông tin của bạn đã được ghi nhận thành công.
                                </p>
                            </div>
                            
                            <!-- User Information -->
                            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; border: 1px solid #e9ecef;">
                                <h3 style="color: #495057; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #dee2e6; padding-bottom: 10px;">
                                    📋 Thông tin liên hệ
                                </h3>
                                
                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                                            <strong style="color: #495057; font-weight: 600; display: inline-block; width: 140px;">
                                                👤 Họ và tên:
                                            </strong>
                                            <span style="color: #6c757d; font-size: 16px;">${name}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                                            <strong style="color: #495057; font-weight: 600; display: inline-block; width: 140px;">
                                                📧 Email:
                                            </strong>
                                            <span style="color: #6c757d; font-size: 16px;">${email}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                                            <strong style="color: #495057; font-weight: 600; display: inline-block; width: 140px;">
                                                📱 Số điện thoại:
                                            </strong>
                                            <span style="color: #6c757d; font-size: 16px;">${phone}</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            
                            <!-- Message Content -->
                            <div style="margin-top: 25px;">
                                <h3 style="color: #495057; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                                    💬 Nội dung tin nhắn:
                                </h3>
                                <div style="background-color: #ffffff; border: 2px solid #e9ecef; border-radius: 8px; padding: 20px; line-height: 1.6;">
                                    <p style="color: #6c757d; margin: 0; font-size: 16px; white-space: pre-wrap;">${message}</p>
                                </div>
                            </div>
                            
                            <!-- Next Steps -->
                            <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin-top: 30px;">
                                <h4 style="color: #856404; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">
                                    ⏰ Bước tiếp theo
                                </h4>
                                <p style="color: #856404; margin: 0; font-size: 14px; line-height: 1.5;">
                                    Đội ngũ của chúng tôi sẽ xem xét thông tin và liên hệ với bạn qua email hoặc số điện thoại đã cung cấp trong vòng 24 giờ tới.
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e9ecef;">
                            <p style="color: #6c757d; margin: 0 0 10px 0; font-size: 14px;">
                                Cảm ơn bạn đã tin tưởng và lựa chọn dịch vụ của chúng tôi! 🙏
                            </p>
                            <p style="color: #adb5bd; margin: 0; font-size: 12px;">
                                Email này được gửi tự động, vui lòng không trả lời trực tiếp.
                            </p>
                            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                                <p style="color: #adb5bd; margin: 0; font-size: 11px;">
                                    © 2024 Công ty của bạn. Tất cả quyền được bảo lưu.
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `,
      }),

      //send email to admin
      sendEmail({
        to: process.env.SMTP_ME as string,
        subject: `Có liên hệ mới từ khách hàng ${name}`,
        html: `
   <!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thông báo khách hàng mới</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 20px 0;">
                <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                🔔 Thông báo khách hàng mới
                            </h1>
                        </td>
                    </tr>
                    
                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <!-- Alert Message -->
                            <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 20px; margin-bottom: 30px; border-radius: 4px;">
                                <h2 style="color: #856404; margin: 0 0 10px 0; font-size: 20px; font-weight: 600;">
                                    ⚡ Có thông tin liên hệ khách hàng mới vui lòng liên hệ với khách hàng trong vòng 24h
                                </h2>
                                <p style="color: #856404; margin: 0; font-size: 14px;">
                                    Một khách hàng mới vừa gửi thông tin liên hệ. Hãy phản hồi nhanh chóng để tạo ấn tượng tốt!
                                </p>
                            </div>
                            
                            <!-- Customer Information -->
                            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; border: 1px solid #e9ecef;">
                                <h3 style="color: #495057; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #dee2e6; padding-bottom: 10px;">
                                    👤 Thông tin khách hàng
                                </h3>
                                
                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                                            <strong style="color: #495057; font-weight: 600; display: inline-block; width: 140px;">
                                                📝 Họ tên:
                                            </strong>
                                            <span style="color: #6c757d; font-size: 16px; font-weight: 500;">${name}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                                            <strong style="color: #495057; font-weight: 600; display: inline-block; width: 140px;">
                                                📧 Email:
                                            </strong>
                                            <span style="color: #0066cc; font-size: 16px; text-decoration: underline;">
                                                <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                                            <strong style="color: #495057; font-weight: 600; display: inline-block; width: 140px;">
                                                📱 Số điện thoại:
                                            </strong>
                                            <span style="color: #0066cc; font-size: 16px;">
                                                <a href="tel:${phone}" style="color: #0066cc; text-decoration: none; font-weight: 500;">${phone}</a>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            
                            <!-- Message Content -->
                            <div style="margin-top: 25px;">
                                <h3 style="color: #495057; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                                    💬 Nội dung tin nhắn:
                                </h3>
                                <div style="background-color: #ffffff; border: 2px solid #e9ecef; border-radius: 8px; padding: 20px; line-height: 1.6;">
                                    <p style="color: #6c757d; margin: 0; font-size: 16px; white-space: pre-wrap;">${message}</p>
                                </div>
                            </div>
                            
                            <!-- Action Required -->
                            <div style="background-color: #f8d7da; border: 1px solid #f5c6cb; border-radius: 8px; padding: 20px; margin-top: 30px;">
                                <h4 style="color: #721c24; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">
                                    🚨 Hành động cần thiết
                                </h4>
                                <ul style="color: #721c24; margin: 10px 0 0 20px; font-size: 14px; line-height: 1.5;">
                                    <li>Liên hệ với khách hàng trong vòng <strong>24 giờ</strong></li>
                                    <li>Ghi nhận thông tin vào hệ thống CRM</li>
                                    <li>Cập nhật trạng thái xử lý sau khi liên hệ</li>
                                </ul>
                            </div>
                            
                            <!-- Quick Actions -->
                            <div style="text-align: center; margin-top: 30px;">
                                <table role="presentation" style="margin: 0 auto;">
                                    <tr>
                                        <td style="padding: 0 10px;">
                                            <a href="mailto:${email}" style="display: inline-block; background-color: #007bff; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                                                📧 Gửi Email
                                            </a>
                                        </td>
                                        <td style="padding: 0 10px;">
                                            <a href="tel:${phone}" style="display: inline-block; background-color: #28a745; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                                                📞 Gọi điện
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e9ecef;">
                            <p style="color: #6c757d; margin: 0 0 10px 0; font-size: 14px;">
                                Thông báo tự động từ hệ thống quản lý khách hàng 🤖
                            </p>
                            <p style="color: #adb5bd; margin: 0; font-size: 12px;">
                                Thời gian nhận: <span id="timestamp">${new Date().toLocaleString(
                                  "vi-VN"
                                )}</span>
                            </p>
                            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                                <p style="color: #adb5bd; margin: 0; font-size: 11px;">
                                    © 2024 Hệ thống CRM - Phòng Kinh doanh
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `,
      }),
    ]);

    if (!res1.success || !res2.success) {
      console.error("Email sending failed:", { res1, res2 });
      return NextResponse.json(
        { 
          message: "Gửi email thất bại",
          error: res1.success ? res2.error : res1.error
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Gửi email thành công" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { 
        message: "Server Error",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

import axios from 'axios';

interface EmailProps {
  sendTo: { email: string; name: string };
  subject: string;
  htmlContent: string;
  from?: { email: string; name: string };
  attachmentUrls?: string[];
}

interface ContactFormData {
  fullName: string;
  phone: string;
  workEmail: string;
  projectDetails: string;
  generatedImage?: string;
}

const DEFAULT_SENDER = { email: "noreply@arodos.com", name: "Arodos Website" };

export async function sendEmail(props: EmailProps) {
  const { sendTo, subject, htmlContent, from = DEFAULT_SENDER, attachmentUrls = [] } = props;

  const body: any = {
    from,
    to: sendTo,
    subject,
    htmlpart: htmlContent,
  };

  if (attachmentUrls.length > 0) {
    body.attachmentUrls = attachmentUrls;
  }

  try {
    const res = await axios.post("https://send-email-api-v4.backendservices.in", body, {
      timeout: 30000
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
}

export const generateContactFormTemplate = (data: ContactFormData) => {
  return `
<!DOCTYPE html>
<html>
<head>
    <title>New Client Enquiry</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 8px;">
        <h2 style="color: #F40202; margin-bottom: 20px;">New Client Enquiry - Arodos</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Full Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.fullName}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.phone}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Work Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.workEmail}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Project Details:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.projectDetails}</td>
            </tr>
        </table>
        
        ${data.generatedImage ? `
        <div style="margin-top: 20px;">
            <h3 style="color: #F40202; margin-bottom: 10px;">Generated Website Template:</h3>
            <img src="${data.generatedImage}" alt="Website Template" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #eee;" />
        </div>
        ` : ''}
        
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
            This enquiry was submitted through the Arodos website contact form.
        </p>
    </div>
</body>
</html>
  `;
};

export const sendContactFormEmail = async (formData: ContactFormData) => {
  console.log('📧 Sending email with data:', formData);
  const htmlContent = generateContactFormTemplate(formData);
  
  const emailData = {
    from: { email: "noreply@arodos.com", name: "Arodos Website" },
    sendTo: { email: "contact@arodos.com", name: "Arodos" },
    subject: "New Client Enquiry - Arodos",
    htmlContent,
    attachmentUrls: formData.generatedImage ? [formData.generatedImage] : []
  };
  
  console.log('📤 Email payload:', emailData);
  const result = await sendEmail(emailData);
  console.log('✅ Email sent successfully:', result);
  
  return result;
};
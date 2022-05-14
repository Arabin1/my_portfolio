import sendgrid from "@sendgrid/mail";
import { emailSuccessfulMessage } from "../../constants/utilities";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: process.env.SENDGRID_RECEIVER,
      from: process.env.SENDGRID_SENDER,
      subject: "Mail from portfolio",
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />      
      </head>
      
      <body>
        <div style="display: flex;justify-content: center;
        align-items: center;border-radius: 5px;overflow: hidden; 
        font-family: 'helvetica', 'ui-sans',serif;">  
            <div style="margin-left: 20px;margin-right: 20px;">
                <h3>A new mail from <span style="color: dodgerblue">
                    ${req.body.name}
                </span>, 
                their email is: ✉️${req.body.email} </h3>
                <div style="margin-top: -10px; font-size: 16px;">
                    <h4>Message:</h4>
                    <p style="border: 1px solid darkred; border-radius: 6px;
                    margin-top: -10px; padding: 10px; text-align: center">
                        ${req.body.message}
                    </p>              
                </div>
            </div>
        </div>
      </body>
      </html>\``,
    });
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json({ resMessage: error.message });
  }

  return res.status(200).json({ resMessage: emailSuccessfulMessage });
}

export default sendEmail;

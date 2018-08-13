var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'affiammuta@gmail.com',
        pass: '123@Market'
    }
});

exports.sendMail = function sendMail(email, subject, userName, messageBody, button){
  var mailTemplate  = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>Welcome to AffiaMmuta</title>
    <style>
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
        }

        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }

        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        table table table {
            table-layout: auto;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        a {
            text-decoration: none;
        }

        *[x-apple-data-detectors],
        .unstyle-auto-detected-links *,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .a6S {
            display: none !important;
            opacity: 0.01 !important;
        }

        img.g-img+div {
            display: none !important;
        }

        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            .email-container {
                min-width: 320px !important;
            }
        }

        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            .email-container {
                min-width: 375px !important;
            }
        }

        @media only screen and (min-device-width: 414px) {
            .email-container {
                min-width: 414px !important;
            }
        }
    </style>
    <style>
        .button-td,
        .button-a {
            transition: all 100ms ease-in;
        }

        .button-td-primary:hover,
        .button-a-primary:hover {
            background: #555555 !important;
            border-color: #555555 !important;
        }

        @media screen and (max-width: 600px) {
            .email-container p {
                font-size: 17px !important;
            }
        }
    </style>
</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #ffffff;">
    <center style="width: 100%; background-color: #ffffff;">
        <div style="max-width: 600px; margin: 0 auto;" class="email-container">
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 auto;">
                <td style="padding: 20px 0; text-align: center">
                    <img src="https://res.cloudinary.com/debugger/image/upload/v1533732905/affiaMmutaLogo-02.png" width="200" height="50" alt="alt_text" border="0" style="height: auto;line-height: 15px; background-color: #ffffff;display: block;
margin: auto;">
                </td>
                </tr>
                <tr>
                    <td style="background-color: #ffffff;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td style="padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">
                                    <h1 style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 25px; line-height: 30px; color: #333333; font-weight: normal;">Hello ${userName},</h1>
                                    <p style="margin: 0;">${messageBody}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 20px;">
                                    <!-- Button : BEGIN -->
                                    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: auto;">
                                        <tr>
                                            <td class="button-td button-td-primary" style="border-radius: 4px; background: #222222;">
                                                ${button}
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 40px !important;">
                                <tr>
                                    <td style="padding: 20px; font-family: sans-serif; font-size: 12px; line-height: 15px; text-align: center; color: #ffffff; background: #626A71;">
                                        <br> Talk to us on the phone (234) 815-0600-321
                                        <br>
                                        <span class="unstyle-auto-detected-links">
                                            <br>
                                            <br> Enugu Lifestyle & Golf City, Kilometer 7, Enugu Port Harcourt, Expressway Centenary
                                            City, Enugu Nigeria
                                            <br>
                                            <br> © 2018 AFFIAMMUTA</span>
                                    </td>
                                </tr>
                            </table>
        </div>
    </center>
    <h4 style="text-align: center">To stop recieving notifications, you can <a href="https://affiammuta.herokuapp.com">Unsubscribe</a></h4>
</body>
</html>`

    var mailOptions = {
        from: '"Affia-Mmuta.com"',
        to: email,
        subject: subject,
        html: `${mailTemplate}`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return false;
        } else {
          console.log('email sent: ' + info.response);
          return true;
        }
      });
}
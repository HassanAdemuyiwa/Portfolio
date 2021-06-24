const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();



// exports.sendMail = async (option) => {

    // create a transport object

        const auth = {

            // host: "smtp.mailtrap.io",
            // port: 2525,
            // auth: {
            //    user: "99827533b95429",
            //    pass: "231e8ea80d79bf"
            // }
            auth: {
                api_key: `${process.env.API_KEY}`,
                domain: `${process.env.MAILGUN_DOMAIN}`
            }
        }

        let transporter = nodemailer.createTransport(mailGun(auth));



        //Data
    const mailOptions = {
        
        from: "damilareadegoke3@gmail.com",
        to: 'ademuyiwahassan68@gmail.com',
        subject:"Contact form ",
        message: "I'd like to hire you"
        
        
        
        // from: `${option.name} <${option.email}>`,
        // to: 'ademuyiwahassan68@gmail.com',
        // subject:`Contact form- ${option.subject}`,
        // message: option.name
    };
    
    
//    await 
   transporter.sendMail(mailOptions, (err, data)=>{
            if(err) {
            //    cb
               (err, null);
            } else{
                // cb
                (null, data)
            }
    })


// }


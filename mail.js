const mailer = require('nodemailer')

const getEmailData = (to, name, template) =>{
    
}

const sendEmail =(to, name, type)=>{

    const smtpTransport = mailer.createTransport({
        service: 'Gmail',
        auth: {
            user:''
        }
    })

    const mail = getEmailData(to, name, type)




}
var nodemailer=require('nodemailer');
var transport =nodemailer.createTransport({
    service:'gmail', 
    auth:{
    user:'jyothikanavya03@gmail.com',
    pass:'zkorsnilemoyxima'
    }
});
var mailOptions={
    from:'jyothikanavya03@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'sending mail from 20A21A0522',
    text:'Good Morning Sir'
};
transport.sendMail(mailOptions, function(error, info){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('Email sent:' + info.response);
    }
});
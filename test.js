const nodemailer = require('nodemailer');
const email = {
  host: "smtp.mailtrap.io",
  port: "2525",
  secure: false,
  auth: {
    user: "e6a1e267feb5d8",
    pass: "edc0ad3bed1858"
  }
};
const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  })
}
let email_data = {
  from: 'tkksm@naver.com',
  to: "tkksm@naver.com",
  subject: "테스트 메일 입니다.",
  text: 'nodejs 한시간만에 끝내보자.'
}
send(email_data);

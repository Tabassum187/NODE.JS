// npm i nodemailer
let nodemailer = require("nodemailer")
require("dotenv").config()

let Email_Info = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

let Email_Body = {
    to: ["ravihaariqa@gmail.com", "samreenrafiq@aptechnorth.edu.pk"],
    from: process.env.EMAIL,
    subject: "Heyy Raviha!",
    html: "<h6>Heyy,<br/>Hope Youre doing well</h6><p>What's About you</p>"
}

Email_Info.sendMail(Email_Body, function (error, info) {
    if (error) {
        console.log("Something Went Wrong")
        console.log(error)
    } else {
        console.log(`Email Has been sent to ${Email_Body.to}`)
        console.log(info)
    }
})

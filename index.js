const express = require('express');
const axios = require('axios');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
})
)

app.post('/new-message', function (req, res) {

    const { message } = req.body;

    if (!message || message.text.toLowerCase().indexOf("shelby") < 0) {
        return res.end()
    }

    axios.post(
        "https://api.telegram.org/bot6288932371:AAGr-up4Cb9KGigUFV-W3uSqoBdAn9tjHCM/sendMessage",
        {
            chat_id: message.chat.id,
            text: "Hello boy!!"
        }
    ).then((response) => {
        console.log("message posted")
        res.end("ok")
    }).catch((err) => {
        console.log("Error:", err)

        res.end("Error :", + err)

    })
})






app.listen(3000, function () {
    console.log("Telegram app listening on port 3000!")
})

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser"); // Import cookie-parser
const UserModal = require("./models/User")

const app = express()


app.use(express.json())
app.use(cors({
    origin: ["http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser()); 


mongoose.connect('mongodb://127.0.0.1:27017/employee');

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, 10)
        .then(hash => {
            UserModal.create({ name, email, password: hash })
                .then(user => res.json("Success"))
                .catch(err => res.json(err))
        }).catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    UserModal.findOne({ email: email })
        .then(user => {
            if (user) {

                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email, password: user.password },
                            "jwt-secret-key", { expiresIn: '3d' })
                            console.log("token - ",token)
                            const useVar= jwt.verify(token,  "jwt-secret-key" );
                            console.log("useVar - ",useVar)

                        res.cookie('token', token)
                        console.log(req.cookies.token)
                        return res.json({Status : "Success"})
                    }
                    else {
                        return res.json("pass is incorrect")

                    }
                })
            } else {
                return res.json("no record found")
            }
        })
})


  




app.listen(3002, () => {
    console.log("running..")
})
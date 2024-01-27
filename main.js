require("dotenv").config()
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const patientModel = require("./models/patient")

const port = process.env.PORT || 4000;

const doctors = [
  { id: 1, name: "dilip joshi", city: "bhopal" },
  { id: 2, name: "arvind singh", city: "bhopal" },
  { id: 3, name: "arun sharma", city: "mumbai" },
  { id: 4, name: "rahul arya", city: "mumbai" },
  { id: 5, name: "ajay singh", city: "bhopal" },
  { id: 6, name: "mohan kumar", city: "mumbai" },
  { id: 7, name: "akshay rawat", city: "bhopal" },
]


//database connection
mongoose.connect(process.env.DB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// middlewares
app.use(express.json({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get('/doctors', (req, res) => {
  res.json(doctors)
})

app.post("/appointment", async (req, res, next) => {
  const response =  await patientModel.create({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      age: req.body.age,
      city: req.body.city,
      company: req.body.company,
      chiefComplaints: req.body.chiefComplaints,
      doctor: req.body.doctor
     
    });
    console.log("body", req.body)
    console.log("response", response)
    })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
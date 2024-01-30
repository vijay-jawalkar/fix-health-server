require("dotenv").config()
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const patientModel = require("./models/patient")

const port = process.env.PORT || 4000;

const doctors = [
  { id: 1, name: "Dr Kshama Mangal (PT)", city: "bhopal", qualification: "M.Sc (Advanced Sports Therapy & Rehabilitation Science)", image: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa0u75w265gnx%2F6YgFxi30kXv1oentAwEo7m%2Ff8a62977ee51c8ab296bb484751bc59f%2Fno_bg_kshama.png&w=1920&q=75" },
  { id: 2, name: "Dr Ritika Saxena (PT)", city: "bhopal", qualification: "M.Sc (Neuro Rehabitilation)", image: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa0u75w265gnx%2F5WfYG9JlQObYfuPIVBHWgB%2F0a2322ed704f2932f695abfa19859b5f%2Fno_bg_ritika.png&w=1920&q=75" },
  { id: 3, name: "Dr Namita Singh (PT)", city: "mumbai", qualification: "MPTh (Musculoskeletal)", image: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa0u75w265gnx%2F4YLmowX4oqZwNchAIExAs2%2Feef3f24c5fabdce934eaa50444788d9b%2Fno_bg_namita.png&w=1920&q=75" },
  { id: 4, name: "Dr Radhika Kaple (PT)", city: "mumbai", qualification: "MPTh (Musculoskeletal Sciences)", image: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa0u75w265gnx%2F3HISMVOTWHyZrjFklmtCne%2Faffa80a20cb88f10c6b8f0fa4a5545b2%2FUntitled_design__14_.png&w=1920&q=75" },
  { id: 5, name: "Dr Sheetal Lelani (PT)", city: "bhopal", qualification: "MPTh (Neuro-physiotherapy & Psychosomatic disorders)", image: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa0u75w265gnx%2F6NGb5LGV3dPZ6GEnHErP73%2F5cd0a98262769f50170402aeede3ff99%2FUntitled_design__16_.png&w=1920&q=75" },
  { id: 6, name: "Dr Manasi Bane (PT)", city: "mumbai", qualification: "MPTh (Neuro Sciences)", image: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fa0u75w265gnx%2F3jp2iwbMUd4uK51QDd0eLK%2Fe2caf2899fe1b1d316c145f80c18326a%2FUntitled_design__10_.png&w=1920&q=75" },
 
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
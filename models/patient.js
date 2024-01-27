const mongoos = require("mongoose");

const patientSchema = new mongoos.Schema({
    name: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    chiefComplaints: {
        type: String,
        require: true
    },
    doctor: {
        type: String,
        require: true
    },
    
})

module.exports = mongoos.model("Patient", patientSchema)
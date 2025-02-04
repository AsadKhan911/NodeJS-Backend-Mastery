const mongoose = require('mongoose')
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is already present"], //if you want to throw error on spot, otherwise unique: true is enough.
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: String,
        required: true,
        unique: [true, "Phone Number already in use"],
        validate(value) {
            if (!validator.isMobilePhone(value, 'en-PK')) { //en-PK verifies according to pakistan phone numbers.
                throw new Error("Invalid Phone Number")
            }
        }
    },
    address: {
        type: String,
        required: true
    }
})

//We will create a new collection using this model now.

const StudentModel = new mongoose.model('Studentcollection' , studentSchema)

module.exports = StudentModel //exporting this model
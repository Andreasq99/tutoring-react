import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
    
},{
    toJSON:{
        virtuals: true
    }
}
);

appointmentSchema.virtual('thisWeeksAppointments')
.get(()=>{
    const now = new Date(Date.now());

});

const Appointment = mongoose.model('appointment', appointmentSchema);

export {appointmentSchema, Appointment};
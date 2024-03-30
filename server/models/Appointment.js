import { Schema, Model } from "mongoose";

const appointmentSchema = new Schema({
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

const Appointment = new Model('appointment', appointmentSchema);

export {appointmentSchema, Appointment};
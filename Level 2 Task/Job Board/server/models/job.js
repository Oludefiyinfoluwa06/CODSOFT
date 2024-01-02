const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    jobDesc: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    employer: {
        type: Schema.Types.ObjectId,
        ref: 'Employer',
        required: true,
    },
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
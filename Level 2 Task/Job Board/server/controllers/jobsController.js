const Job = require('../models/job');

const getJobs = async (req, res) => {
    await Job.find()
        .then(jobs => res.json({ jobs: jobs }))
        .catch(err => res.json({ error: err }));
}

const postJob = async (req, res) => {
    const { title, category, location, jobType, jobDesc, companyName, email, employer } = req.body;
    const job = await new Job({ title, category, location, jobType, jobDesc, companyName, email, employer: employer._id });
    job.save()
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ error: err }));
}

const getJobDetails = async (req, res) => {
    const jobId = req.params.jobId;

    try {
        const result = await Job.findById(jobId);
        if (!result) {
            return res.status(404).json({ error: 'Job not found' });
        }

        res.json({ result: result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const searchJob = async(req, res) => {
    const searchQuery = req.params;

    await Job.find({ searchQuery })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ error: err }));

}

module.exports = {
    getJobs,
    postJob,
    getJobDetails,
    searchJob,
}
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
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

const searchJob = async (req, res) => {
    const searchQuery = req.params.searchQuery;

    try {
        const search = await Job.find({ title: { $regex: searchQuery, $options: 'i' } });
        if (!search) {
            res.status(404).json({ error: "Job not found" });
        }

        res.status(200).json({ searchResults: search });
    } catch (error) {
        res.status(500).json({ error: error })
    }

}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../resume_uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

const upload = multer({
    storage: storage
}).single('resume');

const applyForJob = async (req, res) => {
    const jobId = req.params.jobId;

    try {
        const result = await Job.findById(jobId);
        if (!result) {
            return res.status(404).json({ error: 'Job not found' });
        }

        const to = result.email;
        const companyName = result.companyName;

        upload(req, res, (err) => {
            if (err) {
                console.log(err);
                return res.status(401).json({ error: err.message });
            }

            let subject = `Application for Job at ${companyName}`;
            let name = req.body.name;
            let email = req.body.email;
            let coverLetter = req.body.coverLetter;
            let resume = req.file.path;
            let body = `
                Name: ${name}
                Email: ${email}
                Cover Letter: ${coverLetter}
            `;

            const resumeContent = fs.readFileSync(resume, 'utf8');

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "oludefiyinfoluwa06@gmail.com",
                    pass: 'snrq dbzx mphb lojd'
                }
            });

            const mailOptions = {
                from: email,
                to: to,
                subject: subject,
                text: body,
                attachments: [
                    {
                        filename: name + '_resume.pdf',
                        content: resumeContent,
                    }
                ]
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to send email' });
                }

                res.status(200).json({ msg: "Application sent successfully" });
            });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



module.exports = {
    getJobs,
    postJob,
    getJobDetails,
    searchJob,
    applyForJob,
}
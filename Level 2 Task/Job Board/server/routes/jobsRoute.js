const { postJob, getJobs, searchJob, getJobDetails, applyForJob } = require("../controllers/jobsController");

const router = require("express").Router();

router.get('/jobs', getJobs);
router.post('/jobs', postJob);
router.get('/jobs/:jobId', getJobDetails);
router.get('/jobs/search/:searchQuery', searchJob);
router.post('/jobs/apply/:jobId', applyForJob);

module.exports = router;
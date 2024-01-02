const { postJob, getJobs, searchJob, getJobDetails } = require("../controllers/jobsController");

const router = require("express").Router();

router.get('/jobs', getJobs);
router.post('/jobs', postJob);
router.get('/jobs/:jobId', getJobDetails);
router.get('/jobs/search/:searchQuery', searchJob);

module.exports = router;
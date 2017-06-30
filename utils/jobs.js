const jobList = require('./../config/jobs.config.json');

class Jobs {
    constructor() {
        this.jobs = jobList.list;
    };

    findJobByPath(path) {
        return this.jobs.find((job) => {
            var re = new RegExp(job.defaultSvnPath, "g");
            var result = path.match(re);
            return  result !== null && result.length > 0;
        });
    };

    // Example: protocol://id:apiKey@host:port/job/jobName/build?token=jobToken
    getUri(job) {
        return `${job.protocol}://${job.role}:${job.apiKey}@${job.host}:${job.port}/job/${job.jobName}/build?token=${job.jobToken}`;
    };
};

module.exports = {Jobs};
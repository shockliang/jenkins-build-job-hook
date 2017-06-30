// Example: protocol://id:apiKey@host:port/job/jobName/build?token=jobToken
// const jobs = [{
//     id: 1,
//     protocol: 'http',       // http or https
//     host: '192.168.10.247',
//     port: '8080',
//     role: 'sschook',
//     apiKey: '12345678',
//     jobName: 'SSC.dev',
//     jobToken: 'asdf',
//     defaultSvnPath: 'branches/dev/',

// }];

class Jobs {
    constructor() {
        this.jobs = [];
    };

    findIdByPath(path) {
        return this.jobs.find((job) => {
            var re = new RegExp(job.defaultSvnPath, "g");
            var result = path.match(re);
            return  result !== null && result.length > 0;
        });
    };
    
    getUri(job) {
        return `${job.protocol}://${job.role}:${job.apiKey}@${job.host}:${job.port}/job/${job.jobName}/build?token=${job.jobToken}`;
    };
};

module.exports = {Jobs};
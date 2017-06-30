// Example: protocol://id:apiKey@host:port/job/jobName/build?token=jobToken
const jobs = [{
    id: 1,
    protocol: 'http',       // http or https
    host: '192.168.10.247',
    port: '8080',
    role: 'sschook',
    apiKey: '123',
    jobName: 'SSC.dev',
    jobToken: 'asdf',
    defaultSvnPath: 'branches/dev/',

}];

class Jobs {
    constructor() {
        this.jobs = [];
    };

    findIdByPath(path) {
        return jobs.find((job) => {
            var re = new RegExp(job.defaultSvnPath, "g");
            var result = path.match(re);
            return  result !== null && result.length > 0;
        });
    };
};

module.exports = {Jobs};
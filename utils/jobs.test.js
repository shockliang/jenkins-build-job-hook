const expect = require('expect');
const {Jobs} = require('./jobs');

var jobs;

describe('Jobs', () => {

    beforeEach(() => {
        jobs = new Jobs();
        jobs.jobs = [{
            id: 1,
            protocol: 'http',       // http or https
            host: '192.168.10.247',
            port: '8080',
            role: 'sschook',
            apiKey: '123456',
            jobName: 'SSC.dev',
            jobToken: 'asdf',
            defaultSvnPath: 'branches/dev/',

        }, {
            id: 2,
            protocol: 'http',       // http or https
            host: '192.168.10.247',
            port: '8080',
            role: 'sschook',
            apiKey: '123456',
            jobName: 'SSC.qat',
            jobToken: '1qaz',
            defaultSvnPath: 'branches/qat/',
        }];
    });

    it('should be find the job when pass correct path',() => {
        var job = jobs.findJobByPath('U   branches/dev/test.txt');
        expect(job.id).toEqual(1);
    });

    it('should return undefined when path doesnt find', () => {
        var job = jobs.findJobByPath('U   trunk/test.txt');
        expect(job).toEqual(undefined);
    });

    it('should get url when pass job', () => {
        var job = jobs.findJobByPath('U   branches/dev/test.txt');
        
        var expectUri = 'http://sschook:123456@192.168.10.247:8080/job/SSC.dev/build?token=asdf';
        var actualUri = jobs.getUri(job);

        expect(actualUri).toEqual(expectUri);
    });
});
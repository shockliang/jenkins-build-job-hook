const yargs = require('yargs');
const axios = require('axios');
const fs = require('fs');
const argsOptions = require('./args.options.js');
const {Jobs} = require('./utils/jobs');

const argv = yargs
    .command('build', 'build the remote jenkins job', {
        path: argsOptions.pathOption
    })
    .help()
    .alias('help', 'h')
    .argv;

if(fs.existsSync(argv.path)) {
    fs.readFile(argv.path, (err, data) => {
        if(err) throw err;
        var paths = data.toString().split(/\r?\n/);
        var jobs = new Jobs();
        var job = jobs.findJobByPath(data.toString());

        axios.get(jobs.getUri(job)).then((response) => {
            console.log('send request successfully');
        }).catch((e) => {
            console.log(e);
        });
    });
}

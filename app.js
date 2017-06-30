const yargs = require('yargs');
const axios = require('axios');
const argsOptions = require('./args.options.js');

const argv = yargs
    .command('build', 'build the remote jenkins job', {
        path: argsOptions.pathOption
    })
    .help()
    .alias('help', 'h')
    .argv;

var command = argv._[0];

// axios.get(apiUrl).then((response) => {
//     console.log('Has triggered!');
// }).catch((e) => {
//     console.log(e);
// });


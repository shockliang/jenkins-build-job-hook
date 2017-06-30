const yargs = require('yargs');
const axios = require('axios');
const argsOptions = require('./args.options.js')
const request = require('request');
// const fileExporter = require('./file-exporter.js');

const argv = yargs
    .command('build', 'build the remote jenkins job', {
        role: argsOptions.roleOption,
        apiKey: argsOptions.apiKeyOption,
        jobName: argsOptions.jobNameOption,
        host: argsOptions.hostOption,
        protocol: argsOptions.protocolOption,
        port: argsOptions.portOption,
        buildNumber: argsOptions.buildNumberOption,
        // outputFileName: argsOptions.outputFileNameOption,
    })
    .help()
    .alias('help', 'h')
    .argv;

var command = argv._[0];

var apiUrl = argv.host + (argv.port !== undefined && typeof argv.port === 'number'? `:${argv.port}` : `80` );
apiUrl = `${argv.protocol}://${argv.role}:${argv.apiKey}@${apiUrl}/job/${argv.jobName}/build?token=${argv.token}`;

console.log(apiUrl);

axios.get(apiUrl
).then((response) => {
    // For template tag using. Move the affected path data into the paths data
    // that make the data at the same level.
    // response.data.changeSet.items.forEach((element, index, ary) => {
    //     var affectedPaths = element.affectedPaths;
    //     for (var i = 0; i < affectedPaths.length; i++) {
    //         var path = affectedPaths[i];
    //         element.paths[i].affectedPath = path;
    //     }
    // });

    console.log('Has triggered!');

    // fileExporter.output(response.data.changeSet, argv.outputFileName);

}).catch((e) => {
    console.log(e);
});


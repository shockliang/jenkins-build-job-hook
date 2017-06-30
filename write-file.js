const fs = require('fs');

var date = new Date().getTime();
var outputFileName = 'trigger.log';
var contents =`test trigger node js. Time:${date}`;

fs.writeFile(outputFileName, contents, (err) => {
    if (err) {
        return console.error(`Autsch! Failed to store template: ${err.message}.`);
    }

    console.log(`Saved template!`);
});

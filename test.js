const Jobrunner = require('./index.js');
//const jobrunner = new Jobrunner({settings_path:"./settings.json"});
const jobrunner = new Jobrunner();
jobrunner.buildJob({type: "bitrise",test:"test"});
jobrunner.pantheon.buildJob({test:"test"});
console.log(jobrunner.buildArg());
console.log(jobrunner);

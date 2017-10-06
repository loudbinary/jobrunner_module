let instance;
const _ = require('lodash');
const uuid = require('uuid/v4'); //Based on Version 4 (random)
const jobLib = require('../libs/job.js')

/**
 * Child of {Jobrunner}
 * @constructor
 */
function Bitrise(){

    if (_.isNil(instance)){
        instance = this;
        instance.name = 'Bitrise';
        instance.jobs = () =>{
            return _.filter(jobLib.jobs,(job)=>{
                return job.group === instance.name.toLowerCase();
        })}
        instance.buildJob = (args) => {
            let arguments = args || {}
            if (_.isNil(arguments.group)){
                arguments.group = instance.name.toLowerCase();
            }

            if (_.isNil(arguments.type)){
                arguments.type = instance.name.toLowerCase();
            }

            return jobLib.buildJob(arguments);
        }
        instance.process = function(all){
            if (!_.isNil(all)){
                console.log('processing all jobs in queue', instance.jobs.length);
            }
        }
    }
    instance.getJobs = function (groupName){
        let _groupName = groupName || instance.name.toLowerCase();
        return _.compact(_.map(jobLib.jobs,(job)=>{
            if (job.group == _groupName ){
                return job;
            }
        }));
    }
    return instance;
}

module.exports = Bitrise;

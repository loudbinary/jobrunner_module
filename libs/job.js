const uuid = require('uuid/v4'); //Based on Version 4 (random)
const _ = require('lodash');
const jobs = [];


function getJobs (groupName){
    let _groupName = groupName || 'jobrunner'
    return _.compact(_.map(jobs,(job)=>{
        if (job.group == _groupName ){
            return job;
        }
    }));
}
/**
 * Immutable Job Base Object
 * @param args
 * @returns {job}
 */
function job(args) {
    let group = args.group || 'bitrise';
    let _uuid = uuid();
    let id = _uuid;
    let name = group + '-' + jobs.length;
    this.name = name;
    this.group = group;
    this.id = id;
    let ts = new Date().getTime();
    this.ts = ts;

    /**
     * Pops next object off of instance.jobs that filters {job.name} to assets matching up to dash.
     */
    this.next = ()=>{
        return instance.jobs.pop();
    }
}


function buildJob(arguments) {
    if (_.isNil(arguments.group)){
        arguments.group = "jobrunner";
    }
    let newJob = new job(arguments);
    jobs.push(newJob);
    return newJob;
}

module.exports.job = job;
module.exports.jobs = jobs;
module.exports.getJobs = getJobs;
module.exports.buildJob = buildJob;

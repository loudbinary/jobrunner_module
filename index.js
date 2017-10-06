const _ = require('lodash');
let Pantheon = require('./classes/Pantheon');
let Bitrise = require('./classes/Bitrise')
let jobLib = require('./libs/job.js');
const path = require('path');
let instance;

function Jobrunner(config) {
    if (_.isNil(instance)) {
        instance = this;
        if (_.isNil(config)){
            config = {};
        }
        instance.name = "Jobrunner"
        instance.jobs = jobLib.jobs;
        instance.pantheon = new Pantheon();
        instance.bitrise = new Bitrise();
        instance.buildJob = function(args){
            instance = this;
            let arguments = args || {}
            if (_.isNil(arguments.type)){
                return new Error("Missing job type:<pantheon,bitrise>")
            }
            switch(arguments.type) {
                case "pantheon":
                    return instance.pantheon.buildJob(arguments);
                    break;
                case "bitrise":
                    return instance.bitrise.buildJob(arguments);
                    break;
            }
        }
        if (_.isNil(config.settings_path)){
            instance.settings_path = './settings.json'
            instance.allConfigurations = require(instance.settings_path);
        } else {
            instance.settings_path = config.settings_path
            instance.allConfigurations = require(instance.settings_path)
        }
    }
    return instance;
}
module.exports = Jobrunner;

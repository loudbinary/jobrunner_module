const jobrunner = require('../index.js')
 /*
    Each job needs a copy of arguments preserved at startJob.
    Module will export the buildArguments
    This module should only be consumed from submodules.
 */

/**
 * Builds out arguments for job processing.
 * @param arguments Array of command line switches -r --environment, etc.
 */
function buildArg(arguments){
    //First argument is always platform name
    let platformName = arguments[0]
    let platformConfig = _.filter(instance.allConfigurations,(config)=>{
        return config === platformName;
    })
}

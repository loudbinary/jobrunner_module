const Jobrunner = require('../index.js');
const jobrunner = new Jobrunner();
const expect = require('chai').expect;
const _ = require('lodash');


describe('Jobrunner module', () => {
    describe('"name"', () => {
        it('should be a string', () => {
            expect(jobrunner.name).to.be.a('string');
        })
        it('should have value bitrise', () => {
            expect(jobrunner.name).to.include('Jobrunner');
        })
    })

    describe('"jobs"',()=>{
        it('should have a length of 4',()=>{
            expect(jobrunner.jobs).to.have.lengthOf(4)
        })

        it('should 2 job with group value of pantheon',()=>{
            let pantheonJob = _.filter(jobrunner.jobs,(job)=>{
                return job.group === 'pantheon'
            })
            expect(pantheonJob).to.have.lengthOf(2)
        })

        it('should 2 job with group value of bitrise',()=>{
            let bitriseJob = _.filter(jobrunner.jobs,(job)=>{
                return job.group === 'bitrise'
            })
            expect(bitriseJob).to.have.lengthOf(2)
        })

        it('pantheon and bitrise jobs should total jobrunner',()=>{
            let total = jobrunner.pantheon.jobs().length + jobrunner.bitrise.jobs().length;
            expect(total).to.equal(jobrunner.jobs.length)
        })
    })


})
describe('Jobrunner buildJob function',()=>{
    describe('"buildJob argument type:bitrise"', ()=> {

        it('should be a function', ()=> {
            expect(jobrunner.buildJob).to.be.a('function');
        });
        let job = jobrunner.buildJob({type:"bitrise"});
        it('job should have "group" property', ()=>{
            expect(job).to.have.property('group')
        });

        it('job should have group value equal to bitrise', ()=>{
            expect(job.group).to.include('bitrise');
        });

        it('job should have "id" property', ()=>{
            expect(job).to.have.property('id')
        });

        it('job should have "ts" property', ()=>{
            expect(job).to.have.property('ts');
        });

        it('jobs array should now have 4 jobs', ()=>{
            expect(jobrunner.jobs).to.have.lengthOf(4)
        })

    })
    describe('"buildJob argument type:pantheon"', ()=> {
        it('should be a function', ()=> {
            expect(jobrunner.buildJob).to.be.a('function');
        });
        let job = jobrunner.buildJob({type:"pantheon"});
        it('job should have "group" property', ()=>{
            expect(job).to.have.property('group')
        });

        it('job should have group value equal to pantheon', ()=>{
            expect(job.group).to.include('pantheon');
        });

        it('job should have "id" property', ()=>{
            expect(job).to.have.property('id')
        });

        it('job should have "ts" property', ()=>{
            expect(job).to.have.property('ts');
        });

        it('jobs array should now have 4 jobs', ()=>{
            expect(jobrunner.jobs).to.have.lengthOf(4)
        })

    })
})

describe('Jobrunner custom configurations',()=>{
    describe('settings.json',()=>{
        it('filepath is set in jobrunner.settings_path',()=>{
            expect(jobrunner.settings_path).to.include('./settings.json');
        })
    })
})


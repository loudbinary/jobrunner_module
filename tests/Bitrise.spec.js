const Bitrise = require('../classes/bitrise');
const bitrise = new Bitrise();
const expect = require('chai').expect;
const _ = require('lodash');

describe('Bitrise sub module', () => {
    describe('"name"', () => {
        it('should be a string', () => {
            expect(bitrise.name).to.be.a('string');
        })
        it('should have value bitrise', () => {
            expect(bitrise.name).to.include('Bitrise');
        })
    })

    describe('"buildJob with no arguments"', ()=> {

        it('should be a function', ()=> {
            expect(bitrise.buildJob).to.be.a('function');
        });
        let job = bitrise.buildJob();
        it('job should have "group" property', ()=>{
            expect(job).to.have.property('group')
        });

        it('job should have group value equal to pantheon', ()=>{
            expect(job.group).to.include('bitrise');
        });

        it('job should have "id" property', ()=>{
            expect(job).to.have.property('id')
        });

        it('job should have "ts" property', ()=>{
            expect(job).to.have.property('ts');
        });

    })
    describe('"jobs"', () => {
        it('should export a function', () => {
            expect(bitrise.jobs).to.be.a('function')
        })

        it('should have a length greater than 0', () => {
            expect(bitrise.jobs().length).to.be.above(0)
        })
    })

    describe('"getJobs"', () => {
        it('should be a function',()=>{
            expect(bitrise.getJobs).to.be.a('function');
        })

        let jobs = bitrise.getJobs();
        it('should have a length greater than 0', ()=>{
            expect(jobs.length).to.be.above(0)
        })

        it('all jobs should have "group" pantheon as value',()=>{
            _.each(jobs,(job)=>{
                expect(job.group).to.include('bitrise');
            })
        })
    })
})

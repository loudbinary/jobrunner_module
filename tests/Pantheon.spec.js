const Pantheon = require('../classes/pantheon');
const pantheon = new Pantheon();
const expect = require('chai').expect;
const _ = require('lodash');

describe('Pantheon sub module', () => {
    describe('"name"', () => {
        it('should be a string', () => {
            expect(pantheon.name).to.be.a('string');
        })
        it('should have value pantheon', () => {
            expect(pantheon.name).to.include('Pantheon');
        })
    })

    describe('"buildJob with no arguments"', ()=> {

        it('should be a function', ()=> {
            expect(pantheon.buildJob).to.be.a('function');
        });
        let job = pantheon.buildJob();
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

    })
    describe('"jobs"', () => {
        it('should export a function', () => {
            expect(pantheon.jobs).to.be.a('function')
        })

        it('should have a length of 2', () => {
            expect(pantheon.jobs()).to.have.lengthOf(2)
        })
    })

    describe('"getJobs"', () => {
        it('should be a function',()=>{
            expect(pantheon.getJobs).to.be.a('function');
        })

        let jobs = pantheon.getJobs();
        it('should have a length of 2', ()=>{
            expect(jobs).to.have.lengthOf(2);
        })

        it('all jobs should have "group" pantheon as value',()=>{
            _.each(jobs,(job)=>{
                expect(job.group).to.include('pantheon');
            })
        })
    })
})

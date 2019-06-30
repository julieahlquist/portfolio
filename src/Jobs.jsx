import React, { Component } from "react"
import axios from "axios"
import JobCard from "./JobCard"

class Jobs extends Component {
    constructor () {
        super();
        this.state = {
            jobs: [ ]
        };
    }

    componentDidMount() {
        axios.get('./src/data/jobs.json')
            .then(response => {
                this.setState({
                    jobs: response.data
                })
            })
    }

    render () {
        const jobs = this.state.jobs
        let jobsList

        if (jobs.length > 0) {
            jobsList = jobs.map(job => {
                return (
                    <div key={job.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <JobCard job={job} />
                    </div>
                )
            })
        }

        return (
            <div className="content-wrapper">
                <div className="flex mb-4">

                    <div className="w-3/4">
                        <h1>My Jobs</h1>
                        <p>This is the companies I been working at.</p>
                    </div>

                </div>

                <div>
                    <div className="flex flex-wrap mx-2 lg:-mx-4">
                    {jobsList}
                    </div>
                </div>
            </div>
        )
    }
};

export default Jobs
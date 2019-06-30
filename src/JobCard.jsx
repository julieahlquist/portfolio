import React from "react"

const JobCard = (props) => {
    let job = props.job
    return (
        
        <div key={job.id} className="overflow-hidden">
            <img src={job.image} className="block h-auto w-full rounded-full" style={{ height: '180px', objectFit: 'cover' }} />

            <div className="px-6 py-4" style={{ minHeight: '80px' }} >
                <div className="font-mono text-xl text-center text-grey-lighter mb-2">{job.name}</div>
                <p className="text-grey-lighter text-center text-base">
                    {job.description}
                    {job.time}
                </p>
            </div>

            <div className="btn-wrapper">
                <a href={job.website} target="_blank" className="btn">Company</a>
            </div>
        </div>
    )
}

export default JobCard
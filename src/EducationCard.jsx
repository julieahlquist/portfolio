import React from "react"

const EducationCard = (props) => {
    let education = props.education
    return (
        
        <div key={education.id} className="overflow-hidden">
            <img src={education.image} className="block h-auto w-full rounded-full" style={{ height: '180px', objectFit: 'cover' }} />

            <div className="px-6 py-4" style={{ minHeight: '80px' }} >
                <div className="font-mono text-xl text-center text-grey-lighter mb-2">{education.name}</div>
                <p className="text-grey-lighter text-center text-base">
                    {education.description}
                    {education.time}
                </p>
            </div>

            <div className="btn-wrapper">
                <a href={education.website} target="_blank" className="btn">Website</a>
            </div>
        </div>
    )
}

export default EducationCard
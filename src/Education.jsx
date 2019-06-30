import React, { Component } from "react"
import axios from "axios"
import EducationCard from "./EducationCard"
import { UndrawBookLover } from 'react-undraw-illustrations';

class Educations extends Component {
    constructor () {
        super();
        this.state = {
            educations: [ ]
        };
    }

    componentDidMount() {
        axios.get('./src/data/educations.json')
            .then(response => {
                this.setState({
                    educations: response.data
                })
            })
    }

    render () {
        const educations = this.state.educations
        let educationsList

        if (educations.length > 0) {
            educationsList = educations.map(education => {
                return (
                    <div key={education.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <EducationCard education={education} />
                    </div>
                )
            })
        }

        return (
            <div className="content-wrapper">
                <div className="flex mb-4">
                    <div className="w-1/4">
                        <UndrawBookLover primaryColor='#12283a' height='200px' />
                    </div>
                    <div className="w-3/4">
                        <h1>My Educations</h1>
                        <p>This is my education.</p>
                    </div>

                </div>

                <div>
                    <div className="flex flex-wrap mx-2 lg:-mx-4">
                    {educationsList}
                    </div>
                </div>
            </div>
        )
    }
};

export default Educations
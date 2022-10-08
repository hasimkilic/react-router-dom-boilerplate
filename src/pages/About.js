import React from 'react'
import AboutComponent from '../components/AboutComponent'
function About({ data }) {
    const title = "About"
    return (
        <div>  
            <AboutComponent title={title} data={data}/>
        </div>
    )
}

export default About
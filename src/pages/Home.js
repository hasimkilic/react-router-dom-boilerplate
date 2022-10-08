import React from 'react'
import HomeComponent from '../components/Home.component';
import '../App.css';
function Home() {
    const title = "Home";
    return (
        <div>
            <HomeComponent title={title}/>
        </div>
    )
}

export default Home
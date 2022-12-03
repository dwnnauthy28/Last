import React from 'react'
import { Landing } from '../components/Landing';
import { Campus } from '../components/Campus';
import { Departments } from '../components/Departments';
import { Footer } from '../components/Footer';

function Homepage(){
    return(
        <div className="App">
            <Landing />
            <Campus />
            <Departments />
            <Footer />
        </div>
    )
}

export default Homepage;
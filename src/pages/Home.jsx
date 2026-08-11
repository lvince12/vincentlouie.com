import React  from 'react';
import email from '../assets/email-outline.svg'
import git from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import arrow from '../assets/arrow-down.svg'

function Home() {
    return (
        <>
        <div className="top" id="top">
            <div className="name">Vincent Louie</div>
            <div className="break"></div>
            <div>Computer Science Student</div>
            <div className="break"></div>
            <a href="mailto:vincentsciguy@gmail.com"><img src={email} alt="E-Mail"/></a>
            <a href="https://github.com/godbil"><img src={git} alt="GitHub"/></a>
            <a href="https://www.linkedin.com/in/vincent-louie-66447a224/"><img src={linkedin} alt="LinkedIn"/></a>
        </div>
        <div className='arrow'>
            <a className='arrow' href="#about"><img src={arrow} alt="Arrow"/></a>
        </div>
    </>
    );
}

export default Home;
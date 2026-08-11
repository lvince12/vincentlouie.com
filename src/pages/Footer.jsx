import React  from 'react';
import email from '../assets/email-outline.svg'
import git from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

function Footer() {
    return (
        <div className="footer">
            <a href="mailto:vincentsciguy@gmail.com"><img src={email} alt="E-Mail"/></a>
            <a href="https://github.com/godbil"><img src={git} alt="GitHub"/></a>
            <a href="https://www.linkedin.com/in/vincent-louie-66447a224/"><img src={linkedin} alt="LinkedIn"/></a>
            <div className="break"></div>
            <div>© Vincent Louie      2026</div>
        </div>
    );
}

export default Footer;
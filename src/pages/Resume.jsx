import React from 'react';
import resume from '../assets/Resume.pdf';

function Resume() {
    return (
        <div className="resume" id="resume">
            <div className="title">Resume</div>

            <div className="resume-container">
                <object
                    className="doc"
                    data={resume}
                    type="application/pdf"
                >
                    <p>
                        Your browser doesn't support embedded PDFs.
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                            View my resume
                        </a>
                    </p>
                </object>
            </div>
        </div>
    );
}

export default Resume;
import React, { useEffect, useState } from 'react';
import './about.css';
import gsap from 'gsap';
import image01 from '../../images/01image.jpg';

const About = () => {
    const [shouldReveal, setShouldReveal] = useState(false);
    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(".intro > div", 1.8, {
            opacity: 0,
            y: -100,
            ease: "power4.out",
            delay: 1,
            stagger: {
                amount: 0.3,
            },
        });

        tl.from(
            ".hr",
            1.8,
            {
                width: 0,
                ease: "power4.out",
                delay: 1,
                stagger: {
                    amount: 0.3,
                },
            },
            "-=1.5"
        );

        tl.from(
            ".reveal div",
            1.8,
            {
                y: 200,
                ease: "power4.out",
                stagger: {
                    amount: 0.8,
                },
            },
            "-=2"
        );

    }, []);

    return (
        <div>
            <div className='row'>
                <div className='reveal'>
                    <div className='h1 primary'>A<span>bo</span>ut</div>
                </div>
                <div className='reveal'>
                    <div className='h1 primary'>De<span>vin</span></div>
                </div>
                
            </div>

            <div class="hr"></div>
            <div className='row intro'>
                <div className='p'><a className='link' href="/">home</a></div>
                <div className='p'><a className='link' href="/projects">projects</a></div>
                <div className='p'><a className='link' href='/contact'>contact</a></div>
            </div>

            <div className='white-space'></div>

            <div className="reveal2">
                <div class="items">
                    <div class="item" id="item-1">
                        <div class="item-img">
                            <img src={image01} alt='devinstockton.jpg' />
                        </div>
                        <div class="item-copy">
                            <div class="item-copy-1">
                                <div class="shape">
                                    <div id="number"><span className='img-text'>0</span><span className='img-text'>1</span></div>
                                    <div class="text-right">
                                        <span className='img-text'>Devin Stockton</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item-copy-2">
                                <div class="shape">
                                    <div>
                                        <span className='img-text'>Portrait</span>
                                    </div>
                                    <div class="text-right">
                                        <span className='img-text'>Showcasing <br />Devin Stockton.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1>Devin Stockton.</h1>
                        <a className='link' href="https://www.linkedin.com/in/devin-stockton-25846a252/">LinkedIn</a>
                        <a className='link' href="https://github.com/theDevin8">GitHub</a>
                        <a className='link'>Resume</a>
                        <div className='white-space3'></div>
                        <div className='description'>
                            My name is Devin Stockton, and I'm a upcoming Software Engineering Intern @ Slack.
                            I am currently a junior majoring in Computer Science with a minor in Chemical Enginering @ University of Houston.
                        </div>
                    </div>

                   
                    <div className='line'></div>
                    <div className='work'>
                        <div className='description-work'>
                            <span>May 2024- August 2024 <br/></span>
                            <h3>Software Engineering Intern @ Slack <br /></h3>
                            <span>Soon to Intern as a Software Engineer at Slack.</span>
                        </div>
                        <div className='white-space3'></div>

                        <div className='description-work'>
                            <span>September 2023 - Present <br/></span>
                            <h3>Student Worker @ Univeristy of Houston <br /></h3>
                            <span>Currently a student worker at the College of Technology, University of Houston.</span>
                        </div>
                        <div className='white-space3'></div>

                        <div className='description-work'>
                            <span>August 2023 - Present <br/></span>
                            <h3>Founder/SWE of ConnectCS<br /></h3>
                            <span>Currently working on a startup company that aims to develop an application for CS students.</span>
                        </div>
                        <div className='white-space3'></div>

                        <div className='description-work'>
                            <span>July 2023 <br/></span>
                            <h3>Connectrix Advisor @ Rice University <br /></h3>
                            <span>Advised upcoming high school students on personal and academic growth.</span>
                        </div>
                        <div className='white-space3'></div>

                        <div className='description-work'>
                            <span>May 2023- August 2023 <br/></span>
                            <h3>Software Engineering Intern @ LootSwap <br /></h3>
                            <span>Interned as a Software Engineer at LootSwap.</span>
                        </div>
                        <div className='white-space3'></div>

                        <div className='description-work'>
                            <span>January 2023- August 2023 <br/></span>
                            <h3>CS Tutor @ CougarCS<br /></h3>
                            <span>Served as a programming instructor/mentor at CougarCS.</span>
                        </div>
                    </div>
                    
                </div>


            </div>
        </div>
    )
}
export default About;
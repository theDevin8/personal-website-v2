import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './projects.css';
import { Link } from 'react-router-dom';
const Projects = () => {
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

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkIsMobile = () => {
            const width = window.innerWidth;
            setIsMobile(width >= 320 && width <= 428);

        };
        window.addEventListener('resize', checkIsMobile);
        checkIsMobile();
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        }
    }, []);

    return (
        <div className='project-page'>
            <div className='row'>
                <div className='reveal'>
                    <div className='h1 primary'>DE<span>VI</span>N'S</div>
                </div>
                <div className='reveal'>
                    <div className='h1 primary'><span>P</span>RO<span>JE</span>CTS</div>
                </div>
            </div>

            <div class="hr"></div>
            {!isMobile &&
                <div className='row intro'>
                    <div className='p'><a className='link' href="/">home</a></div>
                    <div className='p'><a className='link' href="/about">About</a></div>
                    <div className='p'><a className='link' href="/contact">contact</a></div>
                </div>
            }

            <div className='white-space2'></div>

            <div className='reveal2'>
                <div className="projects-container">
                    <div className="projects-items">
                        <div className="projects-item" >
                            <div className="projects-item-wrapper">
                                <div className="projects-img-overlay"></div>
                                <div className="projects-item-copy">
                                    <div className="projects-item-name">
                                        ConnectCS <span>Coming Soon</span>
                                    </div>
                                    <div className='plang'>ReactJS | NodeJS | JavaScript | CSS | MongoDB</div>
                                </div>
                            </div>
                        </div>
                        <div className="projects-divider"></div>

                        <div className="projects-item">
                            <div className="projects-item-wrapper">
                                <div className="projects-img-overlay"></div>
                                <div className="projects-item-copy">
                                    <div className="projects-item-name">
                                        Personal Website V2 <span>September 2023</span>
                                    </div>
                                    <div className='plang'>ReactJS | JavaScript | CSS </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects-divider"></div>

                        <Link className="projects-item" to="https://github.com/theDevin8/portfolio">
                            <div className="projects-item-wrapper">
                                <div className="projects-img-overlay"></div>
                                <div className="projects-item-copy">
                                    <div className="projects-item-name">
                                        Personal Website v1<span>May 2023</span>
                                    </div>
                                    <div className='plang'>ReactJS | JavaScript | CSS </div>
                                </div>
                            </div>
                        </Link>
                        <div className='projects-divider'></div>

                        <Link className="projects-item" to="https://github.com/JadenJT/Amusment_Frontend">
                            <div className="projects-item-wrapper">
                                <div className="projects-img-overlay"></div>
                                <div className="projects-item-copy">
                                    <div className="projects-item-name">
                                        Theme Park Management System <span>April 2023</span>
                                    </div>
                                    <div className='langs'>
                                        <p>ReactJS | NodeJS | JavaScript | CSS | MySQL/</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="projects-divider"></div>

                        <div className="projects-item">
                            <div className="projects-item-wrapper">
                                <div className="projects-img-overlay"></div>
                                <div className="projects-item-copy">
                                    <div className="projects-item-name">
                                        Manipulation of an Expression<span>May 2023</span>
                                    </div>
                                    <div className='plang'>C++</div>
                                </div>
                            </div>
                        </div>
                        <div className='projects-divider'></div>
                        <div className="projects-item">
                            <div className="projects-item-wrapper">
                                <div className="projects-img-overlay"></div>
                                <div className="projects-item-copy">
                                    <div className="projects-item-name">
                                        Tamagochi Pet Game<span>May 2022</span>
                                    </div>
                                    <div className='plang'>C++</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {isMobile && (
                <div className='reveal2'>
                    <div className='project'>
                        <div className='projects-item-name'>
                            ConnectCS
                        </div>
                        <div className='plang'>ReactJS | NodeJS | JavaScript | CSS | MongoDB</div>
                    </div>
                    <div className='project'>
                        <div className='projects-item-name'>
                            Personal Website V2
                        </div>
                        <div className='plang'>ReactJS | JavaScript | CSS</div>
                    </div>
                    <div className='project'>
                        <div className='projects-item-name'>
                            Personal Website V1
                        </div>
                        <div className='plang'>ReactJS | JavaScript | CSS</div>
                    </div>
                    <div className='project'>
                        <div className='projects-item-name'>
                            Theme Park Management System
                        </div>
                        <div className='plang'>ReactJS | NodeJS | JavaScript | CSS | MongoDB</div>
                    </div>
                    <div className='project'>
                        <div className='projects-item-name'>
                            Manipulation of an Expression
                        </div>
                        <div className='plang'>C++</div>
                    </div>
                    <div className='project'>
                        <div className='projects-item-name'>
                            Tamagochi Pet Game
                        </div>
                        <div className='plang'>C++</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects;

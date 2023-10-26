import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './projects.css';
import '../../mobile.css';
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
            {isMobile ? (
                <div className='reveal2'>
                    <div className='project-containter'>
                    <div className='project'>
                        <div className='projects-item-name'>
                            <span>ConnectCS</span>
                        </div>
                        <span>COMING SOON</span>
                        <span className='langs'>ReactJS | NodeJS | JavaScript | CSS | MongoDB</span>
                    </div>
                    <Link className='project' to= "https://github.com/theDevin8/personal-website-v2"> 
                        <div className='projects-item-name'>
                            <span>Personal Website V2</span>
                        </div>
                        <span>SEPTEMBER 2023</span>
                        <div className='langs'>ReactJS | JavaScript | CSS</div>
                    </Link>
                    <Link className='project' to = "https://github.com/theDevin8/portfolio">
                        <div className='projects-item-name'>
                            <span>Personal Website V1</span>
                        </div>
                        <span>MAY 2023</span>
                        <div className='langs'>ReactJS | JavaScript | CSS</div>
                    </Link>
                    <Link className='project' to = "https://github.com/theDevin8/Amusment_Frontend">
                        <div className='projects-item-name'>
                            <span>Theme Park Management System</span>
                        </div>
                        <span>APRIL 2023</span>
                        <div className='langs'>ReactJS | NodeJS | JavaScript | CSS | MongoDB</div>
                    </Link>
                    <Link className='project' to = "https://github.com/theDevin8/Expression-Manipulation">
                        <div className='projects-item-name'>
                            <span>Manipulation of an Expression</span>
                        </div>
                        <span>NOVEMBER 2022</span>
                        <div className='langs'>C++</div>
                    </Link>
                    <Link className='project' to ="https://github.com/theDevin8/Tamagotchi-Game">
                        <div className='projects-item-name'>
                            <span>Tamagochi Pet Game</span>
                        </div>
                        <span>MAY 2022</span>
                        <div className='langs'>C++</div>
                    </Link>
                    </div>
                </div>
            ) : (
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

                        <Link className="projects-item" to = "https://github.com/theDevin8/personal-website-v2">
                            <div className="projects-item-wrapper">
                                <div className="projects-img-overlay"></div>
                                <div className="projects-item-copy">
                                    <div className="projects-item-name">
                                        Personal Website V2 <span>September 2023</span>
                                    </div>
                                    <div className='plang'>ReactJS | JavaScript | CSS </div>
                                </div>
                            </div>
                        </Link>
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
                        
                        <Link className="projects-item" to= "https://github.com/theDevin8/Expression-Manipulation">
                            <div className="projects-item-wrapper">
                                <div className="projects-img-overlay"></div>
                                <div className="projects-item-copy">
                                    <div className="projects-item-name">
                                        Manipulation of an Expression<span>November 2022</span>
                                    </div>
                                    <div className='plang'>C++</div>
                                </div>
                            </div>
                        </Link>
                        <div className='projects-divider'></div>

                        <Link className="projects-item" to = "https://github.com/theDevin8/Tamagotchi-Game">
                            <div className="projects-item-wrapper">
                                <div className="projects-img-overlay"></div>
                                <div className="projects-item-copy">
                                    <div className="projects-item-name">
                                        Tamagochi Pet Game<span>May 2022</span>
                                    </div>
                                    <div className='plang'>C++</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
            )}
          
        </div>
    )
}

export default Projects;

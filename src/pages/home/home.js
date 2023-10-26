import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './home.css';
import '../../mobile.css'

const Home = () => {
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

        tl.from(
            ".nav-item",
            1.8,
            {
                opacity: 0,
                y: 100,
                ease: "power4.out",
                stagger: {
                    amount: 0.3,
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
        <div>
        
                <div>
                    {isMobile && 
                    <div className='header-space'> </div>}
                    
                    <div className='container'>
                        <div className='row'>
                            <div className='reveal'>
                                <div className='h1 primary'>De<span>vin</span></div>
                            </div>
                            <div className='reveal'>
                                <div className='h1 primary'>S<span>t</span><span>oc</span><span>kt</span>on</div>
                            </div>
                        </div>

                        <div class="hr"></div>
                        <div className='row intro'>
                            <div className='p'>Undergraduate Software Engineer</div>
                            <div className='p'>CS @University of Houston</div>
                            <div className='p'>Resume</div>
                            <div className='p'>Houston, Texas</div>
                        </div>

                        <div className='white-space'></div>
                        
                            {!isMobile && 
                            <div> <div className='row'><Link className='nav-item about' to="/about">
                                <div>About</div>
                                <div className='id'>01</div>
                            </Link>
                            <div className='reveal'>
                                <div className='h1 secondary'>Programmer</div>
                            </div>
                            <Link className='nav-item projects' to='/projects'>
                                <div>Projects</div>
                                <div className='id'>02</div>
                            </Link>
                            </div> </div>}
                            
                            
                    
                       
                        
                        {!isMobile &&
                        <div className='hr'></div>}
                        
                        <div className='row'>
                            <div className='reveal'>
                                <div className='h1 secondary'>Software</div>
                            </div>

                            <div className='reveal'>
                                <div className='h1 secondary'>Engineer &nbsp;&nbsp;</div>
                            </div>
                        </div>

                        <div className='hr'></div>
                        <div className='row intro'>
                            <div className='p'><a className='anchorTag' href="https://github.com/theDevin8">GitHub</a></div>
                            <div className='p'> <a className='anchorTag' href="https://www.linkedin.com/in/devin-stockton-25846a252/">LinkedIn</a></div>
                            <div className='p'><a className = 'anchorTag' href="mailto:devinstockton2003@gmail.com">Email</a></div>
                        </div>
                        {!isMobile && 
                        <div> 
                        
                        <div className='row'>
                            <div className='reveal'>
                                <div className='h1 secondary'>Tech</div>
                            </div>

                            <Link className='nav-item contact' to='/contact'>
                                <div>Contact</div>
                                <div className='id'>03</div>
                            </Link>
                            <div className='reveal'>
                                <div className='h1 secondary'>Enthusiast</div>
                            </div>
                        </div>

                        <div className='hr'></div> </div>}
                    </div>
                </div>
            
        </div>
    )
}

export default Home
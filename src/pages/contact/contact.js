import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './contact.css';


const Contact = () => {
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
                    <div className='h1 primary'>Co<span>nta</span>ct</div>
                </div>
                <div className='reveal'>
                    <div className='h1 primary'>De<span>vin</span></div>
                </div>

            </div>

            <div class="hr"></div>
            <div className='row intro'>
                <div className='p'><a className='link' href="/">home</a></div>
                <div className='p'><a className='link' href="/about">about</a></div>
                <div className='p'><a className='link' href="/projects">Projects</a></div>
            </div>
            
            <div className='white-space2'></div>
            
            <div className='reveal2'>
                <div className="contact-container">
                    <div className="contact-section">
                        <div className="contact-details col">
                            <p>
                                Feel free to contact me! <br />
                                
                            </p>

                            <div className="contact-social-media item">
                                <h3>Social Media</h3>
                                <span>LINKEDIN — GITHUB — INSTAGRAM </span>
                            </div>

                            <div className="contact-info">
                                <div className="contact-email item">
                                    <h3>Get in touch</h3>
                                    <span>devinstockton2003@gmail.com</span>
                                </div>
                                <div className="contact-address item">
                                    <h3>location</h3>
                                    <span>Houston Texas</span>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form col">
                            <div className="contact-wrapper">
                                <div className="contact-row">
                                    <input type="text" placeholder="Name" />
                                    
                                </div>
                                <div className="contact-row">
                                    <input type="text" placeholder="Email" />
                                </div>
                                <div className="contact-row">
                                    <textarea
                                        type="text"
                                        placeholder="Message"
                                        rows="5"
                                        id="message"
                                    ></textarea>
                                </div>
                                <div className="contact-row submit">
                                    <a href="#">Submit</a>
                                    <div className="contact-send-icon">
                                        <ion-icon
                                            name="arrow-forward-sharp"
                                            role="img"
                                            className="md hydrated"
                                            aria-label="arrow forward sharp"
                                        ></ion-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;
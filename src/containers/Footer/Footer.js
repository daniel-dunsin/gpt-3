import React from 'react'
import './Footer.css';
import { FaHeart } from 'react-icons/fa';
import logo from '../../assets/logo.svg';

const footerLinks = [
    {
        title: 'Links',
        links: ['Owners', 'Social Media', 'Courtesy', 'Contact']
    },
    {
        title: 'Company',
        links: ['Terms & Conditions', 'Privacy Policy', 'Contact']
    },
    {
        title: 'Get In Touch',
        links: ['adejaredaniel12@gmail.com', '+2348023720580', 'adejare-daniel.netlify.app']
    }
]

const Footer = () => {
    return <footer className="section-padding">
        <div className="section-container">
            <div className="title">
                <h1 className='gradient-text'>Do you want to step into the future before others</h1>
                <button>Request Early Access</button>
            </div>
            <div className="footer-container">
                <div>
                    <img src={logo} alt="" className="footer-link-img" />
                    <p>Built with <FaHeart /> by <a href='http://github.com/daniel-dunsin'>Adejare Daniel</a> </p>
                </div>
                {
                    footerLinks.map((footerLink, index) => {
                        return <div className="footer-link" key={index}>
                            <h3>{footerLink.title}</h3>
                            <div className="links-list">
                                {
                                    footerLink.links.map((link, index) => <li key={index}>{link}</li>)
                                }
                            </div>
                        </div>
                    })
                }
            </div>
            <p className="copyright">&copy; <a href="https://adejare-daniel.netlify.app">Adejare Daniel 2022</a></p>
        </div>
    </footer>
}

export default Footer
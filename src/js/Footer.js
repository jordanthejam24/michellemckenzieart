import React from 'react'
import '../css/Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <a href="#navtop" className="logo">
                <strong className="logo__strong">M</strong>
                <small className="logo__small">M</small>
            </a>
            <div className="footer__links">
                <div className="footer__copyright">
                    <span>©2020 Jordan McKenzie</span>
                </div>
                <div className="footer__privacy">
                    <span>Terms and Conditions / Privacy</span>
                </div>
                <div className="footer__links">
                    insta facebook pinterest
                </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__top">
        <div className="footer__content">
          <div className="footer__list">
            <p>Capstone Project 2023</p>
            <p>Created by 3P Team</p>
          </div>
          <div className="footer__list">
            <h3>Contact</h3>
            <span>phuc.tranvinh13@hcmut.edu.vn</span>
          </div>
          <div className="footer__list">
            <h3>Follow</h3>
            <div className="footer__item">
              <FacebookIcon color="primary" className="footer__item-icon" />
              <span>Facebook</span>
            </div>
            <div className="footer__item">
              <LinkedInIcon color="primary" className="footer__item-icon" />
              <span>Likedin</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">Copyright @2023</div>
    </footer>
  );
};

export default Footer;

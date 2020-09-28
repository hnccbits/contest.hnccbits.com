import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="row">
            {/* column 1 Info Needed */}
            <div className="col-md-3 col-sm-12 unactive">
              <h2>OUR TEAM</h2>
              <ul className="footer-list-item list-unstyled">
                <li>
                  <a href="https://hnccbits.com/">
                    <span>Visit us</span>
                  </a>
                </li>
                <li>
                  <a href="https://blog.hnccbits.com/">
                    <span>Blogs</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.codechef.com/">
                    <span>Codechef</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.bitsindri.ac.in/">
                    <span>BIT Sindri</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* column 2 Info Needed*/}
            <div className="col-md-6 col-sm-12">
              <h4 className="footer-para-title">HnCC</h4>
              <p className="footer-para">
                We started off with our first coding contest in March 2019. We
                were very few people back then and a mere 40 people attended our
                contest. This was the beginning of our journey to build a
                culture where people would meet, discuss, compete, learn, and
                grow in coding. Our college lacked an active coding community.
                From then onwards we have worked hard to make the community and
                a team able to lead this community to prosper.
                <br />
                <br />
                The Chef and HnCC are cooking many more plans for you!!! Once
                again we thank you all.
              </p>
              <div className="codechef-chapter">
                <h3 style={{ textAlign: 'center' }}>
                  <a href="https://www.codechef.com/campus_chapter/HnCC_BIT_Sindri" target="noopener">
                    <span>Codechef Chapter</span>
                  </a>
                </h3>
              </div>
            </div>
            {/* column 3 Info Needed */}
            <div className="col-md-3 col-sm-12">
              <h2>Social</h2>
              <ul className="footer-list-item list-unstyled">
                <li>
                  <a href="https://www.facebook.com/hnccbits">
                    <i className="fab fa-facebook "></i> <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/hnccbits">
                    <i class="fab fa-github" aria-hidden="true"></i>{' '}
                    <span>Github</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/hnccbits/">
                    <i class="fab fa-instagram" aria-hidden="true"></i>{' '}
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/hnccbits/">
                    <i class="fab fa-linkedin-in"></i> <span>LinkedIN</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xs-center">
            {/* Info Needed */}
            &copy;{new Date().getFullYear()} HNCC BITS - All Rigths Reserved.
            <br />
            <span style={{ fontSize: '1.6rem', color: 'inherit' }}>
              Made by HnCC Team with <i class="fas fa-heart"></i>
            </span>
          </p>
          <div className="footer-last-text">
            <i class="fas fa-map-marked-alt"></i>
            <h2>
              <a href="mailto:hnccbits@gmail.com">hnccbits@gmail.com</a>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

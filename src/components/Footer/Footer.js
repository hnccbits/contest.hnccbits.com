import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-start">
        <div className="footer">
          <div className="footer-teams">
            <div className="content-header">Our Teams</div>
            <div className="teams-list">
              <div>
                <a href="https://hnccbits.com/" className="t-link footer-mail">
                  Visit Us&nbsp;&nbsp;
                </a>
              </div>
              <div>
                <a
                  href="https://blog.hnccbits.com/"
                  className="t-link footer-mail"
                >
                  Blogs&nbsp;&nbsp;
                </a>
              </div>
              <div>
                <a
                  href="https://www.codechef.com/"
                  className="t-link footer-mail"
                >
                  CodeChef&nbsp;&nbsp;
                </a>
              </div>
              <div>
                <a
                  href="https://www.bitsindri.ac.in/"
                  className="t-link footer-mail"
                >
                  BIT Sindri
                </a>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <div className="content-header">HnCC</div>
            <div className="content-para">
              <p className="para-italic">
                - We started off with our first coding contest in March 2019. We
                were very few people back then and a mere 40 people attended our
                contest. This was the beginning of our journey to build a
                culture where people would meet, discuss, compete, learn, and
                grow in coding. From then onwards we have worked hard to make
                the community and a team able to lead this community to prosper.
              </p>
              <p>
                The Chef and HnCC are cooking many more plans for you!!! Once
                again we thank you all.
              </p>
              <a
                href="https://www.codechef.com/campus_chapter/HnCC_BIT_Sindri"
                className="codechef"
              >
                BIT Code Contest Page
              </a>
            </div>
          </div>
          <div className="footer-socials">
            <div className="content-header">Start a Conversation</div>
            <div className="footer-social-links">
              <a href="https://www.facebook.com/hnccbits" className="s-links">
                <i className="fab fa-facebook-f "></i>
              </a>
              <a
                href="https://www.linkedin.com/company/hnccbits/"
                className="s-links"
              >
                <i className="fab fa-linkedin-in "></i>
              </a>
              <a href="https://github.com/hnccbits" className="s-links">
                <i className="fab fa-github-alt "></i>
              </a>
              <a href="https://www.instagram.com/hnccbits/" className="s-links">
                <i className="fab fa-instagram "></i>
              </a>
            </div>
            <div className="footer-mail-top">
              Mail us:{" "}
              <a href="mailto:hnccbits@gmail.com" className="footer-mail ">
                hnccbits@gmail.com
              </a>
            </div>
            <address>
              <a
                href="https://goo.gl/maps/w8uxE3hTDU7JBgcu9"
                className="footer-map"
              >
                <i className="fas fa-map-marked-alt slinks"></i>
              </a>{" "}
              &nbsp; Hackathon and Coding Club, IT Building, BIT Sindri, Sindri,
              828123
            </address>
          </div>
        </div>
        <div className="footer-end">
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by HnCC
          <br />
          ©2020 HNCC BITS - All Rigths Reserved
        </div>
      </div>
    );
  }
}
export default Footer;

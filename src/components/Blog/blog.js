import React from 'react';
import HNCCLogo from '../../assets/hncclogo.png';
import './Blog.css';

class Blog extends React.Component {
  render() {
    return (
      <div class="blog__box">
          <div class="blog__box-logo">
            <div class="hncc__hex-box">
              <img src={HNCCLogo} className="hncc-blog-img" alt="HNCC-Logo" />
            </div>
          </div>

          <div class="blog__box-content">
              <h2 class="blog__box-heading">
                  Check out our <span>Editorial Blog</span>
              </h2>
              <a href="https://blog.hnccbits.com/" class="blog__box-btn">
                  <span>Develpers Docs</span>
              </a>
          </div>
      </div>
    );
  }
}

export default Blog;

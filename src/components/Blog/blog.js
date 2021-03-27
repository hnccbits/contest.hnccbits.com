import React from 'react';
import HNCCLogo from '../../assets/hncclogo.png';
import './Blog.css';

class Blog extends React.Component {
	render() {
		return (
			<div className='blog__box'>
				<div className='blog__box-logo'>
					<div className='hncc__hex-box'>
						<img src={HNCCLogo} className='hncc-blog-img' alt='HNCC-Logo' />
					</div>
				</div>

				<div className='blog__box-content'>
					<h2 className='blog__box-heading'>
						Check out our <span>Editorial Blog</span>
					</h2>
					<a
						href='https://blog.hnccbits.com/'
						className='blog__box-btn'
						target='_blank'
						rel='noopener noreferrer'
					>
						<span>Developer Docs</span>
					</a>
				</div>
			</div>
		);
	}
}

export default Blog;

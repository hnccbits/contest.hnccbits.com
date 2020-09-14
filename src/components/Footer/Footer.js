import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row">
                        {/* column 1 Info Needed */}
                        <div className="col-md-4 col-sm-6">
                            <h4>Lorem Ipsum</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Lorem Ipsum</a></li>
                                <li><a href="/">Lorem Ipsum</a></li>
                                <li><a href="/">Lorem Ipsum</a></li>
                            </ul>
                        </div>
                        {/* column 2 Info Needed*/}
                        <div className="col-md-4 col-sm-6">
                            <h4>Lorem Ipsum</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Lorem Ipsum</a></li>
                                <li><a href="/">Lorem Ipsum</a></li>
                                <li><a href="/">Lorem Ipsum</a></li>
                            </ul>
                        </div>
                        {/* column 3 Info Needed */}
                        <div className="col-md-4 col-sm-6">
                            <h4>Social</h4>
                            <ul className="list-unstyled">
                                <li><a href="/"><i class="fab fa-facebook"></i> Lorem Ipsum</a></li>
                                <li><a href="/">Lorem Ipsum</a></li>
                                <li><a href="/">Lorem Ipsum</a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-xs-center">
                        {/* Info Needed */}
                        &copy;{new Date().getFullYear()} HNCC BITS - All Rigths Reserved.
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;
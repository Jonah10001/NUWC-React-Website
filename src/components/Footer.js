import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer>
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <p className="feedbacktext">Got Feedback? Click
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScFdhfsYscovETFgS9lkJOl86Y4iO2VeT5e0bCCjo3PL-s3wg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"> Here</a></p>
                        </div>
                        <div className="col-lg-6">
                            <p className="footertext">Copyright &copy; NU World Cup 2020</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;

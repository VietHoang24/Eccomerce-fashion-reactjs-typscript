import * as React from 'react';
import "./style.scss"
export interface FooterProps {
}

 const Footer= (props: FooterProps)=> {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <footer className="footer-16371">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 text-center">
              <div className="footer-site-logo mb-4">
                <a href="#">IVYMODA</a>
              </div>
              <ul className="list-unstyled nav-links mb-5">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <div className="social mb-4">
                <h3>Stay in touch</h3>
                <ul className="list-unstyled">
                  <li className="in">
                    <a href="#">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                  <li className="fb">
                    <a href="#">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li className="tw">
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li className="pin">
                    <a href="#">
                      <span className="icon-pinterest" />
                    </a>
                  </li>
                  <li className="dr">
                    <a href="#">
                      <span className="icon-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright">
                <p className="mb-0">
                  <small>© Colorlib. All Rights Reserved.</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* End of .container */}
    </>
  );
}
export default Footer

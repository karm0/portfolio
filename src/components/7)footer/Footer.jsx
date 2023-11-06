import { useEffect, useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  return (
    <div className="row footer">
      <div className="col-md-6 col-sm-8 d-flex justify-content-center align-items-center m-auto">
        <ul className="d-flex gap-5">
          <li>
            <Link className="footer-ul" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="footer-ul" to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className="footer-ul" to="/contactUs">
              Contact Ua
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-md-6 col-sm-8 d-flex justify-content-center gap-5 flex-wrap m-auto">
        <p>
          <span className="icon-user-circle-o me-1"></span>
          karm-shaker
        </p>
        <p>
          <span className="icon-envelope me-1"></span>karmshaker30@gmail.com
        </p>
        <p>
          <span className="icon-mobile me-1"></span>01555274214
        </p>
      </div>
      <a
        href="#top"
        style={{ opacity: showScrollBtn ? 1 : 0, transition: ".5s" }}
      >
        <button className="icon-keyboard_arrow_up btn-up"></button>
      </a>
    </div>
  );
};

export default Footer;

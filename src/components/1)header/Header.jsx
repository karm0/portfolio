import "./header.css";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";  

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("mode") ?? "dark");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);
  return (
      <header className="position-fixed w-100">
        <div className="d-flex justify-content-center pt-2">
          <div className="btn-menu  mt-3" style={{ paddingRight: "8rem" }}>
            <button
              className="header-icon icon-menu text-center mb-2"
              onClick={handleShow}
            ></button>

            <div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ border: "none" }} />
                <ul className="body-modal">
                  <li>
                    <Link className="links-2" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="links-2" to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link className="links-2" to="/skills">
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link className="links-2" to="/contactUs">
                      Contact Ua
                    </Link>
                  </li>
                </ul>
              </Modal>
            </div>
          </div>
          <nav className="w-50 header">
            <ul className="d-flex justify-content-evenly mt-3  p-2 header-ul">
              <li>
                <Link  className="links" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="links" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="links" to="/skills">
                  Skills
                </Link>
              </li>
              <li>
                <Link className="links" to="/contactUs">
                  Contact Ua
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-3 ms-5 text-center mb-2">
            <button
              className="header-icon"
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme === "dark" ? "light" : "dark"
                );
                setTheme(localStorage.getItem("mode"));
              }}
            >
              {theme === "dark" ? (
                <span className=" icon-moon-o"></span>
              ) : (
                <span className="icon-sun"></span>
              )}
            </button>
          </div>
        </div>
      </header>
  );
};

export default Header;

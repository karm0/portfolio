import { Container } from "react-bootstrap";
import "./contact.css";
import Form from "react-bootstrap/Form";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneIcon from "../../../public/done-icon.json";
import { motion } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqbdeko");
  if (state.succeeded) {
    return (
      <h2 className="mb-5 d-flex justify-content-center align-items-center">
        <Lottie style={{ height: 85 }} loop={false} animationData={doneIcon} />
        You message has been send successfully 🎉
      </h2>
    );
  }
  return (
    <motion.div
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      exit={{
        y: "-100vh",
      }}
    >
      <Container>
        <h1 className="p-5 text-center">Contact Us</h1>
        <div className="row contact">
          <div className="col-md-6 col-sm-8 d-flex align-items-center m-auto p-5">
            <Form onSubmit={handleSubmit} className="w-100">
              <div className="mb-5">
                <p className="fs-5">
                <span className="icon-envelope me-1"></span>
                  Email:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    karmshaker30@gmail.com
                  </span>
                </p>
                <p className="fs-5">
                <span className="icon-mobile me-1"></span>
                  Phone: <span style={{ fontWeight: "bold" }}>01555274214</span>
                </p>
              </div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  autoComplete="off"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control name="message" as="textarea" rows={5} />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </Form.Group>
              <button
                type="submit"
                disabled={state.submitting}
                className="btn-submit"
              >
                submit
              </button>
            </Form>
          </div>
          <div className="col-md-6 col-sm-8 d-flex justify-content-center m-auto p-5">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-b7e89.appspot.com/o/img6.gif?alt=media&token=e1014384-2903-46bd-9ccf-1ca4626cf539" className="w-75 " />
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Contact;

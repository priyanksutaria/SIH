import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = (props) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [dataSent, setDataSent] = useState(false);
  const sendContactData = async () => {
    const userData = {
      name: userName,
      email: userEmail,
      phone: userPhone,
      message: userMessage,
    };

    const backendURL = "";

    const response = await fetch(backendURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      console.table(response);
    } else {
      setUserName("");
      setUserEmail("");
      setUserPhone("");
      setUserMessage("");
      setDataSent(true);
    }
  };

  return (
    <div className="App">
      <div className="dark-overlay"></div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Pet%20Store&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Map Overlay"
          ></iframe>
        </div>
      </div>
      <div
        className="contact-form "
        style={{ position: `${props.contactpos}` }}
      >
        <h2 className="contact-text">Contact&nbsp;Us</h2>
        <br />
        <Form>
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          ></Form.Control>
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Your Email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            required
          ></Form.Control>
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Your Phone Number"
            value={userPhone}
            onChange={(e) => {
              setUserPhone(e.target.value);
            }}
            required
          ></Form.Control>
          <textarea
            placeholder="Your Message"
            className="textarea-fixed"
            value={userMessage}
            onChange={(e) => {
              setUserMessage(e.target.value);
            }}
          ></textarea>
        </Form>
        <Button
          variant="primary"
          className="contact-button"
          onClick={sendContactData}
        >
          {dataSent ? "Thank You!" : "Send"}
        </Button>
      </div>
    </div>
  );
};

export default Contact;



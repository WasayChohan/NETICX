import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-heading">
        <h1 className="contact-h1">
          {" "}
          CONTACT US <br />
        </h1>
        <h1>
          <b>
            {" "}
            If You Have Any Query, Feel <br /> Free To Contact Us
          </b>
        </h1>
      </div>
      <div className="sub-contact">
        <form action="">
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              autoComplete="off"
              name="name"
            />
            <input
              type="email"
              placeholder="E-mail"
              autoComplete="off"
              name="email"
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="Write your Subject"
              autoComplete="off"
              name="subject"
            />
            <input
              type="number"
              placeholder="Estimated Budget"
              autoComplete="off"
              name="budget"
              min="0"
            />
          </div>

          <div className="form-col">
            <textarea
              type="text"
              placeholder="Message"
              cols="30"
              rows="10"
              autoComplete="off"
              name="message"
            />

            <input type="submit" value="Submit" className="btnn" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

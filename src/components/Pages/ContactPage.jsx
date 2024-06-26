import React from "react";
import Button from "../UI/Buttons/Button";

const ContactPage = () => {
  const myFunction = () => {
    alert("hello");
  };
  return (
    <div className="contact-section">
      <h1 className="heading">
        <span className="heading-span">connect</span> with me
      </h1>
      <form action="">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea type="text" name="message" placeholder="Message" required />
        <Button
          onClick={myFunction}
          className="btn-1"
          type="submit"
          name="Submit"
        />
      </form>
    </div>
  );
};

export default ContactPage;

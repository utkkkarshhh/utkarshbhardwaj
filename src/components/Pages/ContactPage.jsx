import React from "react";
import styles from "./ContactPage.module.css";
import ContactSection from "../sections/ContactSection";

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <ContactSection />
    </div>
  );
};

export default ContactPage;

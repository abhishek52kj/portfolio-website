"use client";

import type { Contact as ContactType } from '../types'; // Import the Contact type

const Contact = ({ title, email, phone, address }: ContactType) => {
  return (
    <section id="contact" className="contact">
      <h1>{title}</h1>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </section>
  );
};

export default Contact;

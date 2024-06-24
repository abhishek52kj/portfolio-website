"use client";

import type { Contact as ContactType } from '../types';

const Contact = ({ title, email, phone, address }: ContactType) => {
  return (
    <section id="contact" className="mb-10">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </section>
  );
};

export default Contact;

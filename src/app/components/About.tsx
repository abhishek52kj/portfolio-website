"use client";

import type { About as AboutType } from '../types'; // Import the About type

const About = ({ title, body }: AboutType) => {
  return (
    <section id="about" className="about">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </section>
  );
};

export default About;

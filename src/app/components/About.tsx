"use client";

import type { About as AboutType } from '../types';

const About = ({ title, body }: AboutType) => {
  return (
    <section id="about" className="mb-10">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </section>
  );
};

export default About;

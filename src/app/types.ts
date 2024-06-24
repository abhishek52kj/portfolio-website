export type Project = {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  year: number;
  new?: boolean; // Add the 'new' property
};

export type Contact = {
  title: string;
  email: string;
  phone: string;
  address: string;
};

export type About = {
  title: string;
  body: string;
};

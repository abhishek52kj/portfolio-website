import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Stack from './components/Stack';
import Channels from './components/Channels';
import Features from './components/Features';
import Clients from './components/Clients';
import BookSessionButton from './components/BookSessionButton';
import type { Project, Contact as ContactType, About as AboutType } from './types';

const getData = () => {
  const aboutFilePath = path.join(process.cwd(), 'src/content/about/about.md');
  const aboutFileContent = fs.readFileSync(aboutFilePath, 'utf8');
  const { data: aboutData, content: aboutBody } = matter(aboutFileContent);

  const projectsDirectory = path.join(process.cwd(), 'src/content/projects');
  const projectFiles = fs.readdirSync(projectsDirectory);
  const projectsContent = projectFiles.map((fileName) => {
    const filePath = path.join(projectsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return data as Project;
  });

  const contactFilePath = path.join(process.cwd(), 'src/content/contact/contact.md');
  const contactFileContent = fs.readFileSync(contactFilePath, 'utf8');
  const { data: contactData } = matter(contactFileContent);

  return {
    aboutContent: { title: aboutData.title, body: aboutBody },
    projectsContent,
    contactContent: contactData,
  };
};

const Page = () => {
  const { aboutContent, projectsContent, contactContent } = getData();

  const sections = [
    <Projects key="projects" projects={projectsContent} />,
    <Stack key="stack" />,
    <Channels key="channels" />,
    <Features key="features" />,
    <Clients key="clients" />
  ];

  return (
    <div className="space-y-10">
      {/* <About {...aboutContent} /> */}
      <div className="grid grid-cols-3 gap-4">
        {sections.map((section, index) => (
          <div key={index} className="col-span-1">
            {section}
          </div>
        ))}
      </div>
      {/* <Contact title={''} email={''} phone={''} address={''} {...contactContent} /> */}
      <BookSessionButton />
    </div>
  );
};

export default Page;

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import type { Project, Contact as ContactType, About as AboutType } from './types'; // Import types

// Fetch data inside the component
const getData = () => {
  // Fetch About content
  const aboutFilePath = path.join(process.cwd(), 'src/content/about/about.md');

  const aboutFileContent = fs.readFileSync(aboutFilePath, 'utf8');
  const { data: aboutData, content: aboutBody } = matter(aboutFileContent);

  // Fetch Projects content
  const projectsDirectory = path.join(process.cwd(), 'src/content/projects');
  const projectFiles = fs.readdirSync(projectsDirectory);
  const projectsContent = projectFiles.map((fileName) => {
    const filePath = path.join(projectsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return data as Project; // Assert that data matches the Project type
  });

  // Fetch Contact content
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

  return (
    <>
      <About {...aboutContent} />
      <Projects projects={projectsContent} />
      <Contact title={''} email={''} phone={''} address={''} {...contactContent} />
    </>
  );
};

export default Page;

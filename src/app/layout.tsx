import { ReactNode } from 'react';
import './globals.css';
import Image from 'next/image';
import DesignImage from '../assets/portfolio_design.jpeg'; // Ensure this path is correct

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
      </head>
      <body className="bg-black flex justify-center items-center min-h-screen p-4">
        <div className="container flex min-h-screen w-full">
          <div className="w-1/3"></div>
          <div className="w-2/3 bg-black text-white p-4 flex flex-col justify-between overflow-y-auto">
            <header className="grid grid-cols-3 gap-8 mb-4">
              <div>
                <p className="text-primary">Got a question?</p>
                <a href="#" className="text-secondary hover:underline">Get in touch</a>
              </div>
              <div>
                <p className="text-primary">Stay in the loop.</p>
                <a href="#" className="text-secondary hover:underline">Subscribe</a>
              </div>
              <div>
                <p className="text-primary">Im on socials.</p>
                <a href="#" className="text-secondary hover:underline">Follow me on x.com</a>
              </div>
            </header>
            <main className="flex-grow flex flex-col justify-end">
              <div className="grid grid-cols-3 gap-8">
                <section className="space-y-10 col-span-1">
                  <div>
                    <h2 className="text-primary mb-4">Projects</h2>
                    <ul>
                      <li>
                        <h3 className="text-secondary">Framer <span className="text-secondary">Web design</span></h3>
                        <p className="text-secondary"></p>
                        <ul className="flex space-x-2"></ul>
                        <a className="text-secondary hover:underline">View Project</a>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="stack" className="space-y-10 col-span-1">
                  <h2 className="text-primary mb-4">Stack</h2>
                  <ul className="space-y-2">
                    <li className="text-secondary">Framer <span className="text-secondary">Web design</span></li>
                    <li className="text-secondary">Typefully <span className="text-secondary">Web design</span></li>
                    <li className="text-secondary">Overrides <span className="text-secondary">Web design</span></li>
                    <li className="text-secondary">Circle <span className="text-secondary">Web design</span></li>
                  </ul>
                </section>
                <section id="channels" className="space-y-10 col-span-1">
                  <h2 className="text-primary mb-4">Channels</h2>
                  <ul className="space-y-2">
                    <li className="text-secondary">Twitter <span className="text-secondary">Visual design</span></li>
                    <li className="text-secondary">LinkedIn <span className="text-secondary">Visual design</span></li>
                    <li className="text-secondary">Medium <span className="text-secondary">Visual design</span></li>
                    <li className="text-secondary">Substack <span className="text-secondary">Visual design</span></li>
                    <li className="text-secondary">Threads <span className="text-secondary">Visual design</span></li>
                    <li className="text-secondary">Apple Music <span className="text-secondary">Visual design</span></li>
                  </ul>
                </section>
                <section id="features" className="space-y-10 col-span-1">
                  <h2 className="text-primary mb-4">Features</h2>
                  <ul className="space-y-2">
                    <li className="text-secondary">Config <span className="text-secondary">22</span></li>
                    <li className="text-secondary">Hatch Conference <span className="text-secondary">23</span></li>
                    <li className="text-secondary">Wall Street Journal <span className="text-secondary">23</span></li>
                    <li className="text-secondary">New York Times <span className="text-secondary">22</span></li>
                    <li className="text-secondary">Macworld <span className="text-secondary">23</span></li>
                  </ul>
                </section>
                <section id="clients" className="space-y-10 col-span-1">
                  <h2 className="text-primary mb-4">Clients</h2>
                  <ul className="space-y-2">
                    <li className="text-secondary">Bluesky <span className="text-secondary">Visual design</span></li>
                    <li className="text-secondary">Diagram <span className="text-secondary">Web design</span></li>
                    <li className="text-secondary">Figma <span className="text-secondary">Visual design</span></li>
                  </ul>
                </section>
              </div>
            </main>
            <footer className="fixed bottom-4 right-4">
              <button className="bg-custom">Book a Session</button>
            </footer>
          </div>
          <div className="fixed left-0 top-0 w-1/3 h-screen p-8" style={{ background: 'black', padding: '16px' }}>
            <div className="relative h-full flex flex-col justify-end" style={{ background: 'radial-gradient(circle, rgba(251,219,208,1) 10%, rgba(96,72,67,1) 75%)', borderRadius: '16px', padding: '16px' }}>
              <div className="absolute top-4 left-4 text-title">
                <h1>ABHISHEK</h1>
              </div>
              <div style={{ position: 'relative' }}>
                <Image src={DesignImage} alt="Design Image" layout="responsive" width={500} height={600} style={{ borderRadius: '16px' }} className="object-cover rounded-lg" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-primary">
                    Namaste, I am Abhishek Kumar
                  </p>
                  <p className="text-secondary">
                    I build my ideas, help others to execute theirs, and talk about everything tech.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

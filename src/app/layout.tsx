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
          <div className="w-2/3 bg-black text-white p-4 flex flex-col overflow-y-auto">
            <header className="flex justify-between space-x-4 mb-4">
              <a href="#" className="hover:underline">Got a question? Get in touch</a>
              <a href="#" className="hover:underline">Stay in the loop. Subscribe</a>
              <a href="#" className="hover:underline">Im on socials. Follow me on x.com</a>
            </header>
            <main className="flex-grow">
              <div className="grid grid-cols-3 gap-8">
                <section className="space-y-10 col-span-1">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Projects</h2>
                    <ul>
                      <li>
                        <h3 className="text-xl font-semibold"><span></span></h3>
                        <p></p>
                        <ul className="flex space-x-2"></ul>
                        <a className="text-blue-500 hover:underline">View Project</a>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="stack" className="space-y-10 col-span-1">
                  <h2 className="text-3xl font-semibold mb-4">Stack</h2>
                  <ul className="space-y-2">
                    <li>Framer <span className="text-gray-400">Web design</span></li>
                    <li>Typefully <span className="text-gray-400">Web design</span></li>
                    <li>Overrides <span className="text-gray-400">Web design</span></li>
                    <li>Circle <span className="text-gray-400">Web design</span></li>
                  </ul>
                </section>
                <section id="channels" className="space-y-10 col-span-1">
                  <h2 className="text-3xl font-semibold mb-4">Channels</h2>
                  <ul className="space-y-2">
                    <li>Twitter <span className="text-gray-400">Visual design</span></li>
                    <li>LinkedIn <span className="text-gray-400">Visual design</span></li>
                    <li>Medium <span className="text-gray-400">Visual design</span></li>
                    <li>Substack <span className="text-gray-400">Visual design</span></li>
                    <li>Threads <span className="text-gray-400">Visual design</span></li>
                    <li>Apple Music <span className="text-gray-400">Visual design</span></li>
                  </ul>
                </section>
                <section id="features" className="space-y-10 col-span-1">
                  <h2 className="text-3xl font-semibold mb-4">Features</h2>
                  <ul className="space-y-2">
                    <li>Config <span className="text-gray-400">22</span></li>
                    <li>Hatch Conference <span className="text-gray-400">23</span></li>
                    <li>Wall Street Journal <span className="text-gray-400">23</span></li>
                    <li>New York Times <span className="text-gray-400">22</span></li>
                    <li>Macworld <span className="text-gray-400">23</span></li>
                  </ul>
                </section>
                <section id="clients" className="space-y-10 col-span-1">
                  <h2 className="text-3xl font-semibold mb-4">Clients</h2>
                  <ul className="space-y-2">
                    <li>Bluesky <span className="text-gray-400">Visual design</span></li>
                    <li>Diagram <span className="text-gray-400">Web design</span></li>
                    <li>Figma <span className="text-gray-400">Visual design</span></li>
                  </ul>
                </section>
              </div>
            </main>
          </div>
          <div className="fixed left-0 top-0 w-1/3 h-screen bg-orange-600 p-8">
            <div className="relative h-full">
              <Image src={DesignImage} alt="Design Image" fill style={{ objectFit: 'cover' }} className="object-cover rounded-lg" />
              <div className="absolute top-4 left-4 text-white">
                <h1 className="text-4xl font-bold">MANS</h1>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="mt-4 text-xl leading-relaxed">
                  Hallo, Im Fons Mans.<br />
                  I build my ideas, help others to shape theirs, and talk about everything design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

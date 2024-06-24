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
      <body className="bg-black flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full max-w-7xl p-0">
          <div className="flex flex-grow">
            <div className="w-1/3 bg-orange-600 relative">
              <div className="relative h-full">
                <Image src={DesignImage} alt="Design Image" fill style={{ objectFit: 'contain' }} className="object-contain rounded-lg" />
                <div className="absolute top-4 left-4 text-white">
                  <h1 className="text-4xl font-bold">MANS</h1>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="mt-4 text-xl leading-relaxed">
                    Hallo, I&apos;m Fons Mans.<br />
                    I build my ideas, help others to shape theirs, and talk about everything design.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-2/3 bg-black text-white p-4 flex flex-col overflow-y-auto">
              <header className="flex justify-between space-x-4 mb-4">
                <a href="#" className="hover:underline">Got a question? Get in touch</a>
                <a href="#" className="hover:underline">Stay in the loop. Subscribe</a>
                <a href="#" className="hover:underline">I&apos;m on socials. Follow me on x.com</a>
              </header>
              <main className="flex-grow">
                {children}
              </main>
              {/* <footer className="mt-4 text-center">
                <p>© 2024 Your Name. All rights reserved.</p>
              </footer> */}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

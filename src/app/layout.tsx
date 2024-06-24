import { ReactNode } from 'react';
import '../../styles/globals.css';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
        {/* Add any other head elements here */}
      </head>
      <body>
        <div className="layout">
          <header>
            <nav>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>© 2024 Your Name. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

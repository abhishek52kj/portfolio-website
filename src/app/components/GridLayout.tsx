import React from 'react';
import { ReactNode } from 'react';

const GridLayout = ({ children }: { children: ReactNode[] }) => {
  const childrenArray = React.Children.toArray(children);
  const topRowItems = Math.ceil(childrenArray.length / 2);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {childrenArray.slice(0, topRowItems)}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {childrenArray.slice(topRowItems)}
      </div>
    </div>
  );
};

export default GridLayout;

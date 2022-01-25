import React from 'react';

import NumberTwoGatsbyPluginImage from '../components/number-2-gatsby-plugin-image';

const Page = () => {
  return (
    <main className="relative">
      <div className="h-screen bg-brand-background">
        <div className="flex flex-cols mx-auto max-w-section h-full items-center justify-center">
          <NumberTwoGatsbyPluginImage />
        </div>
      </div>
    </main>
  );
};

export default Page;
